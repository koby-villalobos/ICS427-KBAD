import logo from './logo.svg';
import './App.css';
import Credentials from './credentials';
import FirstComponent from './FirstComponent';
import './lock-128.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./lock-128.png"/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <FirstComponent></FirstComponent>

        <Credentials></Credentials>


        <a
          className="App-link"
          href="https://github.com/koby-villalobos/ICS427-KBAD"
          target="_blank"
          rel="noopener noreferrer"
        >
          KBAD Github
        </a>
      </header>
      <p id="developers">Developed by Koby Villalobos, Braden Betz, Adrian Au, Davin Takahashi</p>
    </div>
  );
}

export default App;
