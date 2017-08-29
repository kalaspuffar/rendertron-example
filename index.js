const express = require('express');
const rendertron = require('rendertron-middleware');
const path = require('path');
const app = express();

app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:3000/render',
  injectShadyDom: true
}));

app.use('/bower_components', express.static(path.resolve(__dirname, 'news/bower_components')));
app.use('/data', express.static(path.resolve(__dirname, 'news/data')));
app.use('/src', express.static(path.resolve(__dirname, 'news/src')));
app.use('/manifest.json', express.static(path.resolve(__dirname, 'news/manifest.json')));
app.use('/service-worker.js', express.static(path.resolve(__dirname, 'news/service-worker.js')));
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'news/index.html'));
});

const port = process.env.PORT || '8080';
app.listen(port, function() {
  console.log('Listening on port', port);
});
