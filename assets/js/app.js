define([
    'underscore',
    'backbone',
    'collections/Songs',
    'models/Song',
    'views/SongsView'], function (_, Backbone, Songs, Song, SongsView) {

        var songs = new Songs([
            new Song({
                title: 'A stairway to heaven',
            }),
            new Song({
                title: 'Knocking heaven door'
            }),
            new Song({
                title: 'To be with you'
            }),
        ]);

        function initialize() {
            var listView = new SongsView({
                el: '#songs',
                model: songs
            });
        }

        return {
            initialize: initialize
        }

    });


