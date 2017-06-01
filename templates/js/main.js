'use strict';
var $ = jQuery,
	isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

$('.panel-group')
  .on('show.bs.collapse', function(e) {
    $(e.target).prev('.panel-heading').addClass('active');
    $(e.target).prev('.panel-heading').removeClass('nonactive');
  })
  .on('hide.bs.collapse', function(e) {
    $(e.target).prev('.panel-heading').removeClass('active');
    $(e.target).prev('.panel-heading').addClass('nonactive');
  });


$(window).on('load', function() {
	$('img:not(".logo-img")').each(function() {
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
			var ieversion=new Number(RegExp.$1);
			if (ieversion>=9)
				if (typeof this.naturalWidth === "undefined" || this.naturalWidth === 0)
					this.src = "http://placehold.it/" + ($(this).attr('width') || this.width || $(this).naturalWidth()) + "x" + (this.naturalHeight || $(this).attr('height') || $(this).height());
		} else {
			if (!this.complete || typeof this.naturalWidth === "undefined" || this.naturalWidth === 0)
				this.src = "http://placehold.it/" + ($(this).attr('width') || this.width) + "x" + ($(this).attr('height') || $(this).height());
		}
	});
});

//Calculating The Browser Scrollbar Width
var parent, child, scrollWidth, bodyWidth;

if (scrollWidth === undefined) {
	parent      = $('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
	child       = parent.children();
	scrollWidth = child.innerWidth() - child.height(99).innerWidth();
	parent.remove();
}

//Form Stylization
function formStylization() {
	var radio    = 'input[type="radio"]',
		checkbox = 'input[type="checkbox"]';

	$(radio).wrap('<div class="new-radio"></div>');
	$('.new-radio').append('<span></span>');
	$(checkbox).wrap('<div class="new-checkbox"></div>');
	$('.new-checkbox').append('<svg x="0" y="0" width="15px" height="15px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><polygon fill="#1e1e1e" points="9.298,13.391 4.18,9.237 3,10.079 9.297,17 17.999,4.678 16.324,3 "/></svg>');
	$(checkbox + ':checked').parent('.new-checkbox').addClass('checked');
	$(radio + ':checked').parent('.new-radio').addClass('checked');
	$(checkbox + ':disabled').parent().addClass('disabled');
	$(radio + ':disabled').parent().addClass('disabled');

	$('html').on('click', function(){
		$(radio).parent('.new-radio').removeClass('checked');
		$(radio + ':checked').parent('.new-radio').addClass('checked');
		$(checkbox).parent('.new-checkbox').removeClass('checked');
		$(checkbox + ':checked').parent('.new-checkbox').addClass('checked');
		$(radio).parent().removeClass('disabled');
		$(checkbox).parent().removeClass('disabled');
		$(radio + ':disabled').parent().addClass('disabled');
		$(checkbox + ':disabled').parent().addClass('disabled');
	});

	if($.fn.selectBox)
		$('select:not(".without-styles")').selectBox();
}

//Full Width Box
function fullWidthBox() {
	if ($('.full-width-box.auto-width').length) {
		var windowWidth    = $('body').outerWidth(),
			containerWidth = $('.header .container').width();

		$('.full-width-box.auto-width').each(function() {
			$(this)
				.css({
					left  : ( containerWidth - windowWidth) / 2,
					width : windowWidth
				})
				.addClass('loaded');
		});
	}
}

//Animations
function animations() {
  	$('[data-appear-animation]').each(function() {
		var $this = $(this);
	
		if(!$('body').hasClass('no-csstransitions') && ($('body').width() + scrollWidth) > 767) {
			$this.appear(function() {
				var delay = ($this.data('appearAnimationDelay') ? $this.data('appearAnimationDelay') : 1);
		
				if(delay > 1) $this.css('animation-delay', delay + 'ms');
				
				$this.addClass('animated').addClass($this.data('appearAnimation'));
			});
		}
	});
		
	/* Animation Progress Bars */
	$('[data-appear-progress-animation]').each(function() {
		var $this = $(this);
	
		$this.appear(function() {
			var delay = ($this.attr('data-appear-animation-delay') ? $this.attr('data-appear-animation-delay') : 1);
	
			if(delay > 1) $this.css('animation-delay', delay + 'ms');
			
			$this.find('.progress-bar').addClass($this.attr('data-appear-animation'));
	
			setTimeout(function() {
				$this.find('.progress-bar').animate({
					width: $this.attr('data-appear-progress-animation')
				}, 500, 'easeInCirc', function() {
					$this.find('.progress-bar').animate({
						textIndent: 10
					}, 1500, 'easeOutBounce');
				});
			}, delay);
		}, {accX: 0, accY: -50});
  	});
}

//Header Fixed
function headerCustomizer() {
  	var body         = $('body'),
		topHeight    = 0,
		headerHeight = 0,
		scroll       = 0,
		fixedH       = $('.fixed-header');
  
	if ($('#top-box').length)
		topHeight = $('#top-box').outerHeight();

	headerHeight = $('.header').outerHeight();

	if (!isTouchDevice) {
		scroll = topHeight;
		
		if (body.hasClass('hidden-top'))
			scroll = 8;

		if (body.hasClass('padding-top')) {
			scroll = topHeight + 420;
		} else if (body.hasClass('boxed')) {
			scroll = topHeight + 20;
			if (body.hasClass('fixed-header') && body.hasClass('fixed-top')) {
				scroll = 20;
			}
		}
		
		$(window).scroll(function(){
			var $this = $(this);
			
			if (body.hasClass('fixed-header')) {
				if ($this.scrollTop() >= scroll)
					body.addClass('fixed');
				else
					body.removeClass('fixed');
			}
			
			if ($this.scrollTop() >= headerHeight)
				fixedH.addClass('background-opacity');
			else
				fixedH.removeClass('background-opacity');
		});
		
		$('.hidden-top .header, .hidden-top #top-box').not('.boxed .header, .boxed #top-box').hover(function(){
			$('.hidden-top').addClass('visible-top');
		}, function(){
			$('.hidden-top').removeClass('visible-top');
		});
		
		$(window).scroll(function(){
			var $this = $(this);
			
			if ((body.hasClass('visible-top')) && ($this.scrollTop() > 0))
				body.removeClass('visible-top');
		});
  }
  
	$(window).scroll(function(){
		if ($(this).scrollTop() >= topHeight + headerHeight)
			$('.top-fixed-box').addClass('fixed');
		else
			$('.top-fixed-box').removeClass('fixed');
	});
}

//Header Menu
function menu() {
	var body    = $('body'),
		primary = '.primary';
  
	$(primary).find('.parent > a .open-sub, .megamenu .title .open-sub').remove();

	if ((body.width() + scrollWidth) < 992 || $('.header').hasClass('minimized-menu'))
		$(primary).find('.parent > a, .megamenu .title').append('<span class="open-sub"><span></span><span></span></span>');
	else
		$(primary).find('ul').removeAttr('style').find('li').removeClass('active');

	$(primary).find('.open-sub').click(function(e){
		e.preventDefault();

		var item = $(this).closest('li, .box');

		if ($(item).hasClass('active')) {
			$(item).children().last().slideUp(600);
			$(item).removeClass('active');
		} else {
			var li = $(this).closest('li, .box').parent('ul, .sub-list').children('li, .box');

			if ($(li).is('.active')) {
				$(li).removeClass('active').children('ul').slideUp(600);
			}

			$(item).children().last().slideDown(600);
			$(item).addClass('active');

			if (body.width() + scrollWidth > 991) {
				var maxHeight = body.height() - ($(primary).find('.navbar-nav')).offset().top - 20;

				$(primary).find('.navbar-nav').css({
					maxHeight : maxHeight,
					overflow  : 'auto'
				});
			}
		}
	});

	$(primary).find('.parent > a').click(function(e){
		if (((body.width() + scrollWidth) > 991) &&  (isTouchDevice)) {
			var $this = $(this);

			if ($this.parent().hasClass('open')) {
				$this.parent().removeClass('open')
			} else {
				e.preventDefault();

				$this.parent().addClass('open')
			}
		}
	});

	body.on('click', function(e) {
		if (!$(e.target).is(primary + ' *')) {
			if ($(primary + ' .collapse').hasClass('in')) {
				$(primary + ' .navbar-toggle').addClass('collapsed');
				$(primary + ' .navbar-collapse').collapse('hide');
			}
		}
	});



	/* Top Menu */
	var topMenu = $('.top-navbar').find('.collapse');

	if ((body.width() + scrollWidth) < 992)
		topMenu.css('width', body.find('#top-box .container').width());
	else
		topMenu.css('width', 'auto');
}



//Tabs
function tabs() {
	var tab = $('.nav-tabs');

	tab.find('a').click(function (e) {
		e.preventDefault();

		$(this).tab('show');
	});

	if (($('body').width() + scrollWidth) < 768 && (!tab.hasClass('no-responsive'))) {
		tab.each(function(){
			var $this = $(this);

			if (!$this.next('.tab-content').hasClass('hidden') && !$this.find('li').hasClass('dropdown')) {
				$this.addClass('accordion-tab');

				$this.find('a').each(function(){
					var $this = $(this),
						id = $this.attr('href');

					$this.prepend('<span class="open-sub"></span>');

					$this.closest('.nav-tabs').next('.tab-content').find(id)
					.appendTo($this.closest('li'));
				});

				$this.next('.tab-content').addClass('hidden');
			}
		});

		$('.accordion-tab > li.active .tab-pane').slideDown();
	} else {
		tab.find('.tab-pane').removeAttr('style', 'display');

		tab.each(function(){
			var $this = $(this);

			if ($this.next('.tab-content').hasClass('hidden')) {
				$this.removeClass('accordion-tab');

				$this.find('a').each(function(){
					var $this = $(this),
						id = $this.attr('href');

					$($this.closest('li').find('.tab-pane')).appendTo($this.closest('.nav-tabs').next('.tab-content'));
				});

				$this.next('.tab-content').removeClass('hidden');
			}
		});
	}

	$('.accordion-tab > li > a').on('shown.bs.tab', function (e) {
		if (($('body').width() + scrollWidth) < 768) {
			var $this = $(this),
				tab = $this.closest('li');

			e.preventDefault();

			$this
				.closest('.accordion-tab')
				.find('.tab-pane').not(tab.find('.tab-pane'))
				.removeClass('active')
				.slideUp();

			tab.find('.tab-pane')
				.addClass('active')
				.slideDown();

			$('html, body').on("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
				$('html, body').stop();
			});

			setTimeout(function(){
				$('html, body').animate({
					scrollTop: $this.offset().top
				}, 800);
			}, 500 );
		}
	});
}

//Footer structure (max-width < 768)
function footerStructure() {
	var footer = $('#footer .footer-bottom');

	if (($('body').width() + scrollWidth) < 768) {
		if (!footer.find('.new-copyright').length) {
			footer.find('.address').after('<div class="new-copyright"></div>');
			footer.find('.copyright').appendTo('#footer .footer-bottom .new-copyright');
		}
	} else {
		if (footer.find('.new-copyright').length) {
			footer.find('.copyright').prependTo('#footer .footer-bottom .row');
			footer.find('.new-copyright').remove();
		}
	}
}


//Add your review
function addReview() {
  $('a[href="#reviews"].add-review').click(function(){
		$('.product-tab a[href="#reviews"]').trigger('click');
		
		$('html, body').animate({
			scrollTop: $("#reviews").offset().top
		}, 1000);
  });
}

//Paralax
function paralax() {
	var $window = $(window),
		speed   = 2;
		
	$('.fwb-paralax').each(function(){
		var $this = $(this);
		
		if ($this.data('speed'))
			speed = $this.data('speed');
		
		function bgPosition() {
			var $thisY   = $this.offset().top,
				$windowY = $window.scrollTop();

			if ($thisY > $windowY)
				$this.css({ backgroundPosition: '50% '+ (($thisY - $windowY) / speed) + 'px'});
			else
				$this.css({ backgroundPosition: '50% '+ (-($windowY - $thisY) / speed) + 'px'});
		}
		
		bgPosition();
		
		$window.on('scroll', bgPosition);
	});
}

//Video Background
function videoBg() {
	if($.fn.tubular) {
		var id,
			options,
			poster,
			youtube = $('.fwb-youtube-video');

		if (youtube.attr('data-youtube-videoId') !== undefined && youtube.attr('data-youtube-videoId') !== false)
			id = youtube.attr('data-youtube-videoId');

		if (youtube.attr('data-youtube-poster') !== undefined && youtube.attr('data-youtube-poster') !== false)
			poster = youtube.attr('data-youtube-poster');

		options = {
			videoId : id,
			start : 0,
			wrapperZIndex : -1,
			mute : true,
			width : $('body').width()
		}

		if( isTouchDevice )
			youtube.css('background-image', "url('"+poster+"')");
		else
			youtube.tubular(options);
	}
}


//Login/Register Page
function loginRegister() {
	if($.fn.isotope) {
		var filterBox   = $('.login-register'),
			filterElems = filterBox.find('.filter-elements'),
			buttonBox   = filterBox.find('.filter-buttons'),
			selector    = filterBox.find('.filter-buttons.active-form').attr('data-filter');

		filterElems.removeClass('hidden');

		filterElems.isotope({
			filter: selector,
			layoutMode: 'fitRows'
		});

		buttonBox.click(function(e){
			var selector = $(this).attr('data-filter');

			e.preventDefault();

			if (!$(this).hasClass('active-form')) {
				buttonBox.removeClass('active-form');
				$(this).addClass('active-form');

				filterElems.isotope({
					filter: selector,
					layoutMode: 'fitRows'
				});
			}
		});
	}

	var height = 0,
		form   = $('.form-content');

	form.each(function () {
		if ($(this).outerHeight() > height)
			height = $(this).outerHeight();
	});

	form.css('height', height)

	$('.switch-form').click(function (e) {
		var button = $(this);

		e.preventDefault();

		if (button.hasClass('forgot')) {
			$('.form-content').removeClass('hidden');
			$('.register-form').closest('.form-content').addClass('hidden');
		} else if (button.hasClass('sing-up')) {
			$('.form-content').removeClass('hidden');
			$('.forgot-form').closest('.form-content').addClass('hidden');
		}

		$('.login-register .rotation').toggleClass('hover');
	});
}

function loadingButton() {
	var loading = function(){
		if ($('.ladda-button.progress-button').length) {
			Ladda.bind('.ladda-button:not(.progress-button)', {
				timeout: 2000
			});

			Ladda.bind('.ladda-button.progress-button', {
				callback: function(instance) {
					var interval,
						progress = 0;

					return interval = setInterval(function() {
						progress = Math.min(progress + Math.random() * 0.1, 1);
						instance.setProgress(progress);
						if (progress === 1) {
							instance.stop();
							return clearInterval(interval);
						}
					}, 200);
				}
			});
		}
	}

	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
		var ieversion = new Number(RegExp.$1);

		if (ieversion >= 9)
			loading();
	} else {
		loading();
	}
}

function productLimited() {
	if ($('.product .limit-offer').length){
		var product = $('.product .limit-offer'),
			endDateTime = '';

		product.each(function () {
			var $this = $(this);

			if ($this.attr('data-end') !== undefined && $this.attr('data-end') !== false)
				endDateTime = $this.attr('data-end');
			else
				endDateTime = '';

			$this.county({
				endDateTime: new Date(endDateTime),
				animation: 'scroll',
				reflection: false
			});
		});
	}
}

//Remove Video
if( isTouchDevice )
	$('.fwb-video').find('video').remove();
	
//Word Rotate
function wordRotate() {
	$('.word-rotate').each(function() {
		var $this          = $(this),
			wordsBox       = $this.find('.words-box'),
			words          = wordsBox.find('> span'),
			firstWord      = words.eq(0),
			firstWordClone = firstWord.clone(),
			wordHeight     = firstWord.height(),
			currentItem    = 1,
			currentTop     = 0;
		
		wordsBox.append(firstWordClone);
		
		$this.height(wordHeight).addClass('loaded');
		
		setInterval(function() {
			currentTop = (currentItem * wordHeight);
		
			wordsBox.animate({
				top: -(currentTop) + 'px'
			}, 300, 'easeOutQuad', function() {
				currentItem ++;
			
				if(currentItem > words.length) {
					wordsBox.css('top', 0);
					currentItem = 1;
				}
			});
		}, 2000);
	});
}

//Modal Window
function centerModal() {
	$(this).css('display', 'block');

	var dialog = $(this).find('.modal-dialog'),
		offset = ($(window).height() - dialog.height()) / 2;

	if (offset < 10)
		offset = 10;

	dialog.css('margin-top', offset);
}

//Social Feed
function locationSocialFeed() {
	var socialFeed = $('.social-feed');

	if($.fn.isotope) {
		socialFeed.isotope({
			itemSelector: '.isotope-item',
		}).addClass('loaded');

		$('#load-more').click(function() {
			var item1, item2, item3, items, tmp;

			items = socialFeed.find('.item-clone');
			item1 = $(items[Math.floor(Math.random() * items.length)]).clone();
			item2 = $(items[Math.floor(Math.random() * items.length)]).clone();
			item3 = $(items[Math.floor(Math.random() * items.length)]).clone();
			tmp = $().add(item1).add(item2).add(item3);

			var images = tmp.find('img');

			images.imagesLoaded(function(){
				return socialFeed.isotope('insert', tmp);
			});
		});
	}
}

//Full Height Pages
function fullHeightPages() {
	var full = $('.full-height');
	
	full.removeClass('scroll');
	
	if (full.height() < $('.page-box').outerHeight())
		full.addClass('scroll');
	else
		full.removeClass('scroll');
}

//Zoomer Start
function zoom() {
	if ($.fn.elevateZoom) {
		var image      = $('.general-img').find('img'),
			zoomType,
			zoomWidth  = 470,
			zoomHeight = 470,
			zoomType   = 'window';

		if (($('body').width() + scrollWidth) < 992) {
			zoomWidth  = 0;
			zoomHeight = 0;
			zoomType   = 'inner';
		}

		image.removeData('elevateZoom');
		$('.zoomContainer').remove();

		image.elevateZoom({
			gallery            : 'thumblist',
			cursor             : 'crosshair',
			galleryActiveClass : 'active',
			zoomWindowWidth    : zoomWidth,
			zoomWindowHeight   : zoomHeight,
			borderSize         : 0,
			borderColor        : 'none',
			lensFadeIn         : true,
			zoomWindowFadeIn   : true,
			zoomType		       : zoomType
		});
	}
}
// Zoomer End

//Blur Start
function blur() {
	$('.full-width-box .fwb-blur').each(function () {
		var blurBox    = $(this),
			img        = new Image(),
			amount     = 2,
			prependBox = '<div class="blur-box"/>';
		
		if (!blurBox.find('canvas').length) {
			img.src = blurBox.data('blurImage');
			
			if (
				blurBox.data('blurAmount') !== undefined &&
				blurBox.data('blurAmount') !== false
			)
				amount = blurBox.data('blurAmount');
			
			img.onload = function() {
				Pixastic.process(img, 'blurfast', {
					amount: amount
				});
			}
		
			blurBox
				.prepend( prependBox )
				.find('.blur-box')
				.prepend(img);
		}
		
		setTimeout(function(){
			var canvas = blurBox.find('canvas');
			
			if (canvas.width() == blurBox.width()){
				canvas.css({
					marginLeft : 0,
					marginTop : -((canvas.height() - blurBox.height()) / 2)
				});
			} else {
				canvas.css({
					marginTop : 0,
					marginLeft : -((canvas.width() - blurBox.width()) / 2)
				});
			}
	
			$('body').addClass('blur-load');
		}, 50);
	});
}
//Blur End

//Blur Page Start
function blurPage() {
	if ($('.blur-page').length) {
		var blurBox = $('.blur-page');

		blurBox.each(function () {
			var $this      = $(this),
				img        = new Image(),
				amount     = 2,
				prependBox = '<div class="blur-box"></div>';

			img.src = $this.attr('data-blur-image');

			if ($this.attr('data-blur-amount') !== undefined && $this.attr('data-blur-amount') !== false)
				amount = $this.attr('data-blur-amount');

			img.onload = function() {
				Pixastic.process(
					img,
					'blurfast',
					{
						amount: amount
					},
					function(){
						$('.blur-page').addClass('blur-load')
					}
				);
			}

			$this.prepend( prependBox ).find('.blur-box').prepend( img );
		});
	}
}
//Blur Page End

//One Page Start
function scrollMenu() {
	var link         = $('a.scroll'),
		header       = $('.header'),
		headerHeight = header.height();

	if(($('body').width() + scrollWidth) < 992)
		headerHeight = 0;

	$(document).on('scroll', onScroll);

	link.on('click', function(e) {
		var target = $(this).attr('href'),
			$this = $(this);

		e.preventDefault();

		link.removeClass('active');
			$this.addClass('active');

		if ($(target).length) {
			$('html, body').animate({scrollTop: $(target).offset().top - headerHeight}, 600);
		}
	});

	function onScroll(){
		var scrollPos = $(document).scrollTop();

		link.each(function () {
			var currLink = $(this),
				refElement;

			if ($(currLink.attr('href')).length) {
				refElement = $(currLink.attr('href'));

				if (
				refElement.position().top - headerHeight <= scrollPos &&
				refElement.position().top + refElement.height() > scrollPos) {
					link.removeClass('active');
					currLink.addClass('active');
				} else {
					currLink.removeClass('active');
				}
			}
		});
	}
	
  	$('a.scroll').on('click', function(e) {
		var header = $('.header'),
			headerHeight = header.height(),
			target = $(this).attr('href'),
			$this = $(this);
		
		e.preventDefault();
	
		if ($(target).length) {
			if(($('body').width() + scrollWidth) > 991)
				$('html, body').animate({scrollTop: $(target).offset().top - (headerHeight)}, 600);
			else
				$('html, body').animate({scrollTop: $(target).offset().top}, 600);
		}
	
		$('a.scroll').removeClass('active');
		$this.addClass('active');
	});
}
//One Page End

function equalheight(){
    
    $('.fg-equalheight-wrapper').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.fg-equalheight', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.fg-equalheight',this).height(highestBox);
                    
    }); 
}


$(document).ready(function(){
    
	// Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden.
	var back_to_top_button = ['<a href="#top" class="back-to-top">Nach oben</a>'].join("");
	$("body").append(back_to_top_button);

	// Der Button wird ausgeblendet
	$(".back-to-top").hide();

	// Funktion für das Scroll-Verhalten
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) { // Wenn 100 Pixel gescrolled wurde
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').click(function () { // Klick auf den Button
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
   
   
    
    
	//Replace img > IE8
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
		var ieversion = new Number(RegExp.$1);

		if (ieversion < 9) {
			$('img[src*="svg"]').attr('src', function() {
				return $(this).attr('src').replace('.svg', '.png');
			});
		}
	}

	//IE
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent))
		$('html').addClass('ie');

	//Touch device
	if( isTouchDevice )
		$('body').addClass('touch-device');

	//Bootstrap Elements
	$('[data-toggle="tooltip"], .tooltip-link').tooltip();

	$("a[data-toggle=popover]")
		.popover()
		.click(function(e) {
			e.preventDefault();
		});

	$('.btn-loading').click(function () {
		var btn = $(this);

		btn.button('loading');

		setTimeout(function () {
			btn.button('reset')
		}, 3000);
	});

	$('.disabled, fieldset[disabled] .selectBox').click(function () {
		return false;
	});

	$('.modal-center').on('show.bs.modal', centerModal);

	//Functions
        
        
	fullWidthBox();
	menu();
	footerStructure();
	tabs();
	headerCustomizer();
	animations();
	formStylization();
	addReview();
        
equalheight();        
	if ($('.fwb-paralax').length) paralax();
        /*
	videoBg();
	loginRegister();
	loadingButton();
	productLimited();
	wordRotate();
        */

	//Bootstrap Validator
	if($.fn.bootstrapValidator) {
		$('.form-validator').bootstrapValidator({
			excluded: [':disabled', ':hidden', ':not(:visible)'],
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			message: 'This value is not valid',
			trigger: null
		});
	}

	//Bootstrap Datepicker
	if($.fn.datepicker) {
		$('.datepicker-box').datepicker({
			todayHighlight : true,
			beforeShowDay: function (date){
				if (date.getMonth() == (new Date()).getMonth()) {
					switch (date.getDate()){
						case 4:
							return {
								tooltip: 'Example tooltip',
								classes: 'active'
							};
						case 8:
							return false;
						case 12:
							return 'green';
					}
				}
			}
		});
	}

	//Language-Currency
	if( !isTouchDevice ) {
		$('.language, .currency, .sort-by, .show-by').hover(function(){
			$(this).addClass('open');
		}, function(){
			$(this).removeClass('open');
		});
	}

	//Header Phone & Search
	$('.phone-header > a').click(function(e){
		e.preventDefault();
		$('.btn-group').removeClass('open');
		$('.phone-active').fadeIn().addClass('open');
	});

	$('.search-header > a').click(function(e){
		e.preventDefault();
		$('.btn-group').removeClass('open');
		$('.search-active').fadeIn().addClass('open');
	});

	$('.phone-active .close, .search-active .close').click(function(e){
		e.preventDefault();
		$(this).parent().fadeOut().removeClass('open');
	});

	$('body').on('click', function(e) {
		var phone  = '.phone-active',
			search = '.search-active';

		if ((!$(e.target).is(phone + ' *')) && (!$(e.target).is('.phone-header *'))) {
			if ($(phone).hasClass('open'))
				$(phone).fadeOut().removeClass('open');
		}

		if ((!$(e.target).is(search + ' *')) && (!$(e.target).is('.search-header *'))) {
			if ($(search).hasClass('open'))
				$(search).fadeOut().removeClass('open');
		}
	});

	//Cart
	$('.info-header').hover(function(){
		if (($('body').width() + scrollWidth) >= 291 ) // 991
		  $(this).addClass('open');
	}, function(){
		if (($('body').width() + scrollWidth) >= 291 )
		  $(this).removeClass('open');
	});

	//Product
	if(!isTouchDevice) {
		$('.product, .employee')
			.hover(function(e) {
				e.preventDefault();

				$(this).addClass('hover');
			}, function(e) {
				e.preventDefault();

				$(this).removeClass('hover');
	  	});
	}

	$('body').on('touchstart', function (e) {
		e.stopPropagation();

		if ($(e.target).parents('.product, .employee').length == 0)
	  		$('.product, .employee').removeClass('hover');
	});

	$('.product, .employee').on('touchend', function(){
		if ($(this).hasClass('hover')) {
			$(this).removeClass('hover');
		} else {
			$('.product, .employee').removeClass('hover');
			$(this).addClass('hover');
		}
	});

	//Menu > Sidebar
	$('.menu .parent:not(".active") a').next('.sub').css('display', 'none');
	$('.menu .parent a .open-sub').click(function(e){
		e.preventDefault();

		if ($(this).closest('.parent').hasClass('active')) {
			$(this).parent().next('.sub').slideUp(600);
			$(this).closest('.parent').removeClass('active');
		} else {
			$(this).parent().next('.sub').slideDown(600);
			$(this).closest('.parent').addClass('active');
		}
	});

	//Contact Us
	$('#submit').click(function(){
		$.post('php/form.php', $('#contactform').serialize(),  function(data) {
			$('#success').html(data).animate({opacity: 1}, 500, function(){
				if ($(data).is('.send-true'))
					$('#contactform').trigger( 'reset' );
			});
		});
		return false;
	});

	//Subscribe
	$('.subscribe-form').submit(function(e){
		var form           = $(this),
			message        = form.find('.form-message'),
			messageSuccess = 'Your email is sended',
			messageInvalid = 'Please enter a valid email address',
			messageSigned  = 'This email is already signed',
			messageErrore  = 'Error request';

		e.preventDefault();

		$.ajax({
			url     : 'php/subscribe.php',
			type    : 'POST',
			data    : form.serialize(),
			success : function(data){
				form.find('.submit').prop('disabled', true);

				message.removeClass('text-danger').removeClass('text-success').fadeIn();

				switch(data) {
					case 0:
						message.html(messageSuccess).addClass('text-success').fadeIn();

						setTimeout(function(){
							form.trigger('reset');

							message.fadeOut().delay(500).queue(function(){
								message.html('').dequeue();
							});
						}, 2000);

						break;
					case 1:
						message.html(messageInvalid).addClass('text-danger').fadeIn();

						break;
					case 2:
						message.html(messageSigned).addClass('text-danger').fadeIn();

						setTimeout(function(){
							form.trigger('reset');

							message.fadeOut().delay(500).queue(function(){
								message.html('').dequeue();
							});
						}, 2000);

						break;
					default:
						message.html(messageErrore).addClass('text-danger').fadeIn();
				}

				form.find('.submit').prop('disabled', false);
			}
		});
	});

	//Country
	if ($.fn.county){
		$('#count-down').county({
			endDateTime: new Date('2016/12/29 10:00:00'),
			reflection: false
		}).addClass('count-loaded');
	}

	// Scroll to Top
	$('#footer .up').click(function() {
		$('html, body').animate({
		  	scrollTop: $('body').offset().top
		}, 500);
		return false;
	});

	// Circular Bars - Knob
	if($.fn.knob) {
		$('.knob').each(function () {
			var $this   = $(this),
				knobVal = $this.attr('rel');

			$this.knob({
				'draw' : function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function() {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration : 2000,
					easing   : 'swing',
					step     : function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {accX: 0, accY: -150});
		});
	}

	//JS loaded
	$('body').addClass('loaded');

	//Scrollbar
	if ($.fn.scrollbar)
		$('.minimized-menu .primary .navbar-nav').scrollbar();

	//Retina
	if('devicePixelRatio' in window && window.devicePixelRatio >= 2) {
		var imgToReplace = $('img.replace-2x').get();

		for (var i=0,l=imgToReplace.length; i<l; i++) {
			var src = imgToReplace[i].src;
			src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
			imgToReplace[i].src = src;

			$(imgToReplace[i]).load(function(){
				$(this).addClass('loaded');
			});
		};
	}
});

//Window Resize
(function(){
	var delay = (function(){
		var timer = 0;
		return function(callback, ms){
			clearTimeout (timer);
			timer = setTimeout(callback, ms);
		};
	})();

	function resizeFunctions(){
            
		//Functions
		fullWidthBox();
		menu();
		footerStructure();
		tabs();
		animations();
equalheight();                            
/*                
		if ($('.fwb-paralax').length) paralax();
		loginRegister();
		if ($('.full-height').length && typeof fullHeightPages == 'function') fullHeightPages();
		$('.modal-center:visible').each(centerModal);
		if ($('.progressive-slider').length && typeof progressiveSlider == 'function') progressiveSlider();
		if ($('.banner-set').length && typeof bannerSetCarousel == 'function') bannerSetCarousel();
		if ($('#thumblist').length && typeof thumblist == 'function') thumblist();
		if ($('.chart').length && typeof chart == 'function') chart();
		if (typeof graph == 'function') graph(true);
		if ($('.general-img').length && typeof zoom == 'function') zoom();
		if ($('.carousel-box .carousel').length && typeof carousel == 'function') carousel();
		if ($('.portfolio, .filter-box').length && typeof isotopFilter == 'function') isotopFilter();
		if ($('.full-width-box .fwb-blur').length && typeof blur == 'function') blur();
*/                
	}

	if(isTouchDevice) {
		$(window).bind('orientationchange', function(){
			delay(function(){
				resizeFunctions();
			}, 200);
		});
	} else {
		$(window).on('resize', function(){
			delay(function(){
				resizeFunctions();
			}, 500);
		});
	}
}());