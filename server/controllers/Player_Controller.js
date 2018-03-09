const axios = require('axios');
const playerList = require('../data');

// let API = 'https://nba-players.herokuapp.com/players-stats';
let API_PIC = 'https://nba-players.herokuapp.com/players';
let players = [];
let id = 0;

module.exports = {
    create: (req, res, next) => {
        let { firstName, lastName } = req.body;
        // firstName = firstName.toLowerCase();
        // lastName = lastName.toLowerCase();
        // console.log(firstName, lastName)
        axios.get(`${API}/${lastName}/${firstName}`)
            .then((result) => {
                let player = {
                    id,
                    name: result.data.name,
                    team: result.data.team_name,
                    points_per_game: result.data.points_per_game,
                    rebounds_per_game: result.data.rebounds_per_game,
                    img: `${API_PIC}/${lastName}/${firstName}`
                };
                id++;
                players.push(player)
                res.status(200).send(players);
            });
    },

    read: (req, res, next) => {
        res.status(200).send(playerList.players);
        // res.status(200).send(players)
    },

    update: (req, res, next) => {
        players.forEach((player, i) => {
            if (+req.params.id === player.id) {
                player.name = req.body.name || player.team;
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