import React from 'react';
import './List.css';
import Item from './Item'
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
    })

    return (
        <div className="list">
            <h1>LEBRON TEAM</h1>
            { players }
        </div>
    )    
}


