angular.module('listApp.models.listTypes', [

])
	.service('ListTypesModel', function ($http, $q) {
		var model = this,
			URLS = {
				FETCH: 'data/listTypes.json'
			},
			listTypes,
			currentListType;

		function extract (result) {
			return result.data;
		}

		function cacheListTypes (result) {
			listTypes = extract(result);
			return listTypes;
		}

		model.getLists = function () {
			return (listTypes) ? $q.when(listTypes) : $http.get(URLS.FETCH).then(cacheListTypes);
		}

		// model.ListTypesByName = function () {
		// 	var deferred = $q.defer();

		// 	return deferred.promise;
		// }
	})
;