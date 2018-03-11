import React from 'react';
import './Players.css';
import Player_Info from './Player-Info';

export default class Player extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            team: this.props.team,
            points_per_game: this.props.points_per_game,
            rebounds_per_game: this.props.points_per_game
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
        let players = this.props.players.map(( player, i ) => {
          return (
            <Player_Info img={ player.img }
                    name={ this.state.name }
                    id={ player.id }
                    key={ player.id }
                    updateInfo={this.updateInfo}
                    removePlayer={ this.props.removePlayer }
                    updatePlayer={ this.props.updateInfo }
            />
          )
        })

        return (
            <div className="players-container">
                { players }
            </div>
        )
    }
}


{/* <input type="text" name="team_name" value={this.state.team_name} onChange={this.changeTeam} />
<br/>
<input type="text" name="points_per_game" value={this.state.rebounds_per_game} onChange={this.changeRebounds} />
<br/>
<input type="text" name="rebounds_per_game" value={this.state.points_per_game} onChange={this.changePoints}/> */}