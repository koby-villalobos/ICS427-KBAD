import logo from './lock-128.png';
import './App.css';
import Credentials from './credentials';
import FirstComponent from './FirstComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstComponent></FirstComponent>

        <Credentials></Credentials>
        
      </header>
    </div>
  );
}

export default App;
