const axios = require('axios');
const PLAYER_LIST_API = require('../data');

let API_PIC = 'https://nba-players.herokuapp.com/players';
let players = [{
    id: 0,
    name: "LeBron James",
    team: "Cavalers",
    points_per_game: "26.8",
    rebounds_per_game: "7.9",
    img: "https://nba-players.herokuapp.com/players/James/Lebron"
  }];
let id = 0;

module.exports = {
    create: (req, res, next) => {
        //name, team, points_per_game, rebounds_per_game 
        let { firstName, lastName} = req.body;
        let player = PLAYER_LIST_API.players.filter((player, i) => {
            let fullName = player.name.toLocaleLowerCase();
            let name = firstName.toLocaleLowerCase();
            if (fullName.includes(name)) {
                return player;
            }
        });

        id++;
        let { name, team, points_per_game, rebounds_per_game } = player[0];
        let stats = {
            id,
            name,
            team,
            points_per_game,
            rebounds_per_game,
            img: `${API_PIC}/${lastName}/${firstName}`
        };
        players.push(stats);
        res.status(200).send(players);
    },
    //only getting info from player []
    read: (req, res, next) => {
        res.status(200).send(players);
    },

    update: (req, res, next) => {
        players.forEach((player, i) => {
            if (+req.params.id === player.id) {
                player.name = req.body.name || player.name;
                player.team = req.body.team_name || player.team,
                player.points_per_game = req.body.points_per_game || player.points_per_game,
                player.rebounds_per_game = req.body.rebounds_per_game || player.rebounds_per_game
            }
        })
        res.status(200).send(players)
    },

    delete: (req, res, next) => {
        players.forEach((player, i) => {
            if (+req.params.id === player.id) {
                players.splice(i, 1);
            }
        });
        res.status(200).send(players);
    }
};