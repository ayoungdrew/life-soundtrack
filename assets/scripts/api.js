const store = require('./store')
const config = require('./config')

const signUp = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + 'sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + 'sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const getSongs = function () { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + 'songs',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createSong = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + 'songs',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createSongGetSongs = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + 'songs',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data,
    success: getSongs()
  })
}

const getFavoriteSongs = function () {
  return $.ajax({
    url: config.apiOrigin + 'favorite_songs',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createFavoriteSong = function (data) { // this is the POST verb
  // console.log(data)
  // console.log(data.favorite_song.user_id)
  // console.log(data.favorite_song.song_id)
  // console.log(data.favorite_song.story)
  // console.log(data.favorite_song.story_date)
  return $.ajax({
    url: config.apiOrigin + 'favorite_songs',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
    // favorite_song: {
    //   user_id: data.favorite_song.user_id,
    //   song_id: data.favorite_song.song_id,
    //   story: data.favorite_song.story,
    //   story_date: data.favorite_song.story_date
    // }
  })
}

module.exports = {
  signUp,
  signIn,
  getSongs,
  createSong,
  getFavoriteSongs,
  createFavoriteSong,
  createSongGetSongs
}
