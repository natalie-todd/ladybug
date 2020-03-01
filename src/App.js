import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
                        <span className="antennae-dot-container">
                <span className="antennae-dot"/>
                <span className="antennae-dot"/>
            </span>
            <span className="antennae-container">
                <span className="antennae"/>
                <span className="antennae"/>
            </span>
            <span className="bug-head"/>
            <span className="bug-body">
              <span className="side">
                  <span className="spot"/>
                  <span className="spot"/>
                  <span className="spot"/>
              </span>
              <span className="vertical-line"/>
              <span className="side">
                  <span className="spot"/>
                  <span className="spot"/>
                  <span className="spot"/>
              </span>
          </span>
        </div>
    );
}

export default App;
