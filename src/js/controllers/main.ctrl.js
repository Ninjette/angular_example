export function MainCtrl($scope, dataService, $http){
	let _this = this;
	this.dataRoute = "./data/items_";
	this.loadedChuncks = 1;
	$scope.blocks = [];
	$scope.showBtn = true;

	$scope.loadChunk = function(){
		if(_this.loadedChuncks <= 5){
			dataService.getBlocksJSON(function(response) {
				response.data.forEach( function(item, i, arr){
					$scope.blocks.push(item);
				});
			}, _this.dataRoute+_this.loadedChuncks+".json");
			_this.loadedChuncks += 1;
		} else{
			$scope.showBtn = false;
		}
	}
	this.$onInit = function(){
		$scope.loadChunk();
	}
	let timer;
	
	$(window).on('scroll', function(){
		if ($scope.infiniteMode) {
			clearTimeout(timer);
			timer = setTimeout(doneScroll, 200);
			function doneScroll(){
				let mark = $('.js-mark').position().top;
				let topOfWindow = $(window).scrollTop();
				if (mark && topOfWindow > (mark - 650)){ // 650px - spare
					$scope.loadChunk();
				}
			}
		};
	});
}