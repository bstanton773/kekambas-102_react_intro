import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ButtonDisplay from './components/ButtonDisplay';
import Navbar from "./components/Navbar";
import RacerClassDisplay from './components/RacerClassDisplay';
import RacerDisplay from './components/RacerDisplay';


function App() {
    const [myName, setMyName] = useState('Brian');
    const [myCity, setMyCity ]= useState('Chicago');

    function updateUserInfo(userName, userHometown){
        setMyName(userName);
        setMyCity(userHometown);
    };

    return (
        <>
            <Navbar name={myName} city={myCity} updateUserInfo={updateUserInfo}/>
            <div className="container">
                <Routes>
                    <Route path='/' element={<ButtonDisplay />} />
                    <Route path='/standings' element={<RacerDisplay />} />
                </Routes>
                
            </div>
        </>
    )
}

export default App;
