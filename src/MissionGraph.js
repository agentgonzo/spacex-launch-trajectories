import PropTypes from "prop-types";
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import ScatterChart from "recharts/lib/chart/ScatterChart";

// import crew1 from './assets/crew1.json'
import {CartesianGrid, Legend, Scatter, Tooltip, XAxis, YAxis, ZAxis} from "recharts";
import {useMissionData} from "./MissionData";

// const telemetry = crew1.map( data => {
//     return data
// })

const RenderNoShape = (props) => {
    return null;
}

export const MissionGraph = (props) => {
    const [points, setPoints] = useState([])
    const missionData = useMissionData(props.met)

    if (props.met < 0 && points.length > 0) {
        setPoints([]) // Hacky
    } else if (props.met * 10 > points.length) { // Add a point to the graph every second
        missionData.met = props.met
        points.push(missionData)
        // setPoints(points)
    }

    return <div>
        <MissionGraph2 pause={props.pause} reset={props.reset} start={props.start}/>
        <ScatterChart width={600} height={300}>
            <CartesianGrid/>
            <XAxis type="number" dataKey="met" name="met"/>
            <YAxis yAxisId="left" type="number" dataKey="velocity" name="velocity" unit="km/s"/>
            <YAxis yAxisId="right" type="number" dataKey="altitude" name="altitude" orientation="right" unit="km"/>
            <Scatter yAxisId="left" name="velocity" data={points} line fill="#008800" shape={<RenderNoShape/>}/>
            <Scatter yAxisId="right" name="altitude" data={points} line fill="#8884d8" shape={<RenderNoShape/>}/>
            <Tooltip cursor={{strokeDasharray: '3 3'}}/>
            <Legend/>
        </ScatterChart>
    </div>
}
MissionGraph.propTypes = {
    met: PropTypes.number,
    start: PropTypes.func,
    pause: PropTypes.func,
    reset: PropTypes.func,
}

export const MissionGraph2 = (props) => {
    return <div>
        <Button onClick={props.start}>Start</Button>
        <Button onClick={props.pause}>Pause</Button>
        <Button onClick={props.reset}>Reset</Button>
    </div>
}
MissionGraph2.propTypes = {
    start: PropTypes.func,
    pause: PropTypes.func,
    reset: PropTypes.func,
    met: PropTypes.number,
}