'use strict';

function searchResultsController($scope, $element, $attrs, $log) {
	var ctrl = this;
	ctrl.highResolutionLink = function() {
		if(!ctrl.selectedItem) {
			return '';
		}
		var link = ctrl.selectedItem.media.m;
		link = link.replace('_m', '_z');
		console.log('High resolution link:', link);
		return link;
	}
}

angular.module('flickrSearchApp').component('searchResults', {
	templateUrl : 'scripts/components/search-results/search-results.html',
	bindings : {
		items : '<'
	},
	controller: ['$scope', '$element', '$attrs', '$log', searchResultsController]
});