import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import './App.css';
import MissionSelector, {getMissionByKey} from './MissionSelector';
import {Nav, Navbar} from "react-bootstrap";
import PropTypes from 'prop-types'

import {MissionView} from "./MissionView";

const SpacexNavBar = (props) => {
    return <Navbar bg='light'>
        <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/">SpaceX Launch Trajectories</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Nav className="mr-auto">
                <Nav.Item>{props.title}</Nav.Item>
            </Nav>
            {props.selector}
        </Navbar.Collapse>
    </Navbar>
}
SpacexNavBar.propTypes = {
    title: PropTypes.string,
    selector: PropTypes.any
}

function App() {
    const initialMission = window.location.hash.replace("#", "")
    const [mission, setMission] = useState(getMissionByKey(initialMission) || getMissionByKey('crew-1'))

    const launch = new Date(mission.launch).toLocaleString()

    return <div className="App">
        <SpacexNavBar title={`${mission.title}, launched ${launch}`} selector={MissionSelector(mission, setMission)}/>
        <MissionView mission={mission}/>
    </div>
}

export default App;
