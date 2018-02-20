'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./parse-body.js');

module.exports = http.createServer(function(req, res) {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);

  if(req.method === 'GET' && req.url.pathname === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.write('hello from my server');
  }

  if(req.method === 'GET' && req.url.pathname === '/cowsay') {
    let params = req.url.query;
    if(!params.text) {
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write(cowsay.say({text:'bad request'}));
      res.end();
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(cowsay.say({text: params.text}));
    res.end();
  }

  if(req.method === 'POST' && req.url.pathname === '/cowsay') {
    if(req.body) {
      parseBody(req, function(err) {
        console.log(req);
        if(err) return console.error(err);
      });
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(cowsay.say({text: req.body.text}));
      res.end();
      return;
    }
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write(cowsay.say({text:'bad request'}));
    res.end();
  }
  res.end();
});