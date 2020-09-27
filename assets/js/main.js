//Costum js file
$(document).ready(function(){
	// SHOW/HIDE NAVBAR
	$('body').css('padding-top', $('.navbar').outerHeight() + 'px')
	// detect scroll top or down
	if ($('.smart-scroll').length > 0) { // check if element exists
			var last_scroll_top = 0;
			$(window).on('scroll', function() {
					scroll_top = $(this).scrollTop();
					if(scroll_top < last_scroll_top) {
							$('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
					}
					else {
							$('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
					}
					last_scroll_top = scroll_top;
			});
	}
	
	//TYPEWRITTING
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
	
	// Isotope Filter
  let $btn = $('.button-group button')
  $btn.click(function(e){
      $('.button-group button').removeClass('active');
      e.target.classList.add('active');

      let selector = $(e.target).attr('data-filter');
      $('.project-area .grid').isotope({
          filter:selector
      });
      return false;
  });
	
	// Magnigic Popup 
  $('.grid .test-popup-link').magnificPopup({
      type: 'image',
      gallery:{enabled:true}
  });
	
	//Owl carousel
  $('.about-area .owl-carousel').owlCarousel({
      loop:true,
      autplay:true,
      dots:true,
      responsive:{
          0:{
              items:1
          },
          544:{
              items:2
          }
      }
  })
})