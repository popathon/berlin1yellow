angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  var calculateDistance = function(element){
    var top = 100 - $(element).position().top;
    return Math.abs(top);
  };

  var scrollAll = function(){
    $('.story-content').scroll(function(){
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

      var allCards = $('[data-tag="' + data.tag + '"]')
    });
  };
  setTimeout(scrollAll, 1000);
});
