import { useState } from 'react';
import Button from "./components/Button";
import Navbar from "./components/Navbar";


function App() {
    let myName = 'Brian';
    let myCity = 'Chicago';
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    const [count, setCount] = useState(0);

    function handleClick(step){
        setCount(count + step);
    };

    return (
        <>
            <Navbar name={myName} test={123} city={myCity}/>
            <div className="container">
                <h1>Hello World</h1>
                <h4 className='text-center'>Count: {count}</h4>
                {buttons.map((button, idx) => <Button color={button.color} step={button.step} key={idx} handleClick={handleClick}/>)}
            </div>
        </>
    )
}

export default App;
