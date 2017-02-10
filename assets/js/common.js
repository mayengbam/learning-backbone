requirejs.config({
    baseUrl: 'assets/js',
    paths: {
        jquery: 'lib/jquery.min',
        underscore: 'lib/lodash',
        backbone: 'lib/backbone-min',
        app: 'app'
    }
});
define(['app'], function (App) {
    App.initialize();
})