import {Table} from "react-bootstrap";
import React, {useEffect, useRef} from "react";
import PropTypes from 'prop-types'
import data from './assets/crew1.json'
import Spline from 'cubic-spline';

const telemetry = data.map( data => {
    return data
})

const initialData = {
    met: 0,
    altitude: 0,
    velocity: 0,
    acceleration: 0,
}

export const useMissionData = (met) => {
    const pointer = useRef(0)
    if (met < 0) {
        pointer.current = 0
        return initialData
    }

    // Set the pointer be the frame at-or-before the current MET
    while (met > telemetry[pointer.current].met) {
        // console.log("advance")
        pointer.current++
    }
    const ptr = pointer.current

    // We now use the datum at the pointer, and the two following points for the spline
    const ts = [
            data[ptr - 1].met,
            data[ptr].met,
            data[ptr + 1].met
    ]
    const alts = [
            data[ptr - 1].altitude,
            data[ptr].altitude,
            data[ptr + 1].altitude,
    ]
    const vels = [
            data[ptr - 1].velocity,
            data[ptr].velocity,
            data[ptr + 1].velocity,
    ]

    const velocity = new Spline(ts, vels).at(met)
    const altitude = new Spline(ts, alts).at(met);
    return {
        met,
        altitude,
        velocity,
    }
}

export const useAcceleration = (missionData) => {
    const previousMissionData = useRef(missionData)
    const previousAcceleration = useRef(0)
    const acceleration = (missionData.velocity - previousMissionData.current.velocity) / (missionData.met - previousMissionData.current.met)

    if (missionData.met !== previousMissionData.current.met) {
        previousMissionData.current = missionData
        previousAcceleration.current = acceleration
    }
    // Convert from km/h/s into g
    return previousAcceleration.current / 3.6 / 9.8
}

export const useDownrange = (missionData) => {
    const previousMissionData = useRef(missionData)
    const previousDownrange = useRef(0)
    const previousVelocity = useRef(0)
    const previousAltitude = useRef(0)

    const altChange = missionData.altitude - previousAltitude.current
    // avgVel is in km/h - we want km/s
    const avgVel = (missionData.velocity + previousVelocity.current) / 2 / 3600
    const displacement = avgVel * (missionData.met - previousMissionData.current.met)

    // Use pythagoras to get the downrange change
    const downrange = Math.sqrt(Math.pow(displacement, 2) - Math.pow(altChange, 2) ) || 0
    console.log(downrange)

    if(missionData.met < 0) {
        previousDownrange.current = 0
    }

    if (missionData.met !== previousMissionData.current.met) {
        previousMissionData.current = missionData
        previousAltitude.current = missionData.altitude
        previousVelocity.current = missionData.velocity
        previousDownrange.current = previousDownrange.current + downrange
    }

    return previousDownrange.current
}

export const MissionData = (props) => {
    const met = (props.met)
    const missionData = useMissionData(met)

    const acceleration = useAcceleration(missionData)
    const downrange = useDownrange(missionData)

    return <Table striped border hover size="sm">
        <tbody>
            <tr>
                <td>Mission Elapsed Time</td>
                <td>{met.toFixed(1)}s</td>
            </tr>
            <tr>
                <td>Altitude</td>
                <td>{missionData.altitude.toFixed(2)}km</td>
            </tr>
            <tr>
                <td>Velocity</td>
                <td>{missionData.velocity.toFixed(0)}km/h</td>
            </tr>
            <tr>
                <td>Acceleration</td>
                <td>{(acceleration).toFixed(1)}g</td>
            </tr>
            <tr>
                <td>Downrange</td>
                <td>{(downrange).toFixed(1)}km</td>
            </tr>
        </tbody>
    </Table>
}
MissionData.propTypes = {
    met: PropTypes.number
}