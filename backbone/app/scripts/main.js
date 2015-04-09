/*global App, $*/


window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var hoge = new App.Models.Hoge();
        hoge.showMessage();
    }
};

$(document).ready(function () {
    'use strict';
    App.init();
});
