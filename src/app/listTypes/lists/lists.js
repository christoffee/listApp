angular.module('listTypes.lists', [
	'listTypes.lists.create',
	'listTypes.lists.edit',
	'listApp.models.listTypes',
	'listApp.models.lists'
])
	.config(function ($stateProvider) {
		$stateProvider
			.state('listApp.listTypes.lists', {
				url: 'listTypes/:list/:listItem',
				views: {
					'lists@': {
						templateUrl: 'app/listTypes/lists/lists.tmpl.html',
						controller: 'ListsCtrl as listsCtrl'
					}
				}
			})
		;
	})
	.controller('ListsCtrl', function ($stateParams, ListsModel) {
		var listsCtrl = this;

		listsCtrl.currentListName = $stateParams.list;
		listsCtrl.currentListItemName = $stateParams.listItem;

		listsCtrl.list = '';


		ListsModel.getLists()
			.then(function(result) {
				listsCtrl.lists = result;
			});

		listsCtrl.currentListItems = function () {
			if(listsCtrl.lists){
				var listItems = _.findWhere(listsCtrl.lists, {title: listsCtrl.currentListItemName});

				return listItems.items;
			}else{
				return null;
			}
			
		}

		listsCtrl.isCreating = false;
	    listsCtrl.isEditing = false;
	    listsCtrl.currentList = null;

	    listsCtrl.createList = function (){
	    	var data = {
		        "id": 9,
		        "list": listsCtrl.currentListName,
		        "title": listsCtrl.list,
		        "items": []
		    };
	    	listsCtrl.lists.push(data);
	    	listsCtrl.list = '';
	    	listsCtrl.isCreating = false;
	    }

	    function isCurrentList(list) {
	        return listsCtrl.currentList!== null && list.name === listsCtrl.currentList.name;
	    };

	    function setCurrentList(list){
	      listsCtrl.currentList = list;
	      //$state.go('listApp.listType.lists', {list:list.name})
	    }

	    listsCtrl.editItem = function(listName){
	    	console.log('listName', listName);
	    	listsCtrl.isCreating = true;
	    }
	})
;