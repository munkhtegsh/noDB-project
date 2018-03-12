import React from 'react';
import './List.css';
import Item from './Item';

export default (props) => {
    let players = props.players.map((player, i) => {
        return (
            <Item img={ player.img }
                name={ player.name }
                id={ player.id }
                key={ player.id }
                removePlayer={ props.removePlayer }
                updatePlayer={ props.updatePlayer }
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
    })

    

    return (
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
    )    
}


