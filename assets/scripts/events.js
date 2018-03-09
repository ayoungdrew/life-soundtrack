'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

const addHandlers = () => {
  $('#sign-up').on('click', function (event) {
    event.preventDefault()
    console.log('hello sign me up???')
    const data = getFormFields(this)
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  })

  $('#sign-in').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log(data)
    console.log('I want to sign in plz')
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
    $(this).closest('form').find('input[type=password], textarea').val('')
  })

  $('#get-songs').on('submit', function (event) {
    event.preventDefault()
    console.log('I want to get all songs')
    api.getSongs()
      .then(ui.getSongsSuccess)
      .catch(ui.getSongsFailure)
  })

  $('#create-song').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    console.log('I want to create a song')
    // console.log(data)
    console.log(store.user)
    console.log(data)
    api.createSong(data)
      .then(ui.createSongSuccess)
      .catch(ui.createSongFailure)
  })

  $('#get-favorite-songs').on('submit', function (event) {
    event.preventDefault()
    console.log('I want to get favorite songs')
    api.getFavoriteSongs()
      .then(ui.createSongSuccess)
      .catch(ui.createSongFailure)
  })
  // $('#create-favorite-song').on('submit', function (event) {
  //   event.preventDefault()
  //   const data = getFormFields(this)
  //   const newSongData = {song: {name: data.favorite_song.name, artist: data.favorite_song.artist}}
  //   api.getSongs()
  //     .then(ui.getSongsSuccess)
  //     .catch(ui.getSongsFailure)
  //   api.createSong(newSongData)
  //     .then(api.getSongs())
  //     .then(data.favorite_song.user_id = store.user.id)
  //     .then(function () {
  //       for (let i = 0; i < store.songs.length; i++) {
  //         if ((data.favorite_song.name === store.songs[i].name) && (data.favorite_song.artist === store.songs[i].artist)) {
  //           data.favorite_song.song_id = store.songs[i].id
  //         }
  //       }
  //     })
  //     .then(function () {
  //       console.log('plz work', data)
  //       api.createFavoriteSong(data)
  //         .then(ui.createFavoriteSongSuccess)
  //         .catch(ui.createFavoriteSongFailure)
  //     })
  // })

  //  THIS WORKS
  // $('#create-favorite-song').on('submit', function (event) {
  //   event.preventDefault()
  //   const data = getFormFields(this)
  //   api.getSongs()
  //     .then(ui.getSongsSuccess)
  //     .catch(ui.getSongsFailure)
  //     .then(data.favorite_song.user_id = store.user.id)
  //     .then(function () {
  //       for (let i = 0; i < store.songs.length; i++) {
  //         if ((data.favorite_song.name === store.songs[i].name) && (data.favorite_song.artist === store.songs[i].artist)) {
  //           data.favorite_song.song_id = store.songs[i].id
  //         }
  //       }
  //     })
  //     .then(function () {
  //       console.log('plz work', data)
  //       api.createFavoriteSong(data)
  //         .then(ui.createFavoriteSongSuccess)
  //         .catch(ui.createFavoriteSongFailure)
  //     })
  // })

  $('#create-favorite-song').on('submit', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    const newSongData = {song: {name: data.favorite_song.name, artist: data.favorite_song.artist}}
    api.createSongGetSongs(newSongData)
          .then(ui.getSongsSuccess)
          .then(data.favorite_song.user_id = store.user.id)
          .then(function () {
            for (let i = 0; i < store.songs.length; i++) {
              if ((data.favorite_song.name === store.songs[i].name) && (data.favorite_song.artist === store.songs[i].artist)) {
                data.favorite_song.song_id = store.songs[i].id
              }
            }
            console.log('plz work', data)
            api.createFavoriteSong(data)
              .then(ui.createFavoriteSongSuccess)
              .catch(ui.createFavoriteSongFailure)
          })


      .catch(
        api.getSongs()
          .then(ui.getSongsSuccess)
          .then(data.favorite_song.user_id = store.user.id)
          .then(function () {
            for (let i = 0; i < store.songs.length; i++) {
              if ((data.favorite_song.name === store.songs[i].name) && (data.favorite_song.artist === store.songs[i].artist)) {
                data.favorite_song.song_id = store.songs[i].id
              }
            }
          })
          .then(function () {
            console.log('plz work', data)
            api.createFavoriteSong(data)
              .then(ui.createFavoriteSongSuccess)
              .catch(ui.createFavoriteSongFailure)
          })
      )
  }
  )

    }



module.exports = {
  addHandlers
}
