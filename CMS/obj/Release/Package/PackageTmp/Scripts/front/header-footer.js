/*Nút search*/

$("#button").click(function () {
    $("#search-box").show();
    $('#button').hide();
});

$(document).click(function (e) {
    if (!$(e.target).hasClass("button")
        && $(e.target).parents("#search-box").length === 0) {
        $("#search-box").hide();
        $('#button').show();
    }
});

