;(function ($) {
    "use strict";

    var body = $('body'),
        bodyHeight = body.height(),
        windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        menuMobile = $('.menu-mobile');

    var eduTheme = {
        init: function () {
            // Mobile Menu
            if (windowWidth < 768) {
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
                        menuArrow = '<span class="toggle-menu"><i class="icofont-simple-down"></i></span>';
                    menuHasChild.append(menuArrow);
                    var menuToggle = $(this).find('.toggle-menu');
                    menuToggle.click(function () {
                        $(this).parent().children('.sub-menu').slideToggle("fast", "linear");
                        $(this).find('i').toggleClass('icofont-simple-down icofont-simple-up');
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
                    $(this).slick();
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
        }
    }
    window.eduTheme = eduTheme;

    $(document).ready(function () {
        eduTheme.init();
    });
})(window.jQuery);