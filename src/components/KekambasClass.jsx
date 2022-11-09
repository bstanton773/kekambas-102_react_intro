import React, { Component } from 'react'

export default class KekambasClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            students: []
        };
    }

    // componentDidMount(){
    //     fetch("https://kekambas-bs.herokuapp.com/kekambas")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             this.setState({
    //                 students:data
    //             });
    //         })
    // }

    revealStudents = () => {
        if (this.state.students.length !== 0){
            this.setState({students: []})
        } else {
            fetch("https://kekambas-bs.herokuapp.com/kekambas")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        students:data
                    });
                })
        }
    }

    render(){
        return (
            <div className='row'>
                <div className="col">
                    <h1 className="text-center">Greatest Students:</h1>
                    <button className="btn btn-warning w-100" onClick={this.revealStudents}>
                        {this.state.students.length !== 0 ? "Hide" : "Reveal" }
                    </button>
                    <ul className='list-group'>
                        {this.state.students.map(student => (
                            <li className='list-group-item' key={student.id}>{student.first_name} {student.last_name}</li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
