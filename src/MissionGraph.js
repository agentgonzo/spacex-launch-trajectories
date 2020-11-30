import PropTypes from "prop-types";
import React from "react";
import {Button} from "react-bootstrap";

export const MissionGraph = (props) => {
    return <div>
        <Button onClick={props.start}>Start</Button>
        <Button onClick={props.pause}>Pause</Button>
        <Button onClick={props.reset}>Reset</Button>
    </div>
}
MissionGraph.propTypes = {
    start: PropTypes.func,
    pause: PropTypes.func,
    reset: PropTypes.func,
}