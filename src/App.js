import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import MissionSelector from './MissionSelector';
import {Nav, Navbar} from "react-bootstrap";
import PropTypes from 'prop-types'

import {MissionView} from "./MissionView";

class SpacexNavBar extends React.Component {
    static get propTypes() {
        return {
            title: PropTypes.string,
            selector: PropTypes.any
        };
    }

    render() {
        return <Navbar bg='light'>
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand href="/">SpaceX Launch Trajectories</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Nav className="mr-auto">
                    <Nav.Item>{this.props.title}</Nav.Item>
                </Nav>
                {this.props.selector}
            </Navbar.Collapse>
        </Navbar>
    }
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
