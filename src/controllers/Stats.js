import React from 'react';
import './Stats.css';
export default (props) => (
    <div className="item">
        <img src={props.img}  alt="player image"/>
        <h3>{ props.name }</h3>
        <p> Team name: <span> { props.team } </span> </p>
        <p> Points per game: <span>{ props.points_per_game }</span></p>
        <p> Rebounds per game: <span>{ props.rebounds_per_game }</span></p>
    </div>
)