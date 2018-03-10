import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            team: this.props.team,
            points_per_game: this.props.points_per_game,
            rebounds_per_game: this.props.points_per_game
        };
        this.changeName = this.changeName.bind(this)
        this.changeTeam = this.changeTeam.bind(this)
        this.changePoints = this.changePoints.bind(this)
        this.changeRebounds = this.changeRebounds.bind(this)
        this.updateStats = this.updateStats.bind(this);
    }

    changeName(e) {
        let name = e.target.value;
        this.setState({ name })
    }

    changeTeam(e) {
        let team = e.target.value;
        this.setState({ team })
    }

    changePoints(e) {
        let points_per_game = e.target.value;
        this.setState({ points_per_game })
    }

    changeRebounds(e) {
        let rebounds_per_game = e.target.value;
        this.setState({ rebounds_per_game })
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
            <div>
                <img src={this.props.img} width="100" alt="player image"/>
                <br/>
                <input type="text" value={this.state.name} onChange={this.changeName}/>
                <br/>
                <button onClick={this.updateStats}>Update</button>
                <button onClick={() => this.props.removePlayer(this.props.id)}>Remove</button>
                
                {/* <button type="Submit" removePlayer={this.props.removePlayer(this.props.id)}>Update</button> */}
            </div>
        )
    }
}


{/* <input type="text" name="team_name" value={this.state.team_name} onChange={this.changeTeam} />
<br/>
<input type="text" name="points_per_game" value={this.state.rebounds_per_game} onChange={this.changeRebounds} />
<br/>
<input type="text" name="rebounds_per_game" value={this.state.points_per_game} onChange={this.changePoints}/> */}