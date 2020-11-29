import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import MissionSelector from './MissionSelector';
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
    const missionFromUrl = window.location.hash.replace("#", "")
    const {mission, selector} = MissionSelector(missionFromUrl)
    const launch = new Date(mission.launch).toLocaleString()

    return (
            <div className="App">
                <SpacexNavBar title={`${mission.title}, launched ${launch}`} selector={selector}/>
                {MissionView(mission)}
            </div>
    );
}

export default App;
