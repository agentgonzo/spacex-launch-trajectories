import SplitPane from "react-split-pane";
import {Map} from "./Map";
import ReactPlayer from "react-player";
import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export const MissionView = (props) => {
    return <SplitPane split="vertical" allowResize={true} defaultSize="50%">
        <div>
            <p>T: {(props.met / 1000).toFixed(1)}s</p>
            <Button onClick={props.start}>Start</Button>
            <Button onClick={props.pause}>Pause</Button>
            <Button onClick={props.reset}>reset</Button>
        </div>
        <SplitPane allowResize={true} defaultSize="50%" split="horizontal">
            {Map(props.met)}
            <ReactPlayer
                    url={props.mission.video}
                    width="100%" height="100%"
                    onPlay={props.start}
                    onPause={props.pause}
            />
        </SplitPane>
    </SplitPane>
}
MissionView.propTypes = {
    mission: PropTypes.object,
    start: PropTypes.func,
    pause: PropTypes.func,
    reset: PropTypes.func,
    met: PropTypes.number,
}