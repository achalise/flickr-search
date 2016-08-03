'use strict';

function flickrSearchUiController($scope, $element, $attrs, $log) {
	var vm = this;
	vm.items = [];
	vm.updateSearchResults = function(items) {
		vm.items = items;
	}
}

angular.module('flickrSearchApp').component('flickrSearchUi', {
	templateUrl : 'scripts/components/flickr-search-ui/flickr-search-ui.html',
	controller: ['$scope', '$element', '$attrs', '$log', flickrSearchUiController]
});