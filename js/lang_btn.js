$(document).ready(function(){

    $('.lang-list span').click(function(){

        $('.lang-list span').removeClass('lang-btn_active').filter(this).addClass('lang-btn_active');

    });

});
$(document).ready(function(){

    $('.lang-list_black span').click(function(){

        $('.lang-list_black span').removeClass('lang-btn_active--black').filter(this).addClass('lang-btn_active--black');

    });

});