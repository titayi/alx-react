import holberton_logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holberton_logo}  alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-boddy">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
	<p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
