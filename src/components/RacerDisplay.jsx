import React from 'react'

export default function RacerDisplay(props) {

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(e);
        let season = e.target.season.value;
        let round = e.target.round.value;
        props.updateSeasonRound(season, round);
    }

    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']
    return (
        <div>
            <h1 className="text-center my-3">F1 Racer Standings</h1>
            <form className='row my-3' onSubmit={handleFormSubmit}>
                <div className="col-12 col-sm-5">
                    <input type="text" name="season" placeholder="Enter Season" className="form-control" />
                </div>
                <div className="col-12 col-sm-5">
                    <input type="text" name="round" placeholder="Enter Round" className="form-control" />
                </div>
                <div className="col">
                    <input type="submit" value="Search" className="btn btn-success w-100" />
                </div>
            </form>

            <table className='table table-primary table-striped my-3'>
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.racers.map(racer => {return (
                        <tr key={racer.position}>
                            <th>{racer.position}</th>
                            <td>{racer.Driver.givenName}</td>
                            <td>{racer.Driver.familyName}</td>
                            <td>{racer.points}</td>
                            <td>{racer.wins}</td>
                            <td>{racer.Driver.nationality}</td>
                            <td>{racer.Constructors[0].name}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}
