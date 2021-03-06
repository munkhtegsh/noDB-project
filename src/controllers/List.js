import React from 'react';
import './List.css';
import Item from './Item';
import Stats from './Stats';

export default (props) => {
    let players = props.players.map((player, i) => {
        return (
            <Item img={ player.img }
                name={ player.name }
                id={ player.id }
                key={ player.id }
                removePlayer={ props.removePlayer }
                updatePlayer={ props.updatePlayer }
                sortBy={ props.sortBy }
            />
        )
    });

    let stephen_team = props.stephen_team.map((member, i) => {
        return (
            <Item img={ member.img }
                name={ member.name }
                id={ member.id }
                key={ member.id }
                // removePlayer={ props.removePlayer }
                // updatePlayer={ props.updatePlayer }
        />
        )
    });

    let stats = props.players.map((member, i) => {
        return (
            <Stats img={ member.img }
            name={ member.name }
            id={ member.id }
            key={ member.id }
            team={ member.team }
            points_per_game = { member.points_per_game }
            rebounds_per_game = { member.rebounds_per_game }
    />
        )
    });

    return (
        <div >
            {
                !props.sortBy
                ?
                <div className="teams">
                    <div className="team-lebron">
                        <div className="wrapper">
                            <h2>TEAM LEBRON</h2>
                            { players }
                        </div>
                    </div>
                        <button className="start-game" onClick={ () => {
                            props.createRandomPlayers()
                        } }>START GAME</button>
                    <div className="team-stephen">
                        <div  className="wrapper">
                        <h2>TEAM STEPHEN</h2>
                        { stephen_team }
                        </div>
                    </div>
                </div>
                :
                <div className="stats">
                    { stats }
                </div>
            }
        </div>
    )    
}
