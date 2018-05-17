(function($) {
	"use strict";

	/*-- ================================ --
		1.0 FUNCTIONS
	/*-- ================================ --*/
	function HideComingSoon(){
		$('.coming-soon-container .right-side').removeClass('fadeInRight').addClass('fadeOutRight');
		$('.coming-soon-container .left-side').removeClass('fadeInLeft').addClass('fadeOutLeft');
		$('.coming-soon-container .separator').removeClass('fadeIn').addClass('fadeOut');
		$('footer').removeClass('fadeInUp').addClass('fadeOutDown');
	}
	function ShowComingSoon(){
		$('.coming-soon-container .right-side').removeClass('entrance fadeOutRight').addClass('fadeInRight');
		$('.coming-soon-container .left-side').removeClass('entrance fadeOutLeft').addClass('fadeInLeft');
		$('.coming-soon-container .separator').removeClass('entrance fadeOut').addClass('fadeIn');
		$('footer').removeClass('fadeOutDown').addClass('entrance fadeInUp');
	}
	function ShowCountdown(){
		if($(window).width() < 768){
			$('.days_dash').removeClass('fadeOutUpDiamond').addClass('fadeInUpDiamond');
			$('.seconds_dash').removeClass('fadeOutUpDiamond').addClass('fadeInUpDiamond');
			$('.hours_dash').removeClass('fadeOutUpDiamond').addClass('fadeInUpDiamond');
			$('.minutes_dash').removeClass('fadeOutUpDiamond').addClass('fadeInUpDiamond');
		}
		else{
			$('.days_dash').removeClass('fadeOutUpDiamond').addClass('fadeInDownDiamond');
			$('.seconds_dash').removeClass('fadeOutDownDiamond').addClass('fadeInUpDiamond');
			$('.hours_dash').removeClass('fadeOutLeftDiamond').addClass('fadeInLeftDiamond');
			$('.minutes_dash').removeClass('fadeOutRightDiamond').addClass('fadeInRightDiamond');
		}
	}
	function HideCountdown(){
		if($(window).width() < 768){
			$('.days_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutUpDiamond');
			$('.seconds_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutUpDiamond');
			$('.hours_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutUpDiamond');
			$('.minutes_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutUpDiamond');
		}
		else{
			$('.days_dash').removeClass('fadeInDownDiamond entrance').addClass('fadeOutUpDiamond');
			$('.seconds_dash').removeClass('fadeInUpDiamond entrance').addClass('fadeOutDownDiamond');
			$('.hours_dash').removeClass('fadeInLeftDiamond entrance').addClass('fadeOutLeftDiamond');
			$('.minutes_dash').removeClass('fadeInRightDiamond entrance').addClass('fadeOutRightDiamond');
		}
	}
	function HideMenu(){
		if($(window).width() < 992){
			$('.menu').removeClass('fadeInDown').addClass('animated fadeOutUp');

			//-- hide tooltip
			$('.tooltip').fadeOut('fast');
		}
		else{
			$('.menu li[class*="menu"]').each(function(index, element) {
            	$(this).addClass('menu-out fadeOutLeft');

				//-- remove animation class
				var removeAnimClass = setTimeout(function(){
					$('.menu li[class*="menu"]').each(function(index, element) {
        			    $(this).removeClass('menu-out fadeOutLeft');
						$(this).css({
							visibility:'hidden'
						});
        			});

					clearTimeout(this);
				},2000);
        	});
		}
	}
	function ShowMenu(){
		if($(window).width() < 992){
			//-- show menu on document load (execute only on document load)
			if($('.menu').hasClass('entrance') || $('.menu').hasClass('fadeOutUp')){
				//-- remove init class
				$('.menu').removeClass('entrance fadeOutUp');

				$('.menu').addClass('fadeInDown');

				$('.menu li[class*="menu"]').each(function(index, element) {
        		    $(this).css({
						visibility:'visible'
					});
        		});

				//-- remove animation class
				var removeAnimClass = setTimeout(function(){
					$('.menu').removeClass('fadeInDown');

					clearTimeout(this);
				},1000);
			}
			else{
				$('.menu li[class*="menu"]').each(function(index, element) {
        		    $(this).removeClass('menu-out fadeOutLeft').addClass('menu-in fadeInLeft');
        		});

				//-- remove animation class
				var removeAnimClass = setTimeout(function(){
					$('.menu li[class*="menu"]').each(function(index, element) {
        			    $(this).removeClass('menu-in fadeInLeft');
        			});

					clearTimeout(this);
				},1000);
			}
		}
		else{
			//-- show menu on document load
			if($('.menu').hasClass('entrance')){
				$('.menu').removeClass('entrance').addClass('animated fadeInDown');

				//-- remove animation class
				var removeAnimClass = setTimeout(function(){
					$('.menu').removeClass('animated fadeInDown');

					clearTimeout(this);
				},2000);
			}
			//-- if not first load
			else{
				if($('.menu').hasClass('fadeOutUp')){
					$('.menu').removeClass('fadeOutUp').addClass('animated fadeInDown');

					//-- remove animation class
					var removeAnimClass = setTimeout(function(){
						$('.menu').removeClass('animated fadeInDown');

						clearTimeout(this);
					},1000);
				}
				else{
					$('.menu li[class*="menu"]').each(function(index, element) {
        			    $(this).addClass('menu-in fadeInLeft');

						//-- remove animation class
						var removeAnimClass = setTimeout(function(){
							$('.menu li[class*="menu"]').each(function(index, element) {
        					    $(this).removeClass('menu-in fadeInLeft');
								$(this).css({
									visibility:'visible'
								});
        					});

							clearTimeout(this);
						},2000);
        			});
				}
			}
		}
	}
	function ShowContentControls(){
		$('.main-content-controls').removeClass('fadeOutUp').addClass('fadeInUp');
	}
	function HideContentControls(){
		$('.main-content-controls').removeClass('fadeInUp').addClass('fadeOutUp');
	}
	function ShowCloseButton(){
		$('.close-content-container').removeClass('entrance fadeOutUp').addClass('fadeInUp');

		//-- remove animation class
		var removeAnimClass = setTimeout(function(){
			$('.close-content-container').removeClass('fadeInUp');
			$('.close-content-container').css({
				visibility:'visible'
			});

			clearTimeout(this);
		},2000);
	}
	function HideCloseButton(){
		$('.close-content-container').addClass('fadeOutUp');

		//-- remove animation class
		var removeAnimClass = setTimeout(function(){
			$('.close-content-container').css({
				visibility:'hidden'
			});

			clearTimeout(this);
		},2000);
	}
	function ShowAboutUs(){
		$.menu_name = "about";

		if($(window).width() < 1024){
			$('.about-container').css('display','block');
		}
		$('.about-container h2, p.about-desc, .service-container').removeClass('fadeOutUp').addClass('fadeInUp');
		$('.about-container').css({
			zIndex:5
		});
	}
	function HideAboutUs(){
		$('.about-container h2, p.about-desc, .service-container').removeClass('entrance fadeInUp').addClass('fadeOutUp');
		$('.about-container').css({
			zIndex:4
		});
		if($(window).width() < 1024){
			//-- hide container
			var hideContainer = setTimeout(function(){
				$('.about-container').fadeOut('fast');
				clearTimeout(this);
			},800);
		}
	}
	function ShowWorks(){
		$.menu_name = "works";

		if($(window).width() < 1024){
			$('.works-container').css('display','block');
		}
		$('.works-container h2, p.works-desc, .works-gallery').removeClass('fadeOutUp').addClass('fadeInUp');
		$('.works-container').css({
			zIndex:5
		});
	}
	function HideWorks(){
		$('.works-container h2, p.works-desc, .works-gallery').removeClass('entrance fadeInUp').addClass('fadeOutUp');
		$('.works-container').css({
			zIndex:4
		});
		if($(window).width() < 1024){
			//-- hide container
			var hideContainer = setTimeout(function(){
				$('.works-container').fadeOut('fast');
				clearTimeout(this);
			},800);
		}
	}
	function ShowSubscribe(){
		$.menu_name = "subscribe";

		if($(window).width() < 1024){
			$('.subscribe-container').css('display','block');
		}
		$('.subscribe-container h2, p.subscribe-desc, .subscribe-form-container').removeClass('fadeOutUp').addClass('fadeInUp');
		$('.subscribe-container').css({
			zIndex:5
		});
	}
	function HideSubscribe(){
		$('.subscribe-container h2, p.subscribe-desc, .subscribe-form-container').removeClass('entrance fadeInUp').addClass('fadeOutUp');
		$('.subscribe-container').css({
			zIndex:4
		});
		if($(window).width() < 1024){
			//-- hide container
			var hideContainer = setTimeout(function(){
				$('.subscribe-container').fadeOut('fast');
				clearTimeout(this);
			},800);
		}
	}
	function ShowContact(){
		$.menu_name = "contact";

		if($(window).width() < 1024){
			$('.contact-container').css('display','block');
		}
		$('.contact-container h2, p.contact-desc, .contact-details').removeClass('fadeOutUp').addClass('fadeInUp');
		$('.contact-container').css({
			zIndex:5
		});
	}
	function HideContact(){
		$('.contact-container h2, p.contact-desc, .contact-details').removeClass('entrance fadeInUp').addClass('fadeOutUp');
		$('.contact-container').css({
			zIndex:4
		});
		if($(window).width() < 1024){
			//-- hide container
			var hideContainer = setTimeout(function(){
				$('.contact-container').fadeOut('fast');
				clearTimeout(this);
			},800);
		}
	}
	function ReorderingCountdown(){
		//-- reordering the countdown div in extra small device
		$('.days_dash').insertAfter('.weeks_dash');
		$('.hours_dash').insertAfter('.days_dash');
		$('.minutes_dash').insertAfter('.hours_dash');
		$('.seconds_dash').insertAfter('.minutes_dash');
	}


	/*-- ================================ --
		2.0 window.resize FUNCTION
	/*-- ================================ --*/
	$(window).resize(function(e) {
		//-- 2.1 hide or show logo & menu based on screen size
		if($(window).width() < 1024){
			if($('.main-content').css('visibility') == "visible"){
				$('.menu').addClass('animated fadeOutUp');

				//-- remove animating class
				var removeAnimClass = setTimeout(function(){
					$('.menu li[class*="menu"]').each(function(index, element) {
            			$(this).removeClass('menu-out fadeOutLeft');
        			});

					clearTimeout(this);
				},1000);

				//-- adjust main content background
				$.mainContentBg.hide();
				var showBg = setTimeout(function(){
					$.mainContentBg.show();

					clearTimeout(this);
				},2000);
			}
		}
		else{
			if($('.main-content').css('visibility') == "visible"){
				$('.menu').removeClass('animated fadeOutUp');
				$('.menu li[class*="menu"]').each(function(index, element) {
					$(this).css({
						visibility:'hidden'
					});
        		});

				//-- adjust main content background
				$.mainContentBg.hide();
				var showBg = setTimeout(function(){
					$.mainContentBg.show();

					clearTimeout(this);
				},2000);
			}
		}

		//-- reordering countdown
		if($(window).width() < 768){
			ReorderingCountdown();
		}
    });
	//-- end window.resize function

	/*-- ================================ --
		3.0 window.load FUNCTION
	/*-- ================================ --*/
	$(window).load(function(e) {
		//-- hide preloader
		$('.preloader').addClass('animated fadeOut');

		//-- show home content
		var showHome = setTimeout(function(){
			$('.preloader').hide();

			ShowComingSoon();
			ShowMenu();

			//-- 3.1 activate word rotator plugin
			$("#word-rotator").wordsrotator({
    			autoLoop: true,                  //auto rotate words
    			randomize: false,                //show random entries from the words array
    			stopOnHover: false,              //stop animation on hover
    			changeOnClick: false,            //force animation run on click
    			animationIn: "fadeInLeft",          //css class for entrace animation
    			animationOut: "fadeOutLeft",        //css class for exit animation
    			speed: 3000,               		 //delay in milliseconds between two words
    			words: ['Zartar', 'Creative', 'Experts', 'Coming Soon' ]  //Array of words, it may contain HTML values
			});

			//-- clearing the timeout
			clearTimeout(this);
		},1000);
    });
	//-- end window.load function

	/*-- ================================ --
		4.0 window.scroll FUNCTION
	/*-- ================================ --*/
	$(window).scroll(function(e) {

    });
	//-- end window.scroll function


	/*-- ================================ --
		5.0 document.ready FUNCTION
	/*-- ================================ --*/
	$(document).ready(function(e) {
		//-- reordering countdown
		if($(window).width() < 768){
			ReorderingCountdown();
		}

		//-- 5.1 activate static image background
		// if($(".bg-container-static").is(':visible')){
		// 	$(".bg-container-static").backstretch([
		// 		"img/sample3.gif"
		// 	],{
		// 		duration:6000,
		// 		fade:'normal'
		// 	});
		// }

		//-- 5.2 activate slideshow background
		if($(".bg-container-slideshow").is(':visible')){
			$(".bg-container-slideshow").backstretch([
				"img/slideshow/sample.jpg",
				"img/slideshow/sample2.jpg"
			],{
				duration:6000,
				fade:'normal'
			});
		}

		//-- 5.3 activate slideshow with kenburns effect
		if($(".bg-container-kenburns").is(':visible')){
			$(".bg-container-kenburns").kenburnsy({
        		fullscreen: true
        	});
		}

		//-- 5.4 activate youtube video background
		if($(".bg-container-youtube").is(':visible')){
			if($(window).width() >= 1200){
				/*
				* Please note that this player doesn’t work as background for devices due to the restriction policy adopted by all on
				* managing multimedia files via javascript. It fallsback to the default Youtube player if used as player (not applied to the body).
				*/

				$('.player').mb_YTPlayer();
			}
			else{
				$(".bg-container-youtube").backstretch([
					"img/slideshow/sample.jpg",
					"img/slideshow/sample2.jpg"
				],{
					duration:6000,
					fade:'normal'
				});
			}
		}

		//-- 5.5 activate tooltip (on large device only)
		if($(window).width() > 991){
			$('[data-toggle="tooltip"]').tooltip({
				container:'body'
			});
		}

		//-- 5.6 activate countdown
		$('.countdown-container').countDown({
			targetDate: {
				'day': 		2,
				'month': 	6,
				'year': 	2018,
				'hour': 	12,
				'min': 		30,
				'sec': 		0
			},
			omitWeeks: true
		});

		//-- 5.7 init main content background animation
		$.mainContentBg = new SVGLoader( document.getElementById('main-content'), { speedIn : 150 } );

		//-- 5.8 menu clicked
		$('.menu-link').each(function(index, elem) {
            $(this).on('click',function(e){
				$.menu_name = $(this).data('name');

				//-- hide menu
				HideMenu();

				//-- hide coming soon text
				HideComingSoon();

				//-- show main content bg
				var showMainContentBg = setTimeout(function(){
					$.mainContentBg.show();

					clearTimeout(this);
				},500);

				//-- show content
				var showContent = setTimeout(function(){
					//-- show countdown
					ShowCountdown();

					//-- show close button
					ShowCloseButton();

					//-- show content controls
					ShowContentControls();

					//-- show content based on menu name
					if($.menu_name == "about"){
						ShowAboutUs();
					}
					else if($.menu_name == "works"){
						ShowWorks();
					}
					else if($.menu_name == "subscribe"){
						ShowSubscribe();
					}
					else if($.menu_name == "contact"){
						ShowContact();
					}

					clearTimeout(this);
				},1900);
			});
        });

		//-- 5.9 close button clicked
		$('.close-content').on('click',function(){
			//-- hide close button
			HideCloseButton();

			//-- hide content controls
			HideContentControls();

			//-- hide countdown
			HideCountdown();

			//-- hide active content
			if($.menu_name == "about"){
				HideAboutUs();
			}
			else if($.menu_name == "works"){
				HideWorks();
			}
			else if($.menu_name == "subscribe"){
				HideSubscribe();
			}
			else if($.menu_name == "contact"){
				HideContact();
			}

			//-- hide main content background
			var hideMainContentBg = setTimeout(function(){
				$.mainContentBg.hide();

				clearTimeout(this);
			},1000);

			//-- show home content
			var showHomeContent = setTimeout(function(){
				//-- show menu
				ShowMenu();

				//-- show coing soon
				ShowComingSoon();

				clearTimeout(this);
			},2000);
		});

		//-- 5.10 previous content clicked
		$('.prev-content').on('click',function(){
			//-- go to previous content
			if($.menu_name == "about"){
				HideAboutUs();

				//-- show contact
				var showContact = setTimeout(function(){
					ShowContact();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "subscribe"){
				HideSubscribe();

				//-- show about us
				var showAbout = setTimeout(function(){
					ShowAboutUs();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "works"){
				HideWorks();

				//-- show subscribe
				var showSubscribe = setTimeout(function(){
					ShowSubscribe();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "contact"){
				HideContact();

				//-- show works
				var showWorks = setTimeout(function(){
					ShowWorks();
					clearTimeout(this);
				},600);
			}
		});

		//-- 5.11 next content clicked
		$('.next-content').on('click',function(){
			//-- go to next content
			if($.menu_name == "about"){
				HideAboutUs();

				//-- show subscribe
				var showSubscribe = setTimeout(function(){
					ShowSubscribe();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "subscribe"){
				HideSubscribe();

				//-- show works
				var showWorks = setTimeout(function(){
					ShowWorks();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "works"){
				HideWorks();

				//-- show contact
				var showContact = setTimeout(function(){
					ShowContact();
					clearTimeout(this);
				},600);
			}
			else if($.menu_name == "contact"){
				HideContact();

				//-- show about
				var showAbout = setTimeout(function(){
					ShowAboutUs();
					clearTimeout(this);
				},600);
			}
		});

		//-- 5.12 init carousel for services
		var service_carousel = $('.service-container .owl-carousel');
		service_carousel.owlCarousel({
			singleItem:true,
			navigation:false,
			transitionStyle : "goDown"
		});
		//-- services carousel custom control
		$('.next-service').on('click',function(){
			service_carousel.trigger('owl.next');
		});
		$('.prev-service').on('click',function(){
			service_carousel.trigger('owl.prev');
		});

		//-- 5.13 init owl carousel for works
		var works_carousel = $('.works-gallery .owl-carousel');
		works_carousel.owlCarousel({
			singleItem:true,
			navigation:false,
			transitionStyle : "fadeUp"
		});
		//-- works carousel custom control
		$('.next-work').on('click',function(){
			works_carousel.trigger('owl.next');
		});
		$('.prev-work').on('click',function(){
			works_carousel.trigger('owl.prev');
		});


		//-- 5.14 activate magnific popup image
		$('.popup-image').each(function(index, element) {
            $(this).magnificPopup({
  				type: 'image',
				closeBtnInside: true,
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});
        });

		//-- 5.15 validate and submit subscribe form
		$('.subscribe-form').validate({
			errorLabelContainer: $('.subscribe-notif'),
			rules: {
	        	EMAIL: {
	            	required: true,
	                email: true
	            }
	        },
			messages: {
				EMAIL: {
					required: "Please insert your email address",
					email: "Your email address is not valid"
				}
			},
			submitHandler: function(form) {
				if(event){
					event.preventDefault();
				}

				var url_dest = $(form).attr('action');
				var form_data = $(form).serialize();
				var form_method = $(form).attr('method');

				//-- show loading
				$('.subscribe-notif').show().html('');
				$('.loading-subscribe').fadeIn('fast');

				$.ajax({
					type: form_method,
	        		url: url_dest,
	        		data: form_data,
	        		cache : false,
	        		dataType : 'json',
	        		contentType: "application/json; charset=utf-8",
	        		error : function(err) { alert("Your email has been sent!"); },
	        		success : function(data) {
	            		if(data.result == "success"){
							//-- reset form
							$(form).trigger('reset');

							//-- hide loading
							$('.loading-subscribe').fadeOut('fast',function(){
								//-- show notif
								$('.subscribe-notif').html('<label class="subscribe-notif-success">Thank you for subscribing us.</label>');
								$('.subscribe-notif-success').fadeIn('fast').delay(5000).fadeOut('fast',function(){
									$(this).remove();
									$('.loading-subscribe').remove();
								});
							});
						}
						else{
							//-- reset form
							$(form).trigger('reset');

							//-- hide loading
							$('.loading-subscribe').fadeOut('fast',function(){
								//-- show notif
								$('.subscribe-notif').html('<label class="subscribe-notif-error">Error.</label>');
								$('.subscribe-notif-error').fadeIn('fast').delay(5000).fadeOut('fast',function(){
									$(this).remove();
									$('.loading-subscribe').remove();
								});
							});
						}
	        		}
				});

				return false;
			}
		});
		//-- end validate and submit subscribe form

    });
	//-- end document.ready function
})(jQuery);
