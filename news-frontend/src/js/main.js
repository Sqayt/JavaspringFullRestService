let app = angular.module('app',[]);

app.controller('checked', function ($scope,$http){

    $http.get('http://localhost:8080/v1336/newNews')
        .then(function (response){
            $scope.checked = response.data;
            console.log('checked in work')
        });
});

let apps = angular.module('apps',[]);

apps.controller('appsChecked', function ($scope){

    $scope.name = '';
    $scope.list = [];
})