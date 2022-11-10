import React, { Component } from 'react'

export default class Register extends Component {

    handleRegister = event => {
        event.preventDefault();
        console.log(event)
    };

    render() {
        return (
            <>
                <h3 className="text-center">Register</h3>
                <form onSubmit={this.handleRegister}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className='form-control' placeholder='Enter Email' name='email' />
                        <label htmlFor="username">Username</label>
                        <input type="text" className='form-control' placeholder='Enter Username' name='username' />
                        <label htmlFor="password">Password</label>
                        <input type="password" className='form-control' placeholder='Enter Password' name='password' />
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input type="password" className='form-control' placeholder='Re-Enter Password' name='confirmPass' />
                        <input type="submit" value="Register" className='btn btn-success w-100 mt-3' />
                    </div>
                </form>
            </>
        )
    }
}
