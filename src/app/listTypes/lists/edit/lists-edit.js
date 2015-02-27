angular.module('listTypes.lists.edit', [])
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('listApp.listTypes.lists.edit', {
				url: 'lists/:listId/edit',
				templateUrl: 'app/listTypes/lists/edit/lists-edit.tmpl.html',
				controller: 'ListEditCtrl as listEditCtrl'
			})
	}])
	.controller('ListEditCtrl', ['$state, $stateParams', 'ListModel', function($state, $stateParams, ListsModel){
		
	}])
;