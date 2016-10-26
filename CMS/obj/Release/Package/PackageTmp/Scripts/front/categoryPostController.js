frontApp.controller("categoryPostController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.categoryPosts = [];
    $scope.posts = [];
    $scope.idCategory = angular.element('#idCategory').val();
    $scope.baiVietNews = [];
    $scope.baiVietTops = [];
    $scope.khachHangDoiTacs = [];
    $scope.congTrinhTieuBieus = [];

    //Lấy tất cả danh mục
    $http.get('/API/CategoriesAPI/')
        .success(function (data) {
            var categories = CategoryPost.getallCategory(data);
            angular.forEach(categories, function (value, key) {
                if (value.idCategoryParent == '1') {
                    $scope.categoryPosts.push(value);
                }
            });
        })

    //bài viết trong danh mục con
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == $scope.idCategory) {
                    $scope.posts.push(value);
                }
            });
        });

    //Lấy bài viết lên top
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.featured == 1 && value.idCategory==2) {
                    $scope.baiVietTops.push(value);
                }
            });
        });

    //Lấy bài viết mới nhất
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == 2) {
                    $scope.baiVietNews.push(value);
                }
            });
        });

    //Lấy Khách hàng và đối tác
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == 6) {
                    $scope.khachHangDoiTacs.push(value);
                }
            });
        });

    //Lấy công trình tiêu biểu
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == 5) {
                    $scope.congTrinhTieuBieus.push(value);
                }
            });
        });
}]);