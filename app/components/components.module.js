import {MainController, DatepickerModalController, ChecklistTestController} from 'components/main/main-controller';

angular.module('components', [])
    .controller('MainController', MainController)
    .controller('ChecklistTestController', ChecklistTestController)
    .controller('DatepickerModalController', DatepickerModalController);
