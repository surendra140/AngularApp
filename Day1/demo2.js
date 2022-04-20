var Song = /** @class */ (function () {
    function Song(song_title, song_singer, album_name) {
        this.song_title = song_title;
        this.song_singer = song_singer;
        this.album_name = album_name;
    }
    Song.prototype.disp = function () {
        for (var i = 0; i < songsArray.length; i++) {
            console.log(songsArray[i]);
        }
    };
    return Song;
}());
var songsArray = ["Tere nam", "Arijit Singh", "Tere nam"];
console.log(songsArray);
for (var i = 0; i < songsArray.length; i++) {
    console.log(songsArray[i]);
}
