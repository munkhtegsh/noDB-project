const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const pc = require('./controllers/Player_Controller');

const PORT = 3000;
const app = express();

// app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(cors());

app.get('/api/players', pc.read);
app.post('/api/players', pc.create);
app.put('/api/players/:id', pc.update);
app.delete('/api/players/:id', pc.delete);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

