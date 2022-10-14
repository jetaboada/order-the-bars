// import logo from './logo.svg';
import './App.css';
import Qpartidas from './components/Qpartidas'
import BarsContainer from './components/BarsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order the bars</h1>
      </header>
      <body>
        <Qpartidas q='5' />
        <BarsContainer />
      </body>
    </div>
  );
}

export default App;
