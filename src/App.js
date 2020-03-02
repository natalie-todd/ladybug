import React from 'react';
import './App.css';

const getBodyParts = (classNamed, num) => {
    const arr = [...Array(num)].map((_, i) => <div key={i.toString()} className={classNamed}/>);
    return <span className={`${classNamed}-container`}>
        {arr}
        </span>
};

function App() {
    return (
        <div className="App">
            {getBodyParts("antennae-dot", 2)}
                {getBodyParts("antennae", 2)}
            <span className="bug-head"/>
            <div className="body-space">
                    {getBodyParts("left-leg", 3)}
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
                    {getBodyParts("right-leg", 3)}
            </div>
        </div>
    );
}

export default App;
