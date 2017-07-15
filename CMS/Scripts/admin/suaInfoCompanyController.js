myApp.controller("suaInfoCompanyController", ['$scope', '$http', '$window', '$location', '$filter', 'Url', function ($scope, $http, $window, $location, $filter, Url) {
    $scope.infoCompany = {};

    $scope.chooseImage = function () {
        // You can use the "CKFinder" class to render CKFinder in a page:
        var finder = new CKFinder();
        finder.selectActionFunction = function (fileUrl) {
            $scope.infoCompany.image = fileUrl;
            $scope.$apply();
        };
        finder.SelectFunction = 'ShowFileInfo';
        finder.popup();
    }


    function selectFileWithCKFinder(elementId) {
        var finder = new CKFinder();
        CKFinder.popup({
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function (finder) {
                alert("Yes");
                finder.on('files:choose', function (evt) {
                    var file = evt.data.files.first();
                    elementId = file.getUrl();
                });

                finder.on('file:choose:resizedImage', function (evt) {
                    elementId = evt.data.resizedUrl;
                });
            }
        });
    }


    //Lấy idinfoCompany từ Url
    $scope.currentIdinfoCompany = 1;

    //Nếu sửa thì trả về giá trị của infoCompany
    if ($scope.currentIdinfoCompany) {
        $http.get('/API/infoCompanyAPI/' + $scope.currentIdinfoCompany)
            .success(function (data) {
                $scope.infoCompany = {
                    id: data.id,
                    tenCTy: data.tenCTy,
                    diaChi: data.diaChi,
                    mail: data.mail,
                    sdt: data.sdt,
                    sdtBan: data.sdtBan,
                    sdtDD: data.sdtDD,
                    image: data.image,
                    fb: data.fb,
                    googlePlus: data.googlePlus,
                    youtube: data.youtube,
                    twitter: data.twitter,
                };
            });
    }
    //Không thì thiết lập giá trị mặc định
    else {
    }


    //Lưu infoCompany
    $scope.saveinfoCompany = function () {
        if ($scope.currentIdinfoCompany) {
            $http.put('/API/infoCompanyAPI/' + $scope.infoCompany.id, $scope.infoCompany)
                .success(function () {
                    toastr.success('Thành công', 'Lưu thông tin công ty');
                })
                .error(function () {
                    toastr.error('Thất bại', 'Thêm thông tin công ty')
                });
        } else {
            $http.post('/API/infoCompanyAPI/', $scope.infoCompany)
                .success(function () {
                    toastr.success('Thành công', 'Thêm thông tin công ty');
                    $window.location.href = '/Admin/infoCompanys';
                })
                .error(function () {
                    toastr.error('Thất bại', 'Thêm thông tin công ty');
                });
        }
    };
    //Lưu bài viết và Thoát
    $scope.saveinfoCompanyAndExit = function () {
        if ($scope.currentIdinfoCompany) {
            $http.put('/API/infoCompanyAPI/' + $scope.infoCompany.id, $scope.infoCompany)
                .success(function () {
                    $window.location.href = '/Admin/infoCompanys';
                })
                .error(function () {
                    toastr.error('Thất bại', 'Lưu thông tin công ty');
                });
        } else {
            $http.post('/API/infoCompanyAPI/', $scope.infoCompany)
                .success(function () {
                    $window.location.href = '/Admin/infoCompanys';
                })
                .error(function () {
                    toastr.error('Thất bại', 'Thêm thông tin công ty');
                });
        }
    };
    //Lưu bài viết và Thêm mới
    $scope.saveinfoCompanyAndNew = function () {
        if ($scope.currentIdinfoCompany) {
            $http.put('/API/infoCompanyAPI/' + $scope.infoCompany.id, $scope.infoCompany)
                .success(function () {
                    $window.location.href = '/Admin/infoCompanys/Create';
                })
                .error(function () {
                    toastr.error('Thất bại', 'Lưu thông tin công ty')
                });
        } else {
            $http.post('/API/infoCompanysAPI/', $scope.infoCompany)
                .success(function () {
                    $window.location.href = '/Admin/infoCompanys/Create';
                })
                .error(function () {
                    toastr.error('Thất bại', 'Thêm thông tin công ty')
                });
        }
    };
    //Hủy bỏ
    $scope.cancel = function () {
        $window.location.href = '/Admin';
    };
}]);