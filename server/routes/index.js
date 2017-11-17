const path = require('path');
const fetch = require('node-fetch');
const ROUTES = require('./../constants/routes.constant');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname, './../../index.html'));
    });

    app.get('/about', function (req, res) {
        res.sendFile(path.resolve(__dirname, './../../index.html'));
    });

    app.get('/weather/:queryExpression', function (req, res) {
        fetch(`${ROUTES.WEATHER_BASE_URL}weather?${req.params.queryExpression}`)
            .then(response => response.json())
            .then(json => {
                res.send(json);
            });
    });

    app.get('/weather_list/:queryExpression', function (req, res) {
        fetch(`${ROUTES.WEATHER_BASE_URL}find?${req.params.queryExpression}`)
            .then(response => response.json())
            .then(json => {
                res.send(json);
            });
    });
};
