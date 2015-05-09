angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  var scrollAll = function(){
    $('.story-content').scroll(function(){
      console.log(this + ' is being scrolled');
      var scrollers = $('.story-content');
      for(var i = 0; i < scrollers.length; i++){
        if (scrollers[i] == this) continue;

        scrollers[i].scrollTop = this.scrollTop;
      }
    });
  };
  setTimeout(scrollAll, 1000);
});
