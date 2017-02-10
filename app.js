var Song = Backbone.Model.extend({
    defaults: {
        listeners: 0
    }
});
var Playlist = Backbone.Collection.extend({
    model: Song
});

var SongView = Backbone.View.extend({
    tagName: 'li',
    initialize: function () {
        this.render();
        this.model.on('change', this.render, this);
    },
    events:{
        'click button.playButton': 'onclickPlay'
    },
    onclickPlay: function(){
        console.log('Click!');
    },
    render: function () {
        this.$el.html(this.model.get('title') + " <button class='playButton'>Play</button><span> Listeners: "+ this.model.get('listeners')+ "</span>");
        return this;
    }
});
var SongsView = Backbone.View.extend({
    initialize: function () {
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
var songs = new Playlist([
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
var listView = new SongsView({
    el: '#songs',
    model: songs
});



