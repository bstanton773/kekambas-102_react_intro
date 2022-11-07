

function App() {
  let randomNumber = Math.floor(Math.random() * 2);
  const element = <h1>Hello World - {randomNumber}</h1>
  return element;
}

export default App;
