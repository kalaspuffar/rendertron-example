var express = require('express');
var app = express();

app.use(express.static('news'));

app.listen(8080);
