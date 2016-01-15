/*
angular.module('starter.services', ['firebase'])

.factory ("Questions", function ($firebaseArray) {
    var questionsRef = new Firebase("https://poll2roll.firebaseio.com/questions");
    var questions = $firebaseArray(questionsRef);  
    console.log("from service: ", questions, questionsRef);
    
    return {
        all: function() {
            return questions;
        }
    };
});
*/
angular.module('starter.services', [])

.factory('Questions', function() {
  // Some fake testing data
  var questions = [
     {
        Id: 0,
        $value: 'How do you rate this workshop on a scale of 1 to 10?',
        Rating: null
     }, 
     {
        Id: 1,
        $value: 'How do you rate MSFT work in the mobile app dev space on a scale of 1 to 10?',
        Rating: null
     },
     {
        Id: 2,
        $value: 'How do you rate this app on a scale of 1 to 10?',
        Rating: 8
     }
  ];
 
  return {
    all: function() {
      return questions;
    }
  };
});
 

