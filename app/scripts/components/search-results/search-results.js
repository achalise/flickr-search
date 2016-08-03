'use strict';

function searchResultsController($scope, $element, $attrs, $log) {
	var ctrl = this;
}

angular.module('flickrSearchApp').component('searchResults', {
	templateUrl : 'scripts/components/search-results/search-results.html',
	bindings : {
		items : '<'
	},
	controller: ['$scope', '$element', '$attrs', '$log', searchResultsController]
});