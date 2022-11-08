import { useState, useEffect } from 'react';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import RacerDisplay from './components/RacerDisplay';


function App() {
    const [myName, setMyName] = useState('Brian');
    const [myCity, setMyCity ]= useState('Chicago');
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    const [count, setCount] = useState(0);

    const [season, setSeason] = useState(2022);
    const [round, setRound] = useState(1);
    const [racers, setRacers] = useState([]);

    function handleClick(step){
        setCount(count + step);
    };

    function updateUserInfo(userName, userHometown){
        setMyName(userName);
        setMyCity(userHometown);
    };

    function updateSeasonRound(inputSeason, inputRound){
        console.log('Hello')
        setSeason(inputSeason);
        setRound(inputRound);
    }

    // Create an effect -> function to execute after every render
    useEffect(() => {
        console.log('useEffect effect callback has been called');
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setRacers(racerStandings);
            });
    }, [season, round]);

    return (
        <>
            <Navbar name={myName} city={myCity} updateUserInfo={updateUserInfo}/>
            <div className="container">
                <h1>Hello World</h1>
                <h4 className='text-center'>Count: {count}</h4>
                {buttons.map((button, idx) => <Button color={button.color} step={button.step} key={idx} handleClick={handleClick}/>)}
                <RacerDisplay updateSeasonRound={updateSeasonRound} racers={racers}/>
            </div>
        </>
    )
}

export default App;
