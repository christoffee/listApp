angular.module('listTypes.lists.create', [])
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('listApp.listTypes.lists.create', {
				url: 'lists/create',
				templateUrl: 'app/listTypes/lists/create/lists-create.tmpl.html',
				controller: 'ListCreateCtrl as listCreateCtrl'
			})
	}])
	.controller('ListCreateCtrl', ['$state, $stateParams', 'ListModel', function($state, $stateParams, ListsModel){
		var listCreateCtrl = this;

		function returnToLists () {
			$state.go('listApp.listTypes.lists', {
				list: $stateParams.list
			})
		}

		function cancelCreating () {
			returnToLists();
		}

		function createList (list) {
			ListModel.createList(list);
			returnToLists();
		}

		function resetForm () {
			listCreateCtrl.newList = {
				
			}
		}
	}])
;