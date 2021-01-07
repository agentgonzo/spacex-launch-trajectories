import SplitPane from "react-split-pane";
import {Map} from "./Map";
import ReactPlayer from "react-player";
import React from "react";
import PropTypes from "prop-types";
import {MissionData, useAcceleration, useDownrange, useLocation, useMissionData} from "./MissionData";
import {MissionGraph} from "./MissionGraph";

export const MissionView = (props) => {
    const data = useMissionData(props.met)
    data.acceleration = useAcceleration(data)
    data.downrange = useDownrange(data)
    data.location = useLocation(data.downrange)

    return <SplitPane className="Steve" split="vertical" allowResize={true} defaultSize="50%">
        <SplitPane split="horizonal" allowResize={true} defaultSize="50%">
            <MissionData data={data} />
            <MissionGraph start={props.start} pause={props.pause} reset={props.reset} data={data}/>
        </SplitPane>
        <SplitPane allowResize={true} defaultSize="50%" split="horizontal">
            <Map location={data.location}/>
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