import {Table} from "react-bootstrap";
import React from "react";
import PropTypes from 'prop-types'

const altitude = (met) => Math.max(0, met * 3).toFixed(0)
const velocity = (met) => Math.max(0, met * 2).toFixed(0)

export const MissionData = (props) => {
    return <Table striped border hover size="sm">
        <tbody>
            <tr>
                <td>Mission Elapsed Time</td>
                <td>{(props.met / 1000).toFixed(1)}s</td>
            </tr>
            <tr>
                <td>Altitude</td>
                <td>{altitude(props.met)}m</td>
            </tr>
            <tr>
                <td>Velocity</td>
                <td>{velocity(props.met)}km/h</td>
            </tr>
        </tbody>
    </Table>
}
MissionData.propTypes = {
    met: PropTypes.number
}