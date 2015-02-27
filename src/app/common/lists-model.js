angular.module('listApp.models.lists', [

])
	.service('ListsModel', function ($http, $q) {
		var model = this,
			URLS = {
				FETCH: 'data/lists.json'
			},
			lists;

		function extract (result) {
			return result.data;
		}

		function cacheLists (result) {
			lists = extract(result);
			return lists;
		}

		model.getLists = function (){
			return (lists) ? $q.when(lists) : $http.get(URLS.FETCH).then(cacheLists);
		}

		model.getListItems = function (list){
			return (lists) ? $q.when(lists) : $http.get(URLS.FETCH).then(cacheLists);
		}

		model.createList = function (list){
	    	var newList = {
		        "id": lists.length,
		        "list": listsCtrl.currentListName,
		        "title": listsCtrl.list,
		        "items": []
		    };
	    	listsCtrl.lists.push(newList);
	    	listsCtrl.list = '';
	    	listsCtrl.isCreating = false;
	    }
	})
;