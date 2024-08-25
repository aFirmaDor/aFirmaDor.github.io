/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
    var gridmini_secondary_container, gridmini_secondary_button, gridmini_secondary_menu, gridmini_secondary_links, gridmini_secondary_i, gridmini_secondary_len;

    gridmini_secondary_container = document.getElementById( 'gridmini-secondary-navigation' );
    if ( ! gridmini_secondary_container ) {
        return;
    }

    gridmini_secondary_button = gridmini_secondary_container.getElementsByTagName( 'button' )[0];
    if ( 'undefined' === typeof gridmini_secondary_button ) {
        return;
    }

    gridmini_secondary_menu = gridmini_secondary_container.getElementsByTagName( 'ul' )[0];

    // Hide menu toggle button if menu is empty and return early.
    if ( 'undefined' === typeof gridmini_secondary_menu ) {
        gridmini_secondary_button.style.display = 'none';
        return;
    }

    gridmini_secondary_menu.setAttribute( 'aria-expanded', 'false' );
    if ( -1 === gridmini_secondary_menu.className.indexOf( 'nav-menu' ) ) {
        gridmini_secondary_menu.className += ' nav-menu';
    }

    gridmini_secondary_button.onclick = function() {
        if ( -1 !== gridmini_secondary_container.className.indexOf( 'gridmini-toggled' ) ) {
            gridmini_secondary_container.className = gridmini_secondary_container.className.replace( ' gridmini-toggled', '' );
            gridmini_secondary_button.setAttribute( 'aria-expanded', 'false' );
            gridmini_secondary_menu.setAttribute( 'aria-expanded', 'false' );
        } else {
            gridmini_secondary_container.className += ' gridmini-toggled';
            gridmini_secondary_button.setAttribute( 'aria-expanded', 'true' );
            gridmini_secondary_menu.setAttribute( 'aria-expanded', 'true' );
        }
    };

    // Get all the link elements within the menu.
    gridmini_secondary_links    = gridmini_secondary_menu.getElementsByTagName( 'a' );

    // Each time a menu link is focused or blurred, toggle focus.
    for ( gridmini_secondary_i = 0, gridmini_secondary_len = gridmini_secondary_links.length; gridmini_secondary_i < gridmini_secondary_len; gridmini_secondary_i++ ) {
        gridmini_secondary_links[gridmini_secondary_i].addEventListener( 'focus', gridmini_secondary_toggleFocus, true );
        gridmini_secondary_links[gridmini_secondary_i].addEventListener( 'blur', gridmini_secondary_toggleFocus, true );
    }

    /**
     * Sets or removes .focus class on an element.
     */
    function gridmini_secondary_toggleFocus() {
        var self = this;

        // Move up through the ancestors of the current link until we hit .nav-menu.
        while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

            // On li elements toggle the class .focus.
            if ( 'li' === self.tagName.toLowerCase() ) {
                if ( -1 !== self.className.indexOf( 'gridmini-focus' ) ) {
                    self.className = self.className.replace( ' gridmini-focus', '' );
                } else {
                    self.className += ' gridmini-focus';
                }
            }

            self = self.parentElement;
        }
    }

    /**
     * Toggles `focus` class to allow submenu access on tablets.
     */
    ( function( gridmini_secondary_container ) {
        var touchStartFn, gridmini_secondary_i,
            parentLink = gridmini_secondary_container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

        if ( 'ontouchstart' in window ) {
            touchStartFn = function( e ) {
                var menuItem = this.parentNode, gridmini_secondary_i;

                if ( ! menuItem.classList.contains( 'gridmini-focus' ) ) {
                    e.preventDefault();
                    for ( gridmini_secondary_i = 0; gridmini_secondary_i < menuItem.parentNode.children.length; ++gridmini_secondary_i ) {
                        if ( menuItem === menuItem.parentNode.children[gridmini_secondary_i] ) {
                            continue;
                        }
                        menuItem.parentNode.children[gridmini_secondary_i].classList.remove( 'gridmini-focus' );
                    }
                    menuItem.classList.add( 'gridmini-focus' );
                } else {
                    menuItem.classList.remove( 'gridmini-focus' );
                }
            };

            for ( gridmini_secondary_i = 0; gridmini_secondary_i < parentLink.length; ++gridmini_secondary_i ) {
                parentLink[gridmini_secondary_i].addEventListener( 'touchstart', touchStartFn, false );
            }
        }
    }( gridmini_secondary_container ) );
} )();


( function() {
    var gridmini_primary_container, gridmini_primary_button, gridmini_primary_menu, gridmini_primary_links, gridmini_primary_i, gridmini_primary_len;

    gridmini_primary_container = document.getElementById( 'gridmini-primary-navigation' );
    if ( ! gridmini_primary_container ) {
        return;
    }

    gridmini_primary_button = gridmini_primary_container.getElementsByTagName( 'button' )[0];
    if ( 'undefined' === typeof gridmini_primary_button ) {
        return;
    }

    gridmini_primary_menu = gridmini_primary_container.getElementsByTagName( 'ul' )[0];

    // Hide menu toggle button if menu is empty and return early.
    if ( 'undefined' === typeof gridmini_primary_menu ) {
        gridmini_primary_button.style.display = 'none';
        return;
    }

    gridmini_primary_menu.setAttribute( 'aria-expanded', 'false' );
    if ( -1 === gridmini_primary_menu.className.indexOf( 'nav-menu' ) ) {
        gridmini_primary_menu.className += ' nav-menu';
    }

    gridmini_primary_button.onclick = function() {
        if ( -1 !== gridmini_primary_container.className.indexOf( 'gridmini-toggled' ) ) {
            gridmini_primary_container.className = gridmini_primary_container.className.replace( ' gridmini-toggled', '' );
            gridmini_primary_button.setAttribute( 'aria-expanded', 'false' );
            gridmini_primary_menu.setAttribute( 'aria-expanded', 'false' );
        } else {
            gridmini_primary_container.className += ' gridmini-toggled';
            gridmini_primary_button.setAttribute( 'aria-expanded', 'true' );
            gridmini_primary_menu.setAttribute( 'aria-expanded', 'true' );
        }
    };

    // Get all the link elements within the menu.
    gridmini_primary_links    = gridmini_primary_menu.getElementsByTagName( 'a' );

    // Each time a menu link is focused or blurred, toggle focus.
    for ( gridmini_primary_i = 0, gridmini_primary_len = gridmini_primary_links.length; gridmini_primary_i < gridmini_primary_len; gridmini_primary_i++ ) {
        gridmini_primary_links[gridmini_primary_i].addEventListener( 'focus', gridmini_primary_toggleFocus, true );
        gridmini_primary_links[gridmini_primary_i].addEventListener( 'blur', gridmini_primary_toggleFocus, true );
    }

    /**
     * Sets or removes .focus class on an element.
     */
    function gridmini_primary_toggleFocus() {
        var self = this;

        // Move up through the ancestors of the current link until we hit .nav-menu.
        while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

            // On li elements toggle the class .focus.
            if ( 'li' === self.tagName.toLowerCase() ) {
                if ( -1 !== self.className.indexOf( 'gridmini-focus' ) ) {
                    self.className = self.className.replace( ' gridmini-focus', '' );
                } else {
                    self.className += ' gridmini-focus';
                }
            }

            self = self.parentElement;
        }
    }

    /**
     * Toggles `focus` class to allow submenu access on tablets.
     */
    ( function( gridmini_primary_container ) {
        var touchStartFn, gridmini_primary_i,
            parentLink = gridmini_primary_container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

        if ( 'ontouchstart' in window ) {
            touchStartFn = function( e ) {
                var menuItem = this.parentNode, gridmini_primary_i;

                if ( ! menuItem.classList.contains( 'gridmini-focus' ) ) {
                    e.preventDefault();
                    for ( gridmini_primary_i = 0; gridmini_primary_i < menuItem.parentNode.children.length; ++gridmini_primary_i ) {
                        if ( menuItem === menuItem.parentNode.children[gridmini_primary_i] ) {
                            continue;
                        }
                        menuItem.parentNode.children[gridmini_primary_i].classList.remove( 'gridmini-focus' );
                    }
                    menuItem.classList.add( 'gridmini-focus' );
                } else {
                    menuItem.classList.remove( 'gridmini-focus' );
                }
            };

            for ( gridmini_primary_i = 0; gridmini_primary_i < parentLink.length; ++gridmini_primary_i ) {
                parentLink[gridmini_primary_i].addEventListener( 'touchstart', touchStartFn, false );
            }
        }
    }( gridmini_primary_container ) );
} )();