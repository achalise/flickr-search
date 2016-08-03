'use strict';

function flickrSearchController($scope, $element, $attrs, $log, $http) {
	var vm = this;
	vm.searching = false;
	vm.submitSearch = function() {
		searchFlickr();
	}
	function searchFlickr(query) {
		 vm.searching = true;
	     $http({method: 'JSONP', url: 'https://api.flickr.com/services/feeds/photos_public.gne', 
	     	params : {jsoncallback : 'JSON_CALLBACK', format : 'json', tags : vm.query}}).
	        then(function(response) {
	          vm.status = response.status;
	          vm.items = response.data.items;
	          vm.onSearch({items : vm.items});
	          vm.searching = false;
	        }, function(response) {
	        	console.log('Falied', response);
	        	vm.searching = false;
	      });		
	}
}

angular.module('flickrSearchApp').component('flickrSearch', {
	templateUrl : 'scripts/components/flickr-search/flickr-search.html',
	bindings : {
		onSearch : '&'
	},
	controller: ['$scope', '$element', '$attrs', '$log', '$http', flickrSearchController]
});