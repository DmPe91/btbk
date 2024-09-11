$(function() {
	var $menu_popup = $('.menu-popup');
	
	$(".js-menu-triger, .menu-close").click(function(){
		let vh = window.innerHeight * 0.01;
        if($menu_popup.length) {
	    $menu_popup.css('--vh', `${vh}px`);
        };
		$menu_popup.slideToggle(300, function(){
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.menu').length){
			$('body').removeClass('body_pointer');
			$menu_popup.slideUp(300);
		}
	});

	
	
	
	


});







