$(function() {

	AOS.init({
	  duration: 500,
	  easing: 'ease-out-quart'
	});

	$('.estimateForm').click(function(){
		$('body').addClass('overflow');
		$('.popupForm').addClass('active')
	});
	
	$('.popupcClose').click(function(){
		$('body').removeClass('overflow');
		$('.popupForm').removeClass('active')
	});

	// Smooth Scroll 
	$('.smoothClick, .smoothLink > a').click(function() {

		var dis = $(this);

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    $('html, body').animate({
		      scrollTop: target.offset().top
		    }, 1000);
		    return false;
		  }
		}
	});



	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.mainMenu').slideToggle();
		$('.overlay').toggleClass('show');
	});




});// Main Function Close




$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom .zoomImg").css({
		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
		//filter: "blur(" + (scroll/200) + "px)"
	});

});





$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".backToTop").addClass("show");
    } else {
        $(".backToTop").removeClass("show");
    }

});