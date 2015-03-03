'use strict';

var express = require('express'),
    app = express(),
    port = Number(process.env.PORT || 3000),
    database = [
        {id: 1, t: 'one fish'},
        {id: 2, t: 'two fish'},
        {id: 3, t: 'red fish'},
        {id: 4, t: 'blue fish'}
    ]

app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));

app.get('/api/orders', function getOrders (req, res) {
    res.json(database);
});

app.get('/api/orders/:id', function GetOrder (req, res) {
    res.json(database[Number(req.params.id) - 1]);
});

app.get('*', function index (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);
