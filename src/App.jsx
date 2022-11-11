import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import ButtonDisplay from './components/ButtonDisplay';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from "./components/Navbar";
// import RacerClassDisplay from './components/RacerClassDisplay';
import RacerDisplay from './components/RacerDisplay';
import Register from './components/Register';


function App() {
    const [myName, setMyName] = useState('Brian');
    const [myCity, setMyCity ]= useState('Chicago');

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null)

    function updateUserInfo(userName, userHometown){
        setMyName(userName);
        setMyCity(userHometown);
    };

    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category);
    }

    return (
        <>
            <Navbar name={myName} city={myCity} updateUserInfo={updateUserInfo}/>
            <div className="container">
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage}/> : null}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/buttons' element={<ButtonDisplay />} />
                    <Route path='/standings' element={<RacerDisplay />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage}/>} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} />} />
                </Routes>
                
            </div>
        </>
    )
}

export default App;
