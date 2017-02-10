var Song = Backbone.Model.extend();
var Playlist = Backbone.Collection.extend({
    model: Song
});

var SongView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.model.get('title'));
        return this;
    }
});
var SongsView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        var self = this;
        this.model.each(function(song){
            var songView = new SongView({
                model: song
            });
            self.$el.append(songView.render().$el);
        });
    }
});


var songs = new Playlist([
    new Song({
        title: 'A stairway to heaven'
    }),
    new Song({
        title: 'Knocking heaven door'
    }),
    new Song({
        title: 'To be with you'
    }),
]);
var listView = new SongsView({
    el: '#container',
    model: songs
});



