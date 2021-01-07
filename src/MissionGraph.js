import PropTypes from "prop-types";
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import ScatterChart from "recharts/lib/chart/ScatterChart";

import {CartesianGrid, Legend, Scatter, Tooltip, XAxis, YAxis, ZAxis} from "recharts";

const RenderNoShape = () => {
    return null;
}

export const MissionGraph = (props) => {
    const [points, setPoints] = useState([])

    if (props.data.met < 0 && points.length > 0) {
        setPoints([]) // Hacky
    } else if (props.data.met > points.length) { // Add a point to the graph every second
        props.data.met = props.data.met
        points.push(props.data)
        setPoints(points)
    }

    return <div>
        <MissionGraph2 pause={props.pause} reset={props.reset} start={props.start}/>
        <ScatterChart width={600} height={300}>
            <CartesianGrid/>
            <XAxis type="number" dataKey="met" name="met"/>
            <YAxis yAxisId="velocity" type="number" dataKey="velocity" name="velocity" unit="km/h" stroke="green"/>
            <YAxis yAxisId="altitude" type="number" dataKey="altitude" name="altitude" orientation="right" unit="km" stroke="blue"/>
            <YAxis yAxisId="acceleration" type="number" dataKey="acceleration" name="acceleration" orientation="right" unit="g" stroke="red"/>
            <Scatter yAxisId="velocity" name="velocity" data={points} line fill="green" shape={<RenderNoShape/>}/>
            <Scatter yAxisId="altitude" name="altitude" data={points} line fill="blue" shape={<RenderNoShape/>}/>
            <Scatter yAxisId="acceleration" name="acceleration" data={points} line fill="red" shape={<RenderNoShape/>}/>
            <Legend layout="vertical"/>
        </ScatterChart>
    </div>
}
MissionGraph.propTypes = {
    data: PropTypes.object,
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