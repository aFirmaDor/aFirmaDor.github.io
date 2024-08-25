jQuery(document).ready(function($) {
    'use strict';

    if(gridmini_ajax_object.secondary_menu_active){

        $(".gridmini-nav-secondary .gridmini-secondary-nav-menu").addClass("gridmini-secondary-responsive-menu");

        $( ".gridmini-secondary-responsive-menu-icon" ).on( "click", function() {
            $(this).next(".gridmini-nav-secondary .gridmini-secondary-nav-menu").slideToggle();
        });

        $(window).on( "resize", function() {
            if(window.innerWidth > 1112) {
                $(".gridmini-nav-secondary .gridmini-secondary-nav-menu, nav .sub-menu, nav .children").removeAttr("style");
                $(".gridmini-secondary-responsive-menu > li").removeClass("gridmini-secondary-menu-open");
            }
        });

        $( ".gridmini-secondary-responsive-menu > li" ).on( "click", function(event) {
            if (event.target !== this)
            return;
            $(this).find(".sub-menu:first").toggleClass('gridmini-submenu-toggle').parent().toggleClass("gridmini-secondary-menu-open");
            $(this).find(".children:first").toggleClass('gridmini-submenu-toggle').parent().toggleClass("gridmini-secondary-menu-open");
        });

        $( "div.gridmini-secondary-responsive-menu > ul > li" ).on( "click", function(event) {
            if (event.target !== this)
                return;
            $(this).find("ul:first").toggleClass('gridmini-submenu-toggle').parent().toggleClass("gridmini-secondary-menu-open");
        });

    }

    if(gridmini_ajax_object.primary_menu_active){

        $(".gridmini-nav-primary .gridmini-primary-nav-menu").addClass("gridmini-primary-responsive-menu");

        $( ".gridmini-primary-responsive-menu-icon" ).on( "click", function() {
            $(this).next(".gridmini-nav-primary .gridmini-primary-nav-menu").slideToggle();
        });

        $(window).on( "resize", function() {
            if(window.innerWidth > 1112) {
                $(".gridmini-nav-primary .gridmini-primary-nav-menu, nav .sub-menu, nav .children").removeAttr("style");
                $(".gridmini-primary-responsive-menu > li").removeClass("gridmini-primary-menu-open");
            }
        });

        $( ".gridmini-primary-responsive-menu > li" ).on( "click", function(event) {
            if (event.target !== this)
            return;
            $(this).find(".sub-menu:first").toggleClass('gridmini-submenu-toggle').parent().toggleClass("gridmini-primary-menu-open");
            $(this).find(".children:first").toggleClass('gridmini-submenu-toggle').parent().toggleClass("gridmini-primary-menu-open");
        });

        $( "div.gridmini-primary-responsive-menu > ul > li" ).on( "click", function(event) {
            if (event.target !== this)
                return;
            $(this).find("ul:first").toggleClass('gridmini-submenu-toggle').parent().toggleClass("gridmini-primary-menu-open");
        });

    }

    if($(".gridmini-header-social-icon-search").length){
        $(".gridmini-header-social-icon-search").on('click', function (e) {
            e.preventDefault();
            //document.getElementById("gridmini-search-overlay-wrap").style.display = "block";
            $("#gridmini-search-overlay-wrap").fadeIn();
            const gridmini_focusableelements = 'button, [href], input';
            const gridmini_search_modal = document.querySelector('#gridmini-search-overlay-wrap');
            const gridmini_firstfocusableelement = gridmini_search_modal.querySelectorAll(gridmini_focusableelements)[0];
            const gridmini_focusablecontent = gridmini_search_modal.querySelectorAll(gridmini_focusableelements);
            const gridmini_lastfocusableelement = gridmini_focusablecontent[gridmini_focusablecontent.length - 1];
            document.addEventListener('keydown', function(e) {
              let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
              if (!isTabPressed) {
                return;
              }
              if (e.shiftKey) {
                if (document.activeElement === gridmini_firstfocusableelement) {
                  gridmini_lastfocusableelement.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === gridmini_lastfocusableelement) {
                  gridmini_firstfocusableelement.focus();
                  e.preventDefault();
                }
              }
            });
            gridmini_firstfocusableelement.focus();
        });
    }

    if($(".gridmini-search-closebtn").length){
        $(".gridmini-search-closebtn").on('click', function (e) {
            e.preventDefault();
            //document.getElementById("gridmini-search-overlay-wrap").style.display = "none";
            $("#gridmini-search-overlay-wrap").fadeOut();
        });
    }

    if(gridmini_ajax_object.fitvids_active){
        $(".entry-content, .widget").fitVids();
    }

    if(gridmini_ajax_object.backtotop_active){
        if($(".gridmini-scroll-top").length){
            var gridmini_scroll_button = $( '.gridmini-scroll-top' );
            gridmini_scroll_button.hide();

            $( window ).on( "scroll", function() {
                if ( $( window ).scrollTop() < 20 ) {
                    $( '.gridmini-scroll-top' ).fadeOut();
                } else {
                    $( '.gridmini-scroll-top' ).fadeIn();
                }
            } );

            gridmini_scroll_button.on( "click", function() {
                $( "html, body" ).animate( { scrollTop: 0 }, 300 );
                return false;
            } );
        }
    }

    // grab the initial top offset of the navigation 
    var gridministickyheadertop = $('#gridmini-header-end').offset().top;
    
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var gridministickyheader = function(){
        var gridminiscrolltop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative

        if(window.innerWidth > 1112) {
            if (gridminiscrolltop > gridministickyheadertop) {
                $('.gridmini-site-header').addClass('gridmini-fixed');
            } else {
                $('.gridmini-site-header').removeClass('gridmini-fixed');
            }
        }
    };

    gridministickyheader();
    // and run it again every time you scroll
    $(window).on( "scroll", function() {
        gridministickyheader();
    });

    if(gridmini_ajax_object.sticky_sidebar_active){
        $('.gridmini-main-wrapper, .gridmini-sidebar-one-wrapper').theiaStickySidebar({
            containerSelector: ".gridmini-content-wrapper",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            minWidth: 960,
        });

        $(window).on( "resize", function() {
            $('.gridmini-main-wrapper, .gridmini-sidebar-one-wrapper').theiaStickySidebar({
                containerSelector: ".gridmini-content-wrapper",
                additionalMarginTop: 0,
                additionalMarginBottom: 0,
                minWidth: 960,
            });
        });
    }

});