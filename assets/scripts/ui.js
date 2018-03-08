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
  store.user = data.user
  console.log('SUCCESSFUL sign in')
  console.log('AJAX data returned:', data)
  console.log(store.user)
}

const signInFailure = function (error) {
  console.log('FAILED to sign in')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  createSongSuccess,
  createSongFailure,
  getFavoriteSongsSuccess,
  getFavoriteSongsFailure
}
