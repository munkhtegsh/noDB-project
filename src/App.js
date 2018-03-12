import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'underscore';
import List from './controllers/List';
import Header from './controllers/Header';
import TEAM_STEPHEN_DATA from './stephen_data';
import Winner from './controllers/Winner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      stephen_team: [{
        "id": 0,
        "name": "Stephen Curry",
        "points_per_game": "8.6",
        "rebounds_per_game": "5.6",
        "img": "https://nba-players.herokuapp.com/players/curry/stephen"
      }],
      players: [],   
      firstName: '',
      lastName: '',
      localURL: 'http://localhost:3005/api/players',
      img: 'https://nba-players.herokuapp.com/players',
      winner: '',
      lebronTeamScore: 0,
      stephenTeamScore: 0,
      sortBy: '',
      sortURL: 'http://localhost:3005/api/points'
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.createRandomPlayers = this.createRandomPlayers.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  changeInput(value, name) {
    this.setState({ 
      [name]: value
     });
  } 

  componentDidMount() {
      axios.get(`${this.state.localURL}`)
      .then(( result ) => {
        let players = result.data;
        this.setState({ players })
      });
  }

  addPlayer() {    
    if (this.state.players.length <= 4) { //why length is not 5???
      let firstName = this.state.firstName;
      let lastName = this.state.lastName;
      axios.post(`${this.state.localURL}`, {
        firstName,
        lastName
      })
        .then((res) => {
          let players = res.data;
          this.setState({ players, firstName: '', lastName: '' }); //why is state not cleared out
        });
    }
  }

  updatePlayer( id, playerInfo ) {
    axios.put(`${this.state.localURL}/${id}`, playerInfo)
      .then((res) => {
        let players = res.data;
        this.setState({ players })
      });
  }

  removePlayer(id) {
    axios.delete(`${this.state.localURL}/${id}`)
      .then((res) => {
        let players = res.data;
        this.setState({ players })
      });
  }

  createRandomPlayers() {
    let stephen_team = this.state.stephen_team.slice(0);
    let randomNumContainer = [];
    TEAM_STEPHEN_DATA.players.forEach((player, i) => {
      let randomPlayer = Math.floor(Math.random() * (11 - 1) + 0);
      if (randomNumContainer.length !== 4 && randomNumContainer.indexOf(randomPlayer) === -1) {
      randomNumContainer.push(randomPlayer);
      stephen_team.push(TEAM_STEPHEN_DATA.players[randomPlayer]);
      }
      this.setState({
        stephen_team
      });
    });

    let getWinner = () => {
      if (this.state.players.length === 5 && this.state.stephen_team.length === 5) {
        let avgLebronTeam = _.reduce(this.state.players, (memo, num) => {
          return memo + (parseInt(num.rebounds_per_game, 10) + parseInt(num.points_per_game, 10));
        }, 0);
  
        let avgStephenTeam = _.reduce(this.state.stephen_team, (memo, num) => {
          return memo + (parseInt(num.rebounds_per_game, 10) + parseInt(num.points_per_game,10));
        }, 0);
        console.log(avgLebronTeam, avgStephenTeam)

        let winner = 'TEAM LEBRON';
        let lebronTeamScore = avgLebronTeam;
        let stephenTeamScore = avgStephenTeam;
        avgLebronTeam > avgStephenTeam ? winner : winner = 'TEAM STEPHEN';
        this.setState({ winner, lebronTeamScore, stephenTeamScore });
      }
    }

    _.delay(getWinner, 4000);
  }

  refreshPage() {
    let players = this.state.players[0];
    this.setState({players});
  }

  sortBy(e) {
    let sortBy = parseInt(e.target.value, 10);
      axios.get(`${this.state.sortURL}/?points_per_game=${sortBy}`)
        .then((res) => {
          let players = res.data.sort((a, b) => b.points_per_game - a.points_per_game);
          this.setState({
            players,
            sortBy 
          })
        })
  }

  render() {
    return (
      <div>
           {
             !this.state.winner
             ? 
               <div>
                <Header changeInput={this.changeInput} addPlayer={this.addPlayer}/>
                <List 
                 players={this.state.players }
                 updatePlayer={ this.updatePlayer } 
                 removePlayer={ this.removePlayer }
     
                 stephen_team={ this.state.stephen_team }
                 createRandomPlayers={ this.createRandomPlayers }
                 sortBy = { this.state.sortBy }
               />

              </div>
             :
               <Winner winner={this.state.winner}
                        lebronTeamScore={this.state.lebronTeamScore}
                        stephenTeamScore={this.state.stephenTeamScore}
                        onSubmit={this.refreshPage}
               />
           }
              <input style={{backgroundColor: "black", color: "white", float: "right", fontWeight:"bold", position: "absolute", right:"20px", bottom:"30px"}} 
               type="number" placeholder="Sort by points" 
              onChange={ this.sortBy }/>
      </div>
    )
  }
}

export default App;



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






      // <div className="container">
      //   <div className="main img-fluid">
      //       <div className="header">
      //         <input type="text" ref="Fi" onChange={(e) => this.setState({firstName: e.target.value})} placeholder="Firstname"/>
      //         <input type="text" ref="firstName" onChange={(e) => this.setState({lastName: e.target.value})} placeholder="Lastname"/>
      //         {
      //           this.state.data.length === 0 
      //           ? 
      //           <button  onClick={this.addPlayer} disabled>Add</button>
      //           : <button  onClick={this.addPlayer}>Add</button>
      //         }
      //       </div>
      //       {playersStats}
      //   </div>
      // </div>