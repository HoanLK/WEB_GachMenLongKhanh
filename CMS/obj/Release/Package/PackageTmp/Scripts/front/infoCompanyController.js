frontApp.controller("infoCompanyController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.infoCompany = {};

    $http.get('/API/InfoCompanyAPI/1')
        .success(function (data) {
            $scope.infoCompany = data;
        })
}]);