import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'underscore';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      data: [],
      firstName: '',
      lastName: '',
      localURL: 'http://localhost:3000/api/players',
      baseURL: 'https://nba-players.herokuapp.com/players-stats',
      img: 'https://nba-players.herokuapp.com/players'
    };
    
    this.addPlayer = this.addPlayer.bind(this);
  }

  componentDidMount() {
    // axios.get(`${this.state.baseURL}`)
      axios.get(`${this.state.localURL}`)
      .then((result) => {
        let data = result.data
        this.setState({ data })
    });
  }

  addPlayer() {
    let {firstName, lastName} = this.state;
    firstName = firstName.toLowerCase(); //never forget includes is case sensitive
    let players = this.state.data.filter((player, i) => player.name.toLowerCase().includes(firstName))[0];
    this.setState({players})
  }

  // submit(e) {
  //   e.preventDefault();
  //   this.setState({
  //     firstName: this.refs.firstName.value,
  //     lastName: this.refs.lastName.value
  //   })
  // }

  render() {
    return (
      <div className="App">
        {/* <form action="" submit={this.state.handleSubmit}> */}
          <input type="text" ref="firstName" onChange={(e) => this.setState({firstName: e.target.value})} placeholder="firstname"/>
          <input type="text" ref="firstName" onChange={(e) => this.setState({lastName: e.target.value})} placeholder="lastname"/>
          <button onClick={this.addPlayer}>Click</button>
        {/* </form> */} 

        {/* <img src={this.state.img} alt="Girl in a jacket" width="140" height="100" /> */}
        {console.log(JSON.stringify(this.state.players))}
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
