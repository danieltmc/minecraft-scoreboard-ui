import Table from 'react-bootstrap/Table';
const axios = require('axios').default;

export async function getOneInTheBattleScores() {
    // let response = await axios.get('http://mcbcc.minecraftr.us:8079/api/scores/oneinthebattle/all', {
    //   headers: {'Access-Control-Allow-Origin': '*'},
    //   responseType: 'json'
    // });
    let response = await axios.get('localhost:8079/api/scores/oneinthebattle/all');
    console.log(response);
    return response;
}

export default function OneInTheBattleTable() {
    let dtos = getOneInTheBattleScores();
    let fullTable = dtos.array.map(dto => {
        return (
            <tbody>
                <tr>
                    <th>{dto.playerUuid}</th>
                    <th>{dto.playerName}</th>
                    <th>{dto.stats}</th>
                    <th>{dto.loadout}</th>
                    <th>{dto.inventory}</th>
                </tr>
            </tbody>
        )
    });
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
                {fullTable}
            </Table>
        </div>
    );
}