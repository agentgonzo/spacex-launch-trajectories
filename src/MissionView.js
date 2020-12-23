import SplitPane from "react-split-pane";
import {Map} from "./Map";
import ReactPlayer from "react-player";
import React from "react";
import PropTypes from "prop-types";
import {MissionData} from "./MissionData";
import {MissionGraph} from "./MissionGraph";

export const MissionView = (props) => {
    return <SplitPane className="Steve" split="vertical" allowResize={true} defaultSize="50%">
        <SplitPane split="horizonal" allowResize={true} defaultSize="50%">
            <MissionData met={props.met}/>
            <MissionGraph start={props.start} pause={props.pause} reset={props.reset} met={props.met}/>
        </SplitPane>
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