'use strict';

const server = require('./lib/server.js');
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('server up:', PORT);
});