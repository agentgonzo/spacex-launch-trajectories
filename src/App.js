import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import './App.css';
import MissionSelector, {getMissionByKey, useMissionTimer} from './MissionSelector';
import {Nav, Navbar, Table} from "react-bootstrap";
import PropTypes from 'prop-types'

import {MissionView} from "./MissionView";

const SpacexNavBar = (props) => {
    return <Navbar bg='light' fixed="top">
        <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/">SpaceX Launch Trajectories</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Nav className="mr-auto">
                <Nav.Item>{props.title}</Nav.Item>
            </Nav>
            <MissionSelector mission={props.mission} onChange={props.onMissionChange}/>
        </Navbar.Collapse>
    </Navbar>
}
SpacexNavBar.propTypes = {
    title: PropTypes.string,
    mission: PropTypes.object,
    onMissionChange: PropTypes.func,
}

function App() {
    const initialMission = window.location.hash.replace("#", "")
    const [mission, setMission] = useState(getMissionByKey(initialMission) || getMissionByKey('crew-1'))
    const {met, pause, reset, start} = useMissionTimer()
    const launch = new Date(mission.launch).toLocaleString()

    const onMissionChange = (missionKey) => {
        setMission(missionKey)
        reset()
    }

    return <div className="App">
        <SpacexNavBar title={`${mission.title}, launched ${launch}`} mission={mission} onMissionChange={onMissionChange}/>
        <MissionView mission={mission} met={met} start={start} pause={pause} reset={reset}/>
    </div>
}

export default App;
