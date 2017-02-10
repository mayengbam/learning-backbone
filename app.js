var Song = Backbone.Model.extend();
var SongView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.model.get('title'));
        return this;
    }
});

var song = new Song({
    title: 'Stairway to Heaven'
});
var songView = new SongView({
    el: '#container',
    model: song
});

songView.render();