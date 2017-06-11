angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider //Setting up different states, e.g. setting up different GET requets for views
    .state({
      name: 'home',
      url: '/',
      templateUrl: '/templates/list-view.html',
      controller: 'ListController'
      //ANYTHING FOLLOWING A #! WILL NOT AFFECT THE SERVER
          // e.g. localhost/#!/test

      // add url, template and controller
    })
    .state({
      name: 'form',
      url: '/add',
      templateUrl: '/templates/form-view.html',
      controller: 'FormController'
    })
    .state({
      name: '404',
      url: '/404',
      template: '<p>Not Found</p>'
    })
  
  $urlRouterProvider.otherwise('404');
})

.directive('listItem', function() {
  return {
    // scope: {
    //   info:'<'
    // },
    controllerAs: 'listView',
    bindToController: true,
    controller: function() {
  
    },
    template: 
    `<div ng-show="!!url.image">
      
      <img  ng-src="/assets/{{url.image}}.png"/>
    </div>`
  }

})