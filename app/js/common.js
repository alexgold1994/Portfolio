$(document).ready(function() {
	
	$(".animate_about").animated("fadeInUp", "fadeOutDown");
	$(".animate_about-text").animated("bounceInLeft", "bounceOutLeft");
	$(".animate_about-skills").animated("bounceInRight", "bounceOutRight");
	$(".animate_about-photo").animated("flipInY", "flipOutY");
	$(".animate_resume").animated("fadeInUp", "fadeOutDown");
	$(".animate_portfolio").animated("fadeInUp", "fadeOutDown");
	$(".animate_contacts").animated("fadeInUp", "fadeOutDown");
	
	$('.popup').magnificPopup({
		type: 'image',
		zoom: {
				enabled: true,
				duration: 400 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		}
		});
	function heightDetect() {
		$(".main__head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function () {
		heightDetect();
	});

	$(".toggle_mnu").click(function () {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function () {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function () {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
});

$(window).on("load", function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	 
}); 