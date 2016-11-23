import '../sass/style.scss';

import { MainCtrl } from './controllers/main.ctrl';
import { dataService } from './services/data.service';

angular.module("testApp",[])
	.service('dataService', dataService)
	.controller('MainCtrl', MainCtrl)