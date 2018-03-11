import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'underscore';
import List from './controllers/List';
import Header from './controllers/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      players: [],   
      firstName: '',
      lastName: '',
      localURL: 'http://localhost:3005/api/players',
      img: 'https://nba-players.herokuapp.com/players'
    };
    this.addPlayer = this.addPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.changeInput = this.changeInput.bind(this);
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
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    axios.post(`${this.state.localURL}`, {
      firstName,
      lastName
    })
      .then((res) => {
        let players = res.data;
        this.setState({ players });
      });
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

  render() {
    return (
      <div>
        <Header changeInput={this.changeInput} addPlayer={this.addPlayer}/>
        <List 
          players={this.state.players }
          updatePlayer={ this.updatePlayer } 
          removePlayer={ this.removePlayer }
        />


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