var app = angular.module('myModule');

app.controller('controllerOne', function($scope) {

  $scope.flySparklePony = function(sparklePony) {

    $scope.result = 'yay';

    var originalWord = sparklePony;
    var reverseWord = originalWord.split('').reverse().join('');

    if(originalWord === reverseWord) {

      $scope.result = "this is a palindrome";

    } else {

      $scope.result = "this is not a palindrom";

    }

  }

})
