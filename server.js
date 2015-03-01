'use strict';

var express = require('express'),
    app = express(),
    port = Number(process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/bower_components'));

app.get('/', function index (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/orders', function getOrders (req, res) {
  res.json([
  		{t: 'one fish'},
  		{t: 'two fish'},
  		{t: 'red fish'},
  		{t: 'blue fish'}
  	]);
});

app.get('/api/orders/:id', function GetOrder (req, res) {
  res.json({});
});

app.listen(port);
