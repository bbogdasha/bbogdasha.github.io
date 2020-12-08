 jQuery(document).ready(function($) {

	//For waypoint
	$('header').css({ 'height': $(window).height() });
	$(window).on('resize', function() {

		$('header').css({ 'height': $(window).height() });
		$('body').css({ 'width': $(window).width() })
	});


	//Scrolling main page
	$(".screen-height").height($(window).height());

	$(window).resize(function(){
		$(".screen-height").height($(window).height());
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('#home').css({'background-attachment': 'scroll'});
	} else {
		$('#home').parallax('50%', 0.1);
	}


	//Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.categories-ul a').click(function() {
            $('.categories-ul .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

});