import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import MissionSelector from './MissionSelector';
import {Image, Nav, Navbar} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
    const {mission, selector} = MissionSelector()

    const launch = new Date(mission.launch).toLocaleString()

    return (
            <div className="App">
                <Navbar bg='light' fixed="top">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand>SpaceX Launch Trajectories</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Nav className="mr-auto">
                            <Nav.Item>{mission.title}: {launch}</Nav.Item>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Select Mission" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#dm1">Demo 1</NavDropdown.Item>
                                <NavDropdown.Item href="#dm2">Demo 2</NavDropdown.Item>
                                <NavDropdown.Item href="#crew1">Crew 1</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <header className="App-header">

                    <div>
                        {selector}
                    </div>
                    <div>
                        <p>Your thing is {mission.title}</p>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit
                            {' '}
                            <code>src/App.js</code>
                            {' '}
                            and save to reload.
                        </p>
                        <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </div>
                </header>
            </div>
    );
}

export default App;
