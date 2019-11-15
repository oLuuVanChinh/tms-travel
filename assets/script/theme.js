;(function ($) {
    "use strict";

    var body = $('body'),
        bodyHeight = body.height(),
        windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        menuMobile = $('.menu-mobile');

    var tmsTheme = {
        init: function () {
            // Mobile Menu
            if (windowWidth < 992) {
                var menuBackdrop = '<div class="menu-backdrop"></div>';
                body.append(menuBackdrop);
            }

            function toggleMenuMobile() {
                if (menuMobile.hasClass('open')) {
                    menuMobile.removeClass('open');
                    body.removeClass('menu-open');
                } else {
                    menuMobile.addClass('open');
                    body.addClass('menu-open');
                }
            }

            $(".toggle-menu-on, .toggle-menu-off, .menu-backdrop").on("click", function () {
                toggleMenuMobile();
            });

            if ($('.menu-mobile').length > 0) {
                var mobileMenu = $('.menu-mobile');
                mobileMenu.each(function () {
                    var menuHasChild = $(this).find('.item-parent'),
                        menuArrow = '<span class="toggle-menu"><i class="icon-arrow-left"></i></span>';
                    menuHasChild.append(menuArrow);
                    var menuToggle = $(this).find('.toggle-menu');
                    menuToggle.click(function () {
                        $(this).parent().children('.sub-menu').slideToggle("fast", "linear");
                        $(this).parent().toggleClass('sub-open');
                    });
                });
            }

            // Back to top
            if ($('.back-to-top').length) {
                var scrollTrigger = 300,
                    backToTop = function () {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $('.back-to-top').css("visibility", "visible");
                        } else {
                            $('.back-to-top').css("visibility", "hidden");
                        }
                    };
                backToTop();
                $(window).on('scroll', function () {
                    backToTop();
                });
                $('.back-to-top').on('click', function (e) {
                    e.preventDefault();
                    $('html,body').animate({
                        scrollTop: 0
                    }, 700);
                });
            }
            
            // Slider
            if($('.module__slider').length > 0){
                $('.module__slider').each(function () {
                    $(this).slick({
                        arrows: false,
                        prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i></button>',
                        nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>',
                    });
                });
            }
            
            // Fix conflict with boostrap tabs
            $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                e.target
                e.relatedTarget
                $('.module__slider').slick('setPosition');
            });
            
            // Set width for nav item
            if(windowWidth <= 767){
                if($('.custom-heading .nav-tabs .nav-item').length > 0){
                    $('.custom-heading .nav-tabs .nav-item').each(function () {
                        var itemNavWidth = $(this).outerWidth();
                        $(this).css("min-width", itemNavWidth);
                    })
                    $('.custom-heading .nav-tabs').css("flex-wrap", 'inherit');
                }
            }

            // Back to top
            if ($('.back-to-top').length) {
                $('.back-to-top').on('click', function (e) {
                    e.preventDefault();
                    $('html,body').animate({
                        scrollTop: 0
                    }, 700);
                });
            }
            // Scroll
            if($(".section-scroll").length > 0){
                $(".section-scroll").nanoScroller();
            }
            // footer widget
            if (windowWidth < 767) {
                if($(".footer-widget .widget-title").length > 0){
                    $(".footer-widget .widget-title").each(function () {
                        $(this).on("click", function (e) {
                            e.preventDefault();
                            $(this).next().slideToggle("fast", "linear");
                            $(this).closest('.footer-widget').toggleClass('open');
                        })
                    })
                }
            }

        }
    }
    window.tmsTheme = tmsTheme;

    $(document).ready(function () {
        tmsTheme.init();
    });
})(window.jQuery);
