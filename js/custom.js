// global, $

$(function () {
    "use strict";
    
    // information sec 
    
    $('.info-bar li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.info-contact div').hide();
        $('.' + $(this).data('name')).fadeIn();
    });
    
    // code button to up 
    
    $(window).scroll(function () {
        
        if($(window).scrollTop() >= 800){
            
            if($('.up').is(':hidden')){
                
                $('.up').fadeIn(500)
            }
        }else{
                $('.up').fadeOut(500)
            }
    })
    
    $('.up').on('click', function(e) {
            e.preventDefault()
        
            $('html , body').animate({
                
                scrollTop : 0
                
            },1000)
        })
    
    // window scrolling smooth
    
    $('.nav li a').click(function (e) {
        e.preventDefault()
        $('html , body').animate({
            scrollTop : $('.' + $(this).data('nav')).offset().top
        }, 1500)
    })
    
    
});