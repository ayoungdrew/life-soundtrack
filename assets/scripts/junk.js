const addHandlers = () => {
  // $('#create-favorite-song').on('submit', function (event) {
  //   event.preventDefault()
  //   const data = getFormFields(this)
  //   const newSongData = {song: {name: data.favorite_song.name, artist: data.favorite_song.artist}}
  //   api.createSongGetSongs(newSongData)
  //         .then(ui.getSongsSuccess)
  //         .then(data.favorite_song.user_id = store.user.id)
  //         .then(function () {
  //           for (let i = 0; i < store.songs.length; i++) {
  //             if ((data.favorite_song.name === store.songs[i].name) && (data.favorite_song.artist === store.songs[i].artist)) {
  //               data.favorite_song.song_id = store.songs[i].id
  //             }
  //           }
  //           console.log('plz work', data)
  //           api.createFavoriteSong(data)
  //             .then(ui.createFavoriteSongSuccess)
  //             .catch(ui.createFavoriteSongFailure)
  //         })
  //
  //
  //     .catch(
  //       api.getSongs()
  //         .then(ui.getSongsSuccess)
  //         .then(data.favorite_song.user_id = store.user.id)
  //         .then(function () {
  //           for (let i = 0; i < store.songs.length; i++) {
  //             if ((data.favorite_song.name === store.songs[i].name) && (data.favorite_song.artist === store.songs[i].artist)) {
  //               data.favorite_song.song_id = store.songs[i].id
  //             }
  //           }
  //         })
  //         .then(function () {
  //           console.log('plz work', data)
  //           api.createFavoriteSong(data)
  //             .then(ui.createFavoriteSongSuccess)
  //             .catch(ui.createFavoriteSongFailure)
  //         })
  //     )
  // }
  // )

}
module.exports = {
  addHandlers
}
