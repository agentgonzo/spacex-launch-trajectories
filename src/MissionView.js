import SplitPane from "react-split-pane";
import {Map} from "./Map";
import ReactPlayer from "react-player";
import React from "react";
import PropTypes from "prop-types";

export const MissionView = (props) => {
    return <SplitPane split="vertical" allowResize={true} defaultSize="50%">
        <div>
            <p>T: {(props.met / 1000).toFixed(1)}s</p>
        </div>
        <SplitPane allowResize={true} defaultSize="50%" split="horizontal">
            <Map met={props.met}/>
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