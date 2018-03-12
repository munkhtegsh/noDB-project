const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const pc = require('./controllers/Player_Controller');

const PORT = 3005;
const app = express();

// app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(cors());

app.get(`/api/players`, pc.read);
app.post('/api/players', pc.create);
app.put('/api/players/:id', pc.update);
app.delete('/api/players/:id', pc.delete);

//using query => you need to change only end point!
app.get(`/api/points`, pc.filterByPointPerGame); 
app.get(`/api/rebounds`, pc.filterByReboundsPerGame); 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

