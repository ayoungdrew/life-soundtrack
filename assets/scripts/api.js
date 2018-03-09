const store = require('./store')
const config = require('./config')

const signUp = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) { // this is the POST verb
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/change-password',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getSongs = function () { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPhases = function () { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/phases',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createPhase = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/phases',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deletePhase = function (dataId) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/phases/' + dataId,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createSong = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/songs',
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
    url: config.apiOrigin + '/songs',
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
    url: config.apiOrigin + '/favorite_songs',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createFavoriteSong = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/favorite_songs',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + '/sign-out',
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  getSongs,
  createSong,
  getFavoriteSongs,
  createFavoriteSong,
  createSongGetSongs,
  getPhases,
  createPhase,
  deletePhase,
  signOut
}
