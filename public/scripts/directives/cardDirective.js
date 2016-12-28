angular.module('CardsAgainstAssembly')
	.directive('wdiCard', wdiCard);
console.log('card directive')
function wdiCard(){
	var directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'views/templates/cardDirective.html',
		scope: {
			question:'@'  //when 'question' show from questionList
		}
	};
	return directive;
}