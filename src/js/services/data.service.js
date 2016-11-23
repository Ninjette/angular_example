export function dataService($http){
	this.getBlocksJSON = (callback, arg) => {
		$http.get(arg)
			.then(callback)
	};
}