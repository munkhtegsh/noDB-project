import React from 'react';
import './Winner.css';

export default (props) => (
    <div className="winner">
        <div className="details">
            <h1> WINNER is {props.winner} </h1>
            <div className="stats">
                <h3> Lebron team score (stats): {props.lebronTeamScore}</h3>
                <h3> Stephen team score (stats): {props.stephenTeamScore} </h3>
                <form action="">
                    <button type="submit" onSubmit={props.onSubmit}>Play again!</button>
                </form>
            </div>
        </div>
    </div>
)