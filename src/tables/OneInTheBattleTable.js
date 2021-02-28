import Table from 'react-bootstrap/Table';

export default function OneInTheBattleTable() {
    return (
        <div>
            <p>OneInTheBattle Scores</p>
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
        </Table>
        </div>
    );
}