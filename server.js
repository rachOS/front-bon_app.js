/* eslint-disable no-undef */
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));

// the __dirname is the current directory from the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

app.listen(port);
