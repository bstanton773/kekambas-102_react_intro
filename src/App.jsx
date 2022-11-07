import Navbar from "./components/Navbar";


function App() {
    let myName = 'Brian';
    let myCity = 'Chicago';
    return (
        <>
            <Navbar name={myName} test={123} city={myCity}/>
            <div className="container">
                <h1>Hello World</h1>
                <h4>Good Bye World</h4>
            </div>
        </>
    )
}

export default App;
