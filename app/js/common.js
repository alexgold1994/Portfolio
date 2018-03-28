$(document).ready(function() {

var mixer = mixitup('.container-mix');

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".animate_about").animated("fadeInUp", "fadeOutDown");
	$(".animate_about-text").animated("bounceInLeft", "bounceOutLeft");
	$(".animate_about-skills").animated("bounceInRight", "bounceOutRight");
	$(".animate_about-photo").animated("flipInY", "flipOutY");
	$(".animate_resume").animated("fadeInUp", "fadeOutDown");
	$(".animate_portfolio").animated("fadeInUp", "fadeOutDown");
	$(".animate_contacts").animated("fadeInUp", "fadeOutDown");
	$(".resume_left .resume_item1").animated("fadeInLeft", "fadeOutDown");
	$(".resume_left .resume_item2").animated("fadeInLeft", "fadeOutDown");
	$(".resume_left .resume_item3").animated("fadeInLeft", "fadeOutDown");
	$(".resume_right .resume_item4").animated("fadeInRight", "fadeOutDown");
	$(".resume_right .resume_item5").animated("fadeInRight", "fadeOutDown");
	$(".resume_right .resume_item6").animated("fadeInRight", "fadeOutDown");

	$('.popup_content').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		midClick: true
		});

		
	$('.popup').magnificPopup({
		type: 'image',
		fixedContentPos: false,
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


	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	 });
	 
	 $(".top_mnu ul a").mPageScroll2id();
	
});


$(window).on("load", function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	 
}); 

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

var settings = {
	//  set #id for validation email
	 emailID: '#inputEmail',
	//  set text for validation email
	 ErrorTextEmail: 'Введите коректный E-mail',
	 //  set #id for validation text
	 passwordID: '#inputText',
	 //  set #id for validation name
	 Custom: '#inputName',
	 //  set text for validation name
	ErrorTextCustom: 'Должно быть хотя бы 2 символа.',
	 //  set value required chars for validation custom form
	 MinCharsCustom: '2'
};



