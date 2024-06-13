import logo from './img2.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Apa Yang <code>Anda Mulai</code> Harus Anda Akhiri.
        </p>
        <a
          className="App-link"
          href="https://it-research.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me!
        </a>
      </header>
    </div>
  );
}

export default App;
