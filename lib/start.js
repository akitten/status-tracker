var Hoek = require('hoek');
var Server = require('./index.js');

Server.init(8000, function (err, server) {

  Hoek.assert(!err, err);
  console.log('Server is running on: ', server.info.uri);
});