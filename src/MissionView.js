import SplitPane from "react-split-pane";
import {Map} from "./Map";
import ReactPlayer from "react-player";
import React from "react";
import {MissionTimer} from "./MissionTimer";
import PropTypes from "prop-types";

export const MissionView = (props) => {
    const {met, setTimerRunning} = MissionTimer()

    return <SplitPane split="vertical" allowResize={true} defaultSize="50%">
        <p>T: {met.toFixed(2)}s</p>
        <SplitPane allowResize={true} defaultSize="50%" split="horizontal">
            {Map(met)}
            <ReactPlayer
                    url={props.mission.video}
                    width="100%" height="100%"
                    onPlay={() => setTimerRunning(true)}
                    onPause={() => setTimerRunning(false)}
            />
        </SplitPane>
    </SplitPane>
}
MissionView.propTypes = {
    mission: PropTypes.any
}