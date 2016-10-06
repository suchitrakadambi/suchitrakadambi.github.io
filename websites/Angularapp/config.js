/**
 * Created by skadambi on 9/7/16.
 */

app.config(['$routeProvider',function($routeProvider){
          $routeProvider.
              when('/',{
                  templateUrl :'views/homepage.html',
                  controller:'homepagectrl'
              }).
              when('/register',{
                  templateUrl :'views/register.html',
                  controller:'homepagectrl'
              }).
              when('/list',{
              templateUrl :'views/userslist.html',
              controller:'homepagectrl'
          }).
              when('/welcome',{
              templateUrl:'views/welcomepage.html',
              controller:'homepagectrl'
          }).
              when('/error',{
              templateUrl:'views/error.html',
              controller:'homepagectrl'
          });


    }]);
