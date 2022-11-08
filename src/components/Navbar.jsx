import React from 'react';

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
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Welcome {props.name} from {props.city}</a>
                <form className="row" onSubmit={handleFormSubmit}>
                    <div className="col">
                        <input type="text" name="username" id="" className="form-control" placeholder='Enter Name'/>
                    </div>
                    <div className="col">
                        <input type="text" name="hometown" id="" className="form-control" placeholder='Enter Hometown'/>
                    </div>
                    <div className="col">
                        <input type="submit" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        </nav>
    )
}
