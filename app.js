angular.module('myApp', ['pagination']).
controller('myCtrl', function($scope) {
    $scope.table1curPage=0;
    $scope.table1pageSize=5;
    $scope.table2curPage=0;
    $scope.table2pageSize=6;
    $scope.datas = [
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"},
    {"firstName":"John1", "lastName":"Doe1"},
    {"firstName":"Anna1", "lastName":"Smith1"},
    {"firstName":"Peter1", "lastName":"Jones1"},
    {"firstName":"John2", "lastName":"Doe2"},
    {"firstName":"Anna3", "lastName":"Smith2"},
    {"firstName":"Pete2", "lastName":"Jones2"},
    {"firstName":"John3", "lastName":"Doe3"},
    {"firstName":"Anna3", "lastName":"Smith3"},
    {"firstName":"Pete3r", "lastName":"Jones3"}
]
});