// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/**
 * 1.abstract字段为抽象的意思，只能作为父级页面，不可单独显示（加载子页面之前加载父页面）
 * 2.配置子级页面的规则是：父路由.子路由
 * 3.并且增加了一个views字典，字段的key值对应着我们前面所说的tabs.html中ion-nav-view的name属性，表示该路由跳转的页面属于某个tab的子页面
 */
  .config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      //为抽象页面，不能单独显示，只能作为其他页面的父级页面
      abstract: true,
      templateUrl: 'templates/tabHome.html'
    })
    .state('home.find',{
      url: '/find',
      views:{
        'home-find': {
          templateUrl: 'templates/home-find.html'
        }
      }
    })
    .state('home.detail',{
      url: '/detail',
      views:{
        'home-find':{
          templateUrl: 'templates/home-detail.html'
        }
      }
    })
    .state('home.about',{
      url: '/about',
      views:{
        'home-find':{
          templateUrl: 'templates/home-about.html'
        }
      }
    })
    .state('home.follow',{
      url: '/follow',
      views:{
        'home-follow': {
          templateUrl: 'templates/home-follow.html'
        }
      }
    })
    .state('home.news',{
      url: '/news',
      views:{
        'home-news': {
          templateUrl: 'templates/home-news.html'
        }
      }
    })
    .state('home.mine',{
      url: '/mine',
      views:{
        'home-mine': {
          templateUrl: 'templates/home-mine.html'
        }
      }
    });



  $urlRouterProvider.otherwise('/home/find');
});


