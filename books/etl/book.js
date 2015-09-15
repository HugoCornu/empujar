#!/usr/bin/env node

process.chdir(__dirname);

var Empujar    = require(__dirname + '/../../index.js');
var optimist   = require('optimist'); 
var options    = optimist.argv; // get command line opts, like `--logLevel debug` or `--chapters 100`

var book = new Empujar.book(options);

var source, destination;

book.on('state', function(data){ 
  destination.insertData('empujar', [data]); 
});

book.on('error', function(error, errorContext){
  setTimeout(process.exit, 5000);
});

book.connect(function(){
  source      = book.connections.source.connection;
  destination = book.connections.destination.connection;

  book.loadChapters();

  book.run(function(){
    setTimeout(process.exit, 5000);
  });
});