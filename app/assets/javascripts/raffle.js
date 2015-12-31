var app = angular.module('myApp', [ ]);

app.controller('RaffleCtrl', function(){
  this.entries = persons;
  
});

var persons = [
  {name:'Larry'},
  {name:'Curly'},
  {name:'Moe'}
];
