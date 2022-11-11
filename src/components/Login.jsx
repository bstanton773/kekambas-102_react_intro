import React from 'react'

export default function Login(props) {

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <>
            <h3 className="text-center">Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className='form-control' placeholder='Enter Username' name='username' />
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' placeholder='Enter Password' name='password' />
                    <input type="submit" value="Login" className='btn btn-success w-100 mt-3' />
                </div>
            </form>
        </>
    )
}
