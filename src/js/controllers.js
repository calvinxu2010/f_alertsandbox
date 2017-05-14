/**
 * Here is the registration module
 */

var loginModule = angular.module('loginModule', []);
loginModule.controller('loginCtrl', ['$scope', function($scope){
    $scope.userInfo = {
        email: 'firstName.lastName@bmo.com',
        password: '12345679'
    };
    $scope.setFormData = function(){
        $scope.userInfo = {
            email: '',
            password: ''
        };
    };
}]);


/**
 * Here is a list of books module
 * @type {[type]}
 */

var BookListModule = angular.module('BookListModule', []);
BookListModule.controller('BookListCtrl', ['$scope', '$http', '$state', '$stateParams',
 function($scope, $http, $state, $stateParams){

//Here you can according to different routing passed bookType parameters on loading of data
/**
 * [getPagedDataAsync For asynchronous data]
 * @param  {[type]} pageSize   [The number of data in the each page]
 * @param  {[type]} page       [The serial number of the current page]
 * @param  {[type]} searchText [Search-based Keyword]
 */

  $scope.getPagedDataAsync = function(page, pageSize, searchText) {
      setTimeout(function() {
          var data;
          if (searchText) {
            // Search Text
              var ft = searchText.toLowerCase();
              // get json file
              $http.get('data/books' + $stateParams.bookType + '.json')
                  .then(function(response) {

                    // if successful
                      data = response.data.filter(function(item) {
                        // If found, returns true
                          return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                      });
                      $scope.setPagingData(data, page, pageSize);
                  }, function(){
                    console.log('http request failed' + response.status);
                  });
          } else {
              $http.get('data/books' + $stateParams.bookType + '.json')
                  .then(function(response) {
                      $scope.setPagingData(response.data, page, pageSize);
                  }, function(){
                    console.log('http request failed' + response.status);
                  });
          }
      }, 100);
  };


  var paginationOptions = {
     pageNumber: 1,
     pageSize: 5,
     sort: null
   };

/**
 * [setPagingData description]
 * @param {[type]} data     [The root of the trouble to get the data]
 * @param {[type]} page     [The serial number of the current page]
 * @param {[type]} pageSize [The number of each data]
 */
  $scope.setPagingData = function(data, page, pageSize) {
    // Total number of data for the current page, The article according to the total number of the current page, Assigned to ui-grid's data attribute
    var firstRow = (page - 1) * pageSize;
    $scope.gridOptions.data = data.slice(firstRow, firstRow + pageSize);
      // Get all the data on the number of article from the background
     $scope.gridOptions.totalItems = data.length;
  };

//Get the current page and current size from the UI - gird
  $scope.getPagedDataAsync(paginationOptions.pageNumber,paginationOptions.pageSize);
	
//With the backgend dataui-grid,Fill the form
     $scope.gridOptions = {
        //Note that the value of the field to guarantee a json fields to display
        columnDefs: [{ field: 'index', 
                       displayName: 'Serial No', 
                       enableColumnMenu: false,// Whether or not display the column head menu button
                       enableHiding: false,
                       suppressRemoveSort: true,
                       enableCellEdit: false // Whether or not editable
                     },
                     { field: "name",
                       displayName: 'Book Name'
                 	 },
                    { field: "author",
                      displayName: 'author'
                	 },
                    { field: "pubTime",
                      displayName: 'Pub date'
                	 },
                    { field: "price",
                      displayName: 'Price',
                      cellFilter: 'currency:"$"'
                	 },	 
                    { field: "bookId",
                      displayName: 'Operation',
                      cellTemplate: '<div><a ui-sref="bookdetail({bookId:grid.getCellValue(row, col)})">Details</a></div>'
                    }
                    ],
                    
        //-------- page attribute ----------------
        enablePagination: true, //Whether the page, the default is true
        enablePaginationControls: true, //Use the default to the bottom of the page
        multiSelect: false,
        enableRowSelection: true,
        enablCellSelection: true,
        enableCellEdit: true,
        enablePinning: true,
        paginationPageSizes: [5, 10, 15], //Each page shows the number of options
        paginationPageSize: 5, //Shows the number of each page
        paginationCurrentPage:1, //current page
        //paginationTemplate:"<div></div>", //The custom code at the bottom of the page
        totalItems : 0, // Total
        useExternalPagination: true,//Whether to use pagination button
        useExternalSorting: false, //Whether to use a self-define rule
        //---------------api---------------------
        // onRegisterApi: function(gridApi) {
        //     $scope.gridApi = gridApi;
        //     //Paging button events
        //     gridApi.pagination.on.paginationChanged($scope,function(newPage, pageSize) {
        //           if(getPage) { 
        //               getPage(newPage, pageSize); 
        //            }
        //     });
        // }
    };


}]);


/**
 * Books of module for details
 * @type {[type]}
 */
var BookDetailModule = angular.module('BookDetailModule', []);
BookDetailModule.controller('BookDetailCtrl', ['$scope', '$http', '$state', '$stateParams',
 function($scope, $http, $state, $stateParams){

var bookId = $stateParams.bookId;

$scope.getDetailDataAsync = function(bookId) {
    setTimeout(function() {
        $http.get('data/books0.json')
            .then(function(response) {
               $scope.details = response.data.filter(function(item){
                     return item.bookId == bookId;
                })[0];
               //Returns an array, it is only an object [0] Take out the object
            }, function(){
              console.log('http request failed' + response.status);
            });
    }, 100);
};

$scope.getDetailDataAsync(bookId);

}]);



/**
 * Add books module
 */

 var addBookModule = angular.module('addBookModule', []);
 addBookModule.controller('addBookCtrl', ['$scope', function($scope){
     $scope.emptyData = function() {
        $scope.book = {};
     }
 }]);