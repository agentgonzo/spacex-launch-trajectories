import {Table} from "react-bootstrap";
import React, {useState} from "react";
import PropTypes from 'prop-types'
import data from './assets/crew1.json'
import Spline from 'cubic-spline';

const telemetry = data.map( data => {
    return data
})

const initialData = {
    altitude: 0,
    velocity: 0
}

// let pointer = 0; // A pointer to where we are in the telemetry array at any given met

export const useMissionData = (met) => {
    let [pointer, setPointer] = useState(0)
    if (met < 0) {
        pointer = 0
        return initialData
    }

    // Set the pointer be the frame at-or-before the current MET
    while (met > telemetry[pointer].met) {
        pointer++
        console.log("advance")
    }

    // We now use the datum at the pointer, and the two following points for the spline
    const ts = [
            data[pointer - 1].met,
            data[pointer].met,
            data[pointer + 1].met
    ]
    const alts = [
            data[pointer - 1].altitude,
            data[pointer].altitude,
            data[pointer + 1].altitude,
    ]
    const vels = [
            data[pointer - 1].velocity,
            data[pointer].velocity,
            data[pointer + 1].velocity,
    ]
    let newVar = {
        altitude: new Spline(ts, alts).at(met),
        velocity: new Spline(ts, vels).at(met),
        met: met,
    };
    return newVar
}

export const MissionData = (props) => {
    const met = (props.met)
    const missionData = useMissionData(met)
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
        </tbody>
    </Table>
}
MissionData.propTypes = {
    met: PropTypes.number
}