import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {

    const navigate = useNavigate()
    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You must be logged in to view this page', 'warning');
            navigate('/login');
        }
    })

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <>
            <h3 className="text-center">Create A New Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className='form-control' placeholder='Enter Title' name='title' />
                    <label htmlFor="body">Body</label>
                    <input type="text" className='form-control' placeholder='Enter Body' name='body' />
                    <input type="submit" value="Create Post" className='btn btn-success w-100 mt-3' />
                </div>
            </form>
        </>
    )
}
