const store = require('./store')
const showPhasesTemplate = require('./templates/phases-listing.handlebars')
const showPhaseTemplate = require('./templates/phase-listing.handlebars')

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
  $('#greeting-text, #sign-out, #profile-button')
    .css({
      'display': 'block'
    })
  $('#sign-in, #sign-up-button').css({
    'display': 'none'
  })
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

const changePasswordSuccess = function (data) {
  $('#change-password-message').html('Successfully changed password').attr('class', 'successMessage')
  console.log(data)
  console.log(store.user)
}

const changePasswordFailure = function (error) {
  $('#change-password-message').html('Failed to change password. Try again plz').attr('class', 'failureMessage')
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

const getPhasesSuccess = function (data) {
  console.log('Phases are...', data)
  store.phases = data.phases
  console.log(data)
  const showPhasesHtml = showPhasesTemplate({ phases: store.phases })
  // we can use `.html` instead of `.append` to get around the need for a
  // clear books button
  $('.phases-content').html(showPhasesHtml)
}

const getPhaseSuccess = function (data) {
  console.log('Phases are...', data)
  store.favorite_songs = data.favorite_songs
  console.log(data)
  console.log(store.favorite_songs)
  const showPhaseHtml = showPhaseTemplate({ phases: store.favorite_songs })
  // we can use `.html` instead of `.append` to get around the need for a
  // clear books button
  $('.phases-content').html(showPhaseHtml)
}

// const deletePhaseSuccess = function (data) {
//   console.log('Phases are...', data)
//   store.phases = data.phases
//   console.log(data)
//   console.log(store.phases[0])
//   const showPhasesHtml = showPhasesTemplate({ phases: store.phases })
//   // we can use `.html` instead of `.append` to get around the need for a
//   // clear books button
//   $('.phases-content').html(showPhasesHtml)
// }

const clearPhases = () => {
  $('.phases-content').empty()
}

const getPhasesFailure = function (error) {
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

const signOutSuccess = function () {
  $('#sign-in, #sign-up-button')
    .css({
      'display': 'block'
    })
  store.user = {}
  console.log('SUCCESSFUL sign out')
}

const signOutFailure = function (error) {
  console.log('FAILED to sign out')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  getSongsSuccess,
  getSongsFailure,
  createSongSuccess,
  createSongFailure,
  getFavoriteSongsSuccess,
  getFavoriteSongsFailure,
  createFavoriteSongSuccess,
  createFavoriteSongFailure,
  getPhasesSuccess,
  getPhasesFailure,
  getPhaseSuccess,
  clearPhases
}
