frontApp.controller("categoryProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.categoryProducts = [];
    $scope.products = [];
    $scope.idCategoryProduct = angular.element('#idCategoryProduct').val();
    $scope.product = {};
    $scope.id;
    $scope.images = [];
    $scope.image = '/Content/Images/images/BoSuuTap/bosuutap-2.png';
    $scope.spNoiBats = [];
    $scope.gachMens=[];
    $scope.thietBiVeSinhs = [];
    $scope.thietBiNhaTams = [];
    $scope.tranh3Ds = [];

    //Lấy tất cả danh mục
    $http.get('/API/CategoryProductsAPI/')
        .success(function (data) {
            var categoryProducts = CategoryProduct.getallCategoryProduct(data);
            angular.forEach(categoryProducts, function (value, key) {
                if (value.idCategoryProductParent == '1') {
                    $scope.categoryProducts.push(value);
                }
            });
        })

    //Xem sản phẩm
    $scope.show = function (id) {
        $scope.id = id;
        $http.get('/API/ProductsAPI/' + id)
       .success(function (data) {
           $scope.product = data;
       });
    }

    //Sản phẩm trong danh mục con
    $http.get('/API/ProductsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategoryProduct == $scope.idCategoryProduct) {
                    $scope.products.push(value);
                }
            });
            angular.forEach(data, function (value, key) {
                if (value.feature == '1') {
                    $scope.spNoiBats.push(value);
                }
            });
            angular.forEach(data, function (value, key) {
                if (value.idCategoryProduct == 2) {
                    $scope.gachMens.push(value);
                }
            });
            angular.forEach(data, function (value, key) {
                if (value.idCategoryProduct == 3) {
                    $scope.thietBiVeSinhs.push(value);
                }
            });
            angular.forEach(data, function (value, key) {
                if (value.idCategoryProduct == 4) {
                    $scope.thietBiNhaTams.push(value);
                }
            });
            angular.forEach(data, function (value, key) {
                if (value.idCategoryProduct == 5) {
                    $scope.tranh3Ds.push(value);
                }
            });
        });

    $http.get('/API/imageAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategoryProduct == $scope.idCategoryProduct) {
                    $scope.images.push(value);
                }
            });
        })

    $scope.load = function (anh) {
        $scope.image = anh;
    }
}]);