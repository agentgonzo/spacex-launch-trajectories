import 'bootstrap/dist/css/bootstrap.min.css';

import SplitPane from 'react-split-pane';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import MissionSelector from './MissionSelector';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SplitPane split="horizontal">
          <div>
            <MissionSelector />
          </div>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
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
        </SplitPane>
      </header>
    </div>
  );
}

export default App;
