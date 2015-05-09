angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.updateUI = function(){
      var scrollers = $('.story-content');
      for(var i = 0; i < scrollers.length; i++){
        if (scrollers[i] == this) continue;

        //scrollers[i].scrollTop = this.scrollTop;
      }

      // choose current card
      var cards = $(this).find('.card');
      var winner = cards[0];
      for(var i = 0; i < cards.length; i++){
        if (calculateDistance(cards[i]) < calculateDistance(winner)){
          winner = cards[i];
        }
      }
      var data = $(winner).data();
      console.log('current card is: ' + data.tag);
      var activeCell = $('.' + data.year);
      activeCell.parent().parent().find('td').removeClass('active');
      activeCell.addClass('active');

      $('.timeline td .pegs').empty();
      var taggedCards = $('[data-tag="' + data.tag + '"]');
      for (var i = 0; i < taggedCards.length; i++){
        var card = taggedCards[i];
        if (card == winner) continue;
        $('.timeline td.' + data.year + ' .pegs').append($("<p>x</p>"));
      }
    }

  $scope.slideHasChanged = function(){
  };

  var calculateDistance = function(element){
    var top = 100 - $(element).position().top;
    return Math.abs(top);
  };

  var scrollAll = function(){
    $('.story-content').scroll($scope.updateUI);
  };
  setTimeout(scrollAll, 1000);
});
