// Dependencies
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const router = express.Router();

const sports = [
  { id: 'ab123aa', name: 'Baseball' },
  { id: 'ab124aa', name: 'Golf' },
  { id: 'ab125aa', name: 'Hockey' },
  { id: 'ab126bb', name: 'Soccer' },
  { id: 'ab127bb', name: 'Football' },
  { id: 'ab128cc', name: 'Skiing' },
  { id: 'ab129dd', name: 'Ping Pong' },
  { id: 'ab130cc', name: 'Foosball' },
];


// Express
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', function(req, res) {
  res.send('Working');
})

app.get('/sports', function(req, res) {
  res.send(sports);
})

// Start server
app.listen(PORT);
console.log('API is running on port 3000');
