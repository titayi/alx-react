import holberton_logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
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
	<form>
	  <label htmlFor="email">Email:</label>
	  <input type="email" name="email"></input>
	  <label htmlFor="password">Password:</label>
	  <input type="password" name="password"></input>
	  <button>OK</button>
	</form>
      </div>
      <div className="App-footer">
	<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
