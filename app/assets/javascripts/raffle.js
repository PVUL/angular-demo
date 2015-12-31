var app = angular.module('myApp', [ ]);

app.controller('EntryController', function(){
  this.entries = [ ];

  this.addEntry = function(){
    this.entries.push(this.entry);
    this.entry = { };
  };
});
