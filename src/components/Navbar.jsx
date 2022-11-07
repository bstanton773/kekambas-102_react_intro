import React from 'react';

export default function Navbar(props) {
    // console.log(props);
    // console.log(typeof props);
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Welcome {props.name} from {props.city}</a>
            </div>

        </nav>
    )
}
