'use strict';

/**
 * @ngdoc overview
 * @name shoppingListApp
 * @description
 * # shoppingListApp
 *
 * Main module of the application.
 */
angular
  .module('listApp', [
    'ui.router' ,
    'listTypes',
    'listTypes.lists'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
      
        $stateProvider
            .state('listApp', {
                url: '', 
                abstract: true
            })
        ;
        $urlRouterProvider.otherwise('/');
    });
