var app = angular.module('app', [])

app.controller('mainController', function ($compile, $timeout, $scope) {
    
    
    
    //Your code here


    
    document.addEventListener('openPage', function(e){
        $timeout(function() {
            $compile(angular.element(document.getElementById(e.detail.page)))($scope)
        })
    })
})

