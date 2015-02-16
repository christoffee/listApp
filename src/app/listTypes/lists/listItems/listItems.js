angular.module('listType.lists.listItems', [
	'listType.listItems.create',
	'listType.listItems.edit',
	'listApp.models.listType',
	'listApp.models.lists',
	'listApp.models.listItems'
])
	.config(function ($stateProvider) {
		$stateProvider
			.state('listApp.listType.lists', {
				url: 'listType/:list',
				views: {
					'lists@': {
						templateUrl: 'app/listType/lists/lists.tmpl.html',
						controller: 'ListsCtrl as listsCtrl'
					}
				}
			})
		;
	})
;