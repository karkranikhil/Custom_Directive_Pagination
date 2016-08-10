 angular.module('pagination', []).
 directive("paginationDir",function(){
    return{
        restrict : "E",
        scope:{
            pageSize:"=",
            datalength:"=",
            curPage:"="
        },  
        templateUrl:"pagination.html",
        link:function(scope,attr,elem){
            scope.numberOfPages = function() 
            {
            return Math.ceil(scope.datalength / scope.pageSize);
            };
			
            scope.totalPages=scope.numberOfPages();         
            /*
			scope.$watch('curPage',function(n,o){
                console.log(n);
                console.log(o);
            })
     */
        },
        controller:'paginationCtrl'

    }

 }).controller("paginationCtrl",function($scope){
      
 }).filter('paginationFilter', function()
{
 return function(input, start)
 {
     return input.slice(start);
 };
});