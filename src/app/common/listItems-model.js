angular.module('listApp.models.listItems', [

])
	.service('ListItemsModel', function () {
		var model = this,
			listsItems = [
		        {"id": 0, "title": "Valentines", "url": "#", "list": "Shopping"},
		        {"id": 1, "title": "Tescos", "url": "#", "list": "Shopping"},
		        {"id": 2, "title": "Birthday", "url": "#", "list": "Wish"},
		        {"id": 3, "title": "Christmas", "url": "#", "list": "Wish"},
		        {"id": 4, "title": "Freeble", "url": "#", "list": "To Do"},
		        {"id": 5, "title": "Derailed", "url": "#", "list": "To Do"},
		        {"id": 6, "title": "Cars", "url": "#", "list": "Top 10"},
		        {"id": 7, "title": "Beers", "url": "#", "list": "Top 10"},
		        {"id": 8, "title": "formatFiles(includedFiles, onlyServedFiles)", "url": "#", "list": "Top 10"}
		    ];
		model.getListsItems = function (){
			return listsItems;
		}

	})
;