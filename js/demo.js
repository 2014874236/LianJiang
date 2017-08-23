/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    $(".pic").mouseover(function () {
        $(this).stop(true).animate({ "width": "789px" }, 500).siblings().stop(true).animate({ "width": "100px" }, 500);
    });
});