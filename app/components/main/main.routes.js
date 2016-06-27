import 'components/main/main.html';
import 'components/main/main.scss';

export default /*@ngInject*/ function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        views: {
            '@': {
                templateUrl: '/components/main/main.html',
                controller: 'MainController',
                controllerAs: 'mainCtrl'
            }
        }
    });
}
