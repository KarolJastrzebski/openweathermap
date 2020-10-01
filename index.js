require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.use(express.static('public'));

app.get('/forecast', async (req, res) => {
  const cityName = req.query.city;
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`

  axios.get(url).then(response => res.send(response.data))
});

app.listen(port, () => {
  console.log('Listening on %d', port);
});
