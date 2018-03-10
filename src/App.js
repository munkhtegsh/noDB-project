import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import _ from 'underscore';
import Player from './controllers/Player';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      players: [],
      data: [],
      firstName: '',
      lastName: '',
      localURL: 'http://localhost:3000/api/players',
      baseURL: 'https://nba-players.herokuapp.com/players-stats',
      img: 'https://nba-players.herokuapp.com/players'
    };
    this.addPlayer = this.addPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  componentDidMount() {
    // axios.get(`${this.state.baseURL}`)
      axios.get(`${this.state.localURL}`)
      .then((result) => {
        console.log('HIT')
        let data = result.data
        this.setState({ data })
    });
  }

  addPlayer() {    
    if (this.state.firstName !== '', this.state.lastName !== '') {
      let {firstName, lastName} = this.state;
      firstName = firstName.toLowerCase(); //never forget includes is case sensitive
      let playerInfo = this.state.data.filter((player, i) => player.name.toLowerCase().includes(firstName));
      console.log(playerInfo)
      let {name, team_name, points_per_game, rebounds_per_game} = playerInfo[0];
      let playerStats = {
        id: this.state.id,
        name,
        team_name,
        points_per_game,
        rebounds_per_game,
        pic: `${this.state.img}/${lastName}/${firstName}`
      }
      let players = this.state.players.slice(0);
      players.push(playerStats)
      this.setState((prevState) => {
        let id = prevState.id + 1;
        return {players, id}
      })
    }
  }

  updatePlayer(id, obj) {
    this.state.players.forEach((player, i) => {
      if (player.id === id) {
        player.id = player.id;
        player.name = obj.name || player.name;
        player.team_name = obj.team_name || player.team_name;
        player.rebounds_per_game = obj.rebounds_per_game || player.rebounds_per_game;
        player.points_per_game = obj.points_per_game || player.points_per_game;
        player.pic = player.pic
      }
    })
  }

  // removePlayer(id) {
  //   this.state.players.forEach((player, i) => {
  //     if (player.id === id) {
  //       this.state.players.splice(i, 1);
  //     }
  //   })
  // }

  render() {
    let playersStats = this.state.players.map((playerStats, i) => {
      return (
        <div>
          <Player key={playerStats.id}
                  id={playerStats.id}
                  pic={playerStats.pic}
                  name={playerStats.name}
                  team_name={playerStats.team_name}
                  rebounds_per_game={playerStats.rebounds_per_game}
                  points_per_game={playerStats.points_per_game}
                  updatePlayer={this.updatePlayer}
                  // removePlayer={this.removePlayer}
          />
        </div>
      )
    })
    
    return (
      <div className="container">
        <div className="main img-fluid">
            <div className="header">
              <input type="text" ref="Fi" onChange={(e) => this.setState({firstName: e.target.value})} placeholder="Firstname"/>
              <input type="text" ref="firstName" onChange={(e) => this.setState({lastName: e.target.value})} placeholder="Lastname"/>
              {
                this.state.data.length === 0 
                ? 
                <button  onClick={this.addPlayer} disabled>Add</button>
                : <button  onClick={this.addPlayer}>Add</button>
              }
            </div>
            {playersStats}
        </div>
      </div>
    )
  }
}

export default App;

//private key - 87a62f921a4b37b56a6b99c1a651da89ee7bad2b
//public key - 8877f965d7510b2815fab7b05cd3a880

//1 stateful component which keep track of ...
//2. at least one stateless component show info to user
//3. at least one get endpoint in express
//4. 1 endpoint that uses req.bdoy


//1. 2 more component
//2. re use compnent
//3. URL parameter
//4. query string parameter
//5. external web API, per endpioints used
//6. full CRUD






