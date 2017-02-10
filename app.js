var Song = Backbone.Model.extend();
var SongView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html("Hello, world!!!");
        return this;
    }
});

var song = new SongView({
    el: '#container'
});

song.render();