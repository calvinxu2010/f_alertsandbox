/**
 * Project the entrance of the module，depend on ui.router ui.grid
 * And our custom two modules，BookListModule和BookDetailModule
 */



var alertSandBox = angular.module('alertSandBox', ['ui.router', 'ui.grid','ui.grid.pagination', 'BookListModule', 'BookDetailModule', 'loginModule', 'addBookModule']);

/**
 * Because the whole application will deal with the routing，So here are the $state and $stateParams The two objects put into $rootScope，Convenient place other references and injection.
 * The run method here will run only one time when angular start running 
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */



//Attention :$state and $stateParams comeing from ui-route
//https://github.com/angular-ui/ui-router/wiki/URL-Routing
//$stateParams status parapeters，$stateParams can provide controller or service the separate parts of the url.


alertSandBox.run(function($rootScope, $state, $stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});

  
/**
 * Confihure router
 * Note that there is ui-router，Instead of ng native routing.
 * The ng native routing does not support nested view.
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
alertSandBox.config(function($stateProvider, $urlRouterProvider) {
    // If there is no match to other routing, the direct return to the home page
    $urlRouterProvider.otherwise('/index');
    // Routing and configuration
    $stateProvider
        .state('index', {
            // If it is first page
            url: '/index',
            views: {
                '': {
                // Is the home page if it is empty
                    templateUrl: 'tpls/home.html'
                },
                'main@index': {
                    // If you have embedded routines by is the registration page
                    templateUrl: 'tpls/login_form.html'
                }
            }
        })
        .state('booklist', {
            // Book List
            url: '/{bookType:[0-9]{1,4}}',
            views: { //Pay attention to the writing here, When a page with multiple UI - view to naming and view template when loading
                '': {
                // Home page is booklist
                    templateUrl: 'tpls/booklist.html'
                },
                'booktype@booklist': {
                    // booktype Routing for the booktype template
                    templateUrl: 'tpls/book_type.html'
                },
                'bookgrid@booklist': {
                    // bookgrid Routing for the bookgrid template
                    templateUrl: 'tpls/bookgrid.html'
                }
            }
        })
        .state('addbook', {
            // add books
            url: '/addbook',
            templateUrl: 'tpls/addbook_form.html'
        })
        .state('bookdetail', {
            // Details of the book
            url: '/bookdetail/:bookId', //Note here the parameters in the routing
            templateUrl: 'tpls/book_details.html'
        })
});