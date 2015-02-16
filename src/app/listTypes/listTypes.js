angular.module('listTypes', [
	'listApp.models.listTypes'
])
	.config(function ($stateProvider) {
		$stateProvider
		.state('listApp.listTypes', {
			url: '/',
			views: {
				'listTypes@': {
					controller: 'ListTypesCtrl as listTypesCtrl',
					templateUrl: 'app/listTypes/listTypes.tmpl.html'
				},
				'lists@': {
					templateUrl: 'app/listTypes/lists/lists.tmpl.html',
					controller: 'ListsCtrl as listsCtrl'
				}
			}
		})
	})
	.controller('ListTypesCtrl', function(ListTypesModel){
		var listTypesCtrl = this;

		ListTypesModel.getLists()
			.then(function (result){
				listTypesCtrl.listTypes = result;
			});	

		listTypesCtrl.isCreating = false;
	    listTypesCtrl.isEditing = false;
	    listTypesCtrl.currentList = null;

	    function isCurrentListType(listType) {
	        return listTypesCtrl.currentTypeList!== null && listType.name === listTypesCtrl.currentListType.name;
	    }

	    function setCurrentListType(listType){
	      listTypesCtrl.currentListType = listType;
	      //$state.go('listApp.listType.lists', {list:list.name})
	    }

	})
;