var config = {
    baseUrl: '{{app.request.basePath}}/',
    paths: {
        // libs
        jquery:             'components/jquery/jquery',
        jquery_ui_sortable: 'components/jquery-ui/ui/minified/jquery.ui.sortable.min',
        jquery_ui_core:     'components/jquery-ui/ui/minified/jquery.ui.core.min',
        jquery_ui_mouse:    'components/jquery-ui/ui/minified/jquery.ui.mouse.min',
        jquery_ui_widget:   'components/jquery-ui/ui/minified/jquery.ui.widget.min',
        bootstrap:          'js/bootstrap',
        fosjsrouting:       'bundles/fosjsrouting/js/router',
        sf_routes:          '{{ path('fos_js_routing_js', {"callback": "fos.Router.setData"}) }}',
        // meth specific
        meth_left_menu:     'bundles/canaltpmeth/js/left_menu',
        meth_layout:        'bundles/canaltpmeth/js/layout',
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        jquery_ui_core: {
            deps: ['jquery'],
            exports: "jQuery"
        },
        jquery_ui_mouse: {
            deps: ['jquery', 'jquery_ui_widget'],
            exports: "jQuery"
        },
        jquery_ui_widget: {
            deps: ['jquery'],
            exports: "jQuery"
        },
        jquery_ui_sortable: {
            deps: ['jquery', 'jquery_ui_core','jquery_ui_mouse','jquery_ui_widget'],
            exports: "jQuery"
        }
    },
    deps: ["jquery", "bootstrap", "fosjsrouting", "sf_routes"],
};

if (typeof require !== "undefined" && require.config) {
    require.config(components);
} else {
    var require = config;
}