const Express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = Express();

const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/';

app.use(cors());

app.get('/weather/:queryExpression', function (req, res) {
    fetch(`${WEATHER_BASE_URL}weather?${req.params.queryExpression}`)
        .then(response => response.json())
        .then(json => {
            res.send(json);
        });
});

app.get('/weather_list/:queryExpression', function (req, res) {
    fetch(`${WEATHER_BASE_URL}find?${req.params.queryExpression}`)
        .then(response => response.json())
        .then(json => {
            res.send(json);
        });
});

app.use(Express.static('./'));
app.listen(8080, () => console.log('App listening on port 8080'));
