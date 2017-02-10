define([
    'jquery',
    'underscore',
    'backbone'], function ($, _, Backbone) {

        var SongView = Backbone.View.extend({
            tagName: 'li',
            initialize: function () {
                this.render();
                this.model.on('change', this.render, this);
            },
            events: {
                'click button.playButton': 'onclickPlay'
            },
            onclickPlay: function () {
                console.log('Click!');
            },
            render: function () {
                this.$el.html(this.model.get('title') + " <button class='playButton'>Play</button><span> Listeners: " + this.model.get('listeners') + "</span>");
                return this;
            }
        });
        return SongView;
    });