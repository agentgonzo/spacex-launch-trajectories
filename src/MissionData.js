import {Table} from "react-bootstrap";
import React from "react";
import PropTypes from 'prop-types'
import data from './assets/data.json'

const altitude = (met, stuff) => {
    const d = stuff.find(element => element.met > met)
    return d.altitude
}

const velocity = (met, stuff) => {
    return stuff.find(element => element.met > met).velocity
}

export const MissionData = (props) => {
    const met = (props.met / 1000)
    const thing = data.map( data => {
        return data
    })
    return <Table striped border hover size="sm">
        <tbody>
            <tr>
                <td>Mission Elapsed Time</td>
                <td>{met.toFixed(1)}s</td>
            </tr>
            <tr>
                <td>Altitude</td>
                <td>{altitude(met, thing)}km</td>
            </tr>
            <tr>
                <td>Velocity</td>
                <td>{velocity(met, thing)}km/h</td>
            </tr>
        </tbody>
    </Table>
}
MissionData.propTypes = {
    met: PropTypes.number
}