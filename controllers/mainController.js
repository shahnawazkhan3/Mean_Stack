


//  var App = angular.module('workshop',[]);
   
//    App.controller('workshopController',function($scope) {
//          console.log("yes");

//     var a = "kk";
//         console.log("yes"+a);
//    });


var appScholl = angular.module ('workshop', []);

appScholl.controller('workshopController',function ($scope) {
  console.log("yess");
})

appScholl.controller('leftsideController',function ($scope) {
   console.log("left");

  //  $scope.student = {
  //              firstName: "Mahesh",
  //              lastName: "Parashar",
               
  //              fullName: function() {
  //                 var studentObject;
  //                 studentObject = $scope.student;
  //                 return studentObject.firstName + " " + studentObject.lastName;
  //              }
  //           };
      // $scope.student = {
      //   fname : "sk",
      //   lname : "khan",

      //   fullName : function () {
      //     var studentObject ;
      //     studentObject =$scope.student;
      //     return studentObject.fname + " "+ studentObject.lname;
      //   }
      // };


      //  $scope.student = {
      //          firstName: "Mahesh",
      //          lastName: "Parashar",
      //          fees:500,
               
      //          subjects:[
      //             {name:'Physics',marks:70},
      //             {name:'Chemistry',marks:80},
      //             {name:'Math',marks:65}
      //          ],
               
      //          fullName: function() {
      //             var studentObject;
      //             studentObject = $scope.student;
      //             return studentObject.firstName + " " + studentObject.lastName;
      //          }
      //       };

      /// topic 4
      $scope.student = {
               firstName: "Mahesh",
               lastName: "Parashar",
               fees:500,
               
               subjects:[
                  {name:'Physics',marks:70},
                  {name:'Chemistry',marks:80},
                  {name:'Math',marks:65},
                  {name:'English',marks:75},
                  {name:'Hindi',marks:67}
               ],
               
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
   
});