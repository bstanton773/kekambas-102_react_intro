import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import ButtonDisplay from './components/ButtonDisplay';
import CreatePost from './components/CreatePost';
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
    const [category, setCategory] = useState(null);
    
    const now = new Date();
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) > now));

    function updateUserInfo(userName, userHometown){
        setMyName(userName);
        setMyCity(userHometown);
    };

    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category);
    }

    const logUserIn = () => {
        setLoggedIn(true);
    }

    const logUserOut = () => {
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExp');
    }

    return (
        <>
            <Navbar name={myName} city={myCity} updateUserInfo={updateUserInfo} loggedIn={loggedIn} logUserOut={logUserOut} />
            <div className="container">
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage}/> : null}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/buttons' element={<ButtonDisplay />} />
                    <Route path='/standings' element={<RacerDisplay />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage}/>} />
                    <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn}/>} />
                    <Route path='/create' element={<CreatePost flashMessage={flashMessage} loggedIn={loggedIn}/>} />
                </Routes>
                
            </div>
        </>
    )
}

export default App;
