import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <span className="antennae-dot-container">
                <div className="antennae-dot"/>
                <div className="antennae-dot"/>
            </span>
            <span className="antennae-container">
                <div className="antennae"/>
                <div className="antennae"/>
            </span>
            <span className="bug-head"/>
            <div className="body-space">
                <span className="leg-space">
                    <div className="left-leg"/>
                    <div className="left-leg"/>
                    <div className="left-leg"/>
                </span>
            <span className="bug-body">
              <div className="side">
                  <span className="spot"/>
                  <span className="spot"/>
                  <span className="spot"/>
              </div>
              <div className="vertical-line"/>
              <div className="side">
                  <span className="spot"/>
                  <span className="spot"/>
                  <span className="spot"/>
              </div>
            </span>
                <span className="leg-space">
                    <div className="right-leg"/>
                    <div className="right-leg"/>
                    <div className="right-leg"/>
                </span>
          </div>
        </div>
    );
}

export default App;
