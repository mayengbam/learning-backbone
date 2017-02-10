define([
    'underscore',
    'backbone',
    'models/Song'], function (_, Backbone, Song) {
        var Songs = Backbone.Collection.extend({
            model: Song
        });
        return Songs;
    });