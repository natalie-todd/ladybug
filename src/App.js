import React, {useState} from 'react';
import './App.css';

const getBodyParts = (classNamed, num) => {
    const arr = [...Array(num)].map((_, i) => <div key={i.toString()} className={classNamed}/>);
    return <span className={`${classNamed}-container`}>
        {arr}
        </span>
};

function App() {
    const [total, setTotal] = useState(6);
    return (
        <div className="App">
            {getBodyParts("antennae-dot", 2)}
            {getBodyParts("antennae", 2)}
            <span className="bug-head"/>
            <div className="body-space" onClick={() => setTotal(Math.floor((Math.random() * 6) + 1))}>
                {getBodyParts("left-leg", 3)}
                <span className="bug-body">
                {getBodyParts("spot", total <= 3 ? total : 3)}
                    <div className="vertical-line"/>
                    {getBodyParts("spot", total > 3 ? total -3 : 0)}
            </span>
                {getBodyParts("right-leg", 3)}
            </div>
        </div>
    );
}

export default App;
