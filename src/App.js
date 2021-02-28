import logo from './logo.svg';
//import Table from 'react-bootstrap/Table';
import OneInTheBattleTable from './tables/OneInTheBattleTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <p>OneInTheBattle Scores</p>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>UUID</th>
              <th>User Name</th>
              <th>Stats</th>
              <th>Loadout</th>
              <th>Inventory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>1234567890</th>
              <th>HalMoores</th>
              <th>100%</th>
              <th>OP</th>
              <th>Nothing</th>
            </tr>
          </tbody>
        </Table> */}
        <OneInTheBattleTable/>
      </header>
    </div>
  );
}

export default App;
