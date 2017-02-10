define([
    'jquery',
    'underscore',
    'backbone',
    'views/SongView'], function ($, _, Backbone, SongView) {
        var SongsView = Backbone.View.extend({
            initialize: function () {
                this.render();
                this.model.on('add', this.addSong, this);
                this.model.on('remove', this.removeSong, this);
            },
            addSong: function (song) {
                var songView = new SongView({
                    model: song
                });
                this.$el.append(songView.render().$el);
            },
            removeSong: function (song) {
                this.$el.empty();
                this.render();
            },
            render: function () {
                var self = this;
                this.model.each(function (song) {
                    var songView = new SongView({
                        model: song
                    });
                    self.$el.append(songView.render().$el);
                });
            }
        });
        return SongsView;
    });