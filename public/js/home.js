var home = {

    init: function() {
        home.init_navbar();
        home.init_menu();
        home.init_about();
        home.init_ripple();
    },

    init_navbar: function() {
        var element = $('.mdc-top-app-bar')[0];
        mdc.topAppBar.MDCTopAppBar.attachTo(element);
        var height = $('.mdc-top-app-bar').css('height');
        $('.page-content').css('padding-top', height);
    },

    init_menu: function() {
        var element = $('.mdc-menu')[0];
        var menu = new mdc.menu.MDCMenu(element);
        $('#menu-icon').on('click', function() {
            menu.open = !menu.open;
        });
    },

    init_about: function() {
        $('#about').on('click', function() {
            window.location.href = '/about';
        });
    },

    init_ripple: function() {
        var elements = $('.mdc-list-item');
        for (var i = 0; i < elements.length; i++)
            mdc.ripple.MDCRipple.attachTo(elements[i]);
    }

};


$(document).ready(home.init());
