$(document).ready(function(){				
	$('.single-item').slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false
	});

    var $window = $(window), headerMin = false;
    $window.on('load scroll', function() {
        var top = $window.scrollTop();
        if(top >= 150 && !headerMin){//$('.header').height()
        	$('.header__flex').css({height:'55px'});
        	$('.header').css({background:'rgba(0,0,0,0.5)'});
        	headerMin = true;
        } else if(top < 150 && headerMin){
        	$('.header__flex').css({height:'150px'});
        	$('.header').css({background:'rgba(0,0,0,0)'});
        	headerMin = false;
        }
    });

    var linkNav = document.querySelectorAll('[href^="#"]'), V = 0.5;
	for(var i = 0; i < linkNav.length; i++){
		if($(linkNav[i]).attr('data-toggle') == 'tab')continue;
		linkNav[i].addEventListener('click', function(e){
			e.preventDefault();
			var w = window.pageYOffset, hash = this.href.replace(/[^#]*(.*)/, '$1');
			t = document.querySelector(hash).getBoundingClientRect().top, start = null;
			requestAnimationFrame(step);
			function step(time){
				if(start === null)start = time;
				var progress = time - start, r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
				window.scrollTo(0,r);
				if (r != w + t)requestAnimationFrame(step)
				else location.hash = hash;
			}
		}, false);
	}

	
	$('.layout__advantages .item-interactive:nth-child(1)').addClass("--hidden").viewportChecker({
	    classToAdd: '--visible animated bounceInLeft',
	    offset: 100    
	});
	$('.layout__advantages .item-interactive:nth-child(2)').addClass("--hidden").viewportChecker({
	    classToAdd: '--visible animated bounceInRight',
	    offset: 100    
	});

	$('.layout__info .item-interactive:nth-child(1)').addClass("--hidden").viewportChecker({
	    classToAdd: '--visible animated bounceInLeft',
	    offset: 100    
	});
	$('.layout__info .item-interactive:nth-child(2)').addClass("--hidden").viewportChecker({
	    classToAdd: '--visible animated bounceInUp',
	    offset: 100    
	}); 
	$('.layout__info .item-interactive:nth-child(3)').addClass("--hidden").viewportChecker({
	    classToAdd: '--visible animated bounceInUp',
	    offset: 100    
	});  
	$('.layout__info .item-interactive:nth-child(4)').addClass("--hidden").viewportChecker({
	    classToAdd: '--visible animated bounceInRight',
	    offset: 100    
	}); 
	
	$('.layout__investors .info-interactive:nth-child(1)').addClass("--hidden").viewportChecker({
	    classToAdd: '--visible animated bounceInUp',
	    offset: 100    
	});
	$('.layout__investors .info-interactive:nth-child(2)').addClass("--hidden").viewportChecker({
	    classToAdd: '--visible animated bounceInRight',
	    offset: 100    
	});


	particlesJS("particles-js", {
		"particles": {
		    "number": {"value": 100,"density": {"enable": true,"value_area": 800}},
		    "color": {"value": "#ffffff"},
		    "shape": {"type": "circle","stroke": {"width": 0,"color": "#000000"},"polygon": {"nb_sides": 5}},
		    "opacity": {"value": 0.5,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},
		    "size": {"value": 3,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},
		    "line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 0.5},
		    "move": {
				"enable": true,
				"speed": 2,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {"enable": true,"mode": "grab"},
				"onclick": {"enable": true,"mode": "push"},"resize": true
			},
			"modes": {
				"grab": {"distance": 140,"line_linked": {"opacity": 1}},
				"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},
				"repulse": {"distance": 200,"duration": 0.4},
				"push": {"particles_nb": 4},
				"remove": {"particles_nb": 2}
			}
		},
		"retina_detect": true
	});
});