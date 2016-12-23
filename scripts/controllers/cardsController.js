var app=angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ['$http'];
function CardsController($http){
console.log('cards controller');
  
  var self = this;
  self.all=[];
  self.newCard={};

  function getCards(){
    $http
    .get('http://localhost:3000/api/cards')
    .then(function(res){
      console.log(res.data);
      self.all = res.data;
    });
  }
  getCards();

  function addCard(){
    $http
    .post('http://localhost:3000/api/cards',self.newCard)  //route, info being sent
    .then(function(res){
      getCards(); //gets updated card list
    });
    self.newCard={}; //resets form
  }

  function deleteCard(card){
    $http
    .delete('http://localhost:3000/api/cards'+card._id)
    .then(function(res){
      var index = self.all.indexOf(card);
      self.all.splice(index,1);
    });
  }
}
