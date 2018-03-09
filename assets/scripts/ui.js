const store = require('./store')

const signUpSuccess = function (data) {
  $('#sign-up-modal-message').html('Signed up succesfully').addClass('successMessage')
  $('#signUpForms, #signUpSubmit, #register-button').css({
    'display': 'none'
  })
  // $('#signUpModal').modal('toggle')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#sign-up-modal-message').html('Sign up failure. Try again plz').addClass('failureMessage')
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  console.log('SUCCESSFUL sign in')
  console.log('AJAX data returned:', data)
  console.log(data.user)
}

const signInFailure = function (error) {
  console.log('FAILED to sign in')
  console.error(error)
}

const getSongsSuccess = function (data) {
  console.log('songs are...', data)
  store.songs = data.songs
}

const getSongsFailure = function (error) {
  console.error(error)
}
const createSongSuccess = function (data) {
  console.log(data)
  console.log('Song ID is', data.song.id)
}

const createSongFailure = function (error) {
  console.error(error)
}

const getFavoriteSongsSuccess = function (data) {
  console.log('you rock')
}

const getFavoriteSongsFailure = function (error) {
  console.error(error)
}

const createFavoriteSongSuccess = function (data) {
  console.log('you rock')
}

const createFavoriteSongFailure = function (error) {
  console.log('you failed to create favorite song')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  getSongsSuccess,
  getSongsFailure,
  createSongSuccess,
  createSongFailure,
  getFavoriteSongsSuccess,
  getFavoriteSongsFailure,
  createFavoriteSongSuccess,
  createFavoriteSongFailure
}
