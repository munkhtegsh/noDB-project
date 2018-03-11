import React, { Component } from 'react';
import './Item.css'

export default class Item extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: props.name,
        team: props.team,
        points_per_game: props.points_per_game,
        rebounds_per_game: props.points_per_game
    };
    this.updateInfo = this.updateInfo.bind(this);
    this.updateStats = this.updateStats.bind(this);
    }

    updateInfo(value, name) {
        this.setState({
            [name]: value
        });
    }
    
    updateStats(e) {
        let { name, team, points_per_game, rebounds_per_game } = this.state;
        let player = {
            name,
            team,
            points_per_game,
            rebounds_per_game
        };
        this.props.updatePlayer(this.props.id, player);
    }
    
    render() {
        return (
            <div className="item">
                <img src={this.props.img} width="200" alt="player image"/>
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.updateInfo(e.target.value, e.target.name)}/>
                <div className="item-buttons">
                <button onClick={this.updateStats}>Update</button>
                <button onClick={() => this.props.removePlayer(this.props.id)}>Remove</button> 
                </div>
            </div>
        )
    }
}