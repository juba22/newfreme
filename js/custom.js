/* global, $ */
$(function () {
    "use strict";
    
    $('.info-bar li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.info-contact div').hide();
        $('.' + $(this).data('name')).fadeIn();
    });
    
});