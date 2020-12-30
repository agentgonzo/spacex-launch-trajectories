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

export const useAcceleration2 = (missionData) => {
    const step = 1
    const previous = useMissionData(missionData.met - step)
    let number = (missionData.velocity - previous.velocity) / step;
    return number < 100 && number > -100 ? number : 0
}

export const useAcceleration = (missionData) => {
    const previousMissionData = useRef(missionData)
    const previousAcceleration = useRef(0)

    let acceleration = (missionData.velocity - previousMissionData.current.velocity) / (missionData.met - previousMissionData.current.met)
    // if (acceleration !== 0) {
    //     previousAcceleration.current = acceleration
    // }

    if (missionData.met !== previousMissionData.current.met) {
        previousMissionData.current = missionData
        previousAcceleration.current = acceleration
    }
    return previousAcceleration.current
}

export const MissionData = (props) => {
    const met = (props.met)
    const missionData = useMissionData(met)

    const acceleration = useAcceleration(missionData);

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
                <td>{(acceleration / 3.6 / 9.8).toFixed(1)}g</td>
            </tr>
        </tbody>
    </Table>
}
MissionData.propTypes = {
    met: PropTypes.number
}