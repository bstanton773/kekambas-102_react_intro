import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    function handleFormSubmit(event){
        event.preventDefault();
        let name = event.target.username.value;
        let hometown = event.target.hometown.value;
        props.updateUserInfo(name, hometown);
        event.target.username.value = '';
        event.target.hometown.value = '';
    };

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Welcome {props.name} from {props.city}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/buttons">Buttons</Link>
                        <Link className="nav-link" to="/standings">F1 Standing</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                </div>
                <form className="row" onSubmit={handleFormSubmit}>
                    <div className="col">
                        <input type="text" name="username" className="form-control" placeholder='Enter Name'/>
                    </div>
                    <div className="col">
                        <input type="text" name="hometown" className="form-control" placeholder='Enter Hometown'/>
                    </div>
                    <div className="col">
                        <input type="submit" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        </nav>
    )
}
