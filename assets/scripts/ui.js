const store = require('./store')
const showPhasesTemplate = require('./templates/phases-listing.handlebars')
const showPhaseTemplate = require('./templates/phase-listing.handlebars')

const signUpSuccess = function (data) {
  $('#sign-up-modal-message').html('Signed up succesfully').addClass('successMessage')
  $('#signUpForms, #signUpSubmit, #register-button').css({
    'display': 'none'
  })
  // $('#signUpModal').modal('toggle')
  // console.log(data)
}

const signUpFailure = function (error) {
  $('#sign-up-modal-message').html('Sign up failure. Try again plz').addClass('failureMessage')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#greeting-text, #sign-out, #get-songs, #get-all-phases, #phases-content, #get-phase, #create-phase, #create-song, #create-favorite-song, #profile-button, #phases-content')
    .css({
      'display': 'block'
    })
  $('#sign-in, #sign-up-button, .sign-up, .intro-header').css({
    'display': 'none'
  })
  store.user = data.user
  // console.log('SUCCESSFUL sign in')
  // console.log('AJAX data returned:', data)
  // console.log(data.user)
}

const signInFailure = function (error) {
  // console.log('FAILED to sign in')
  $('#alert-modal').modal('toggle')
  $('#alert-modal-message').text(`Failed to log in.`)
  console.error(error)
}

const changePasswordSuccess = function (data) {
  $('#change-password-message').html('Successfully changed password').attr('class', 'successMessage')
  // console.log(data)
  // console.log(store.user)
}

const changePasswordFailure = function (error) {
  $('#change-password-message').html('Failed to change password. Try again plz').attr('class', 'failureMessage')
  console.error(error)
}

const getSongsSuccess = function (data) {
  // console.log('songs are...', data)
  store.songs = data.songs
}

const getSongsFailure = function (error) {
  console.error(error)
}

const fillEmptyForms = function () {
  $('#alert-modal').modal('toggle')
  $('#alert-modal-message').text(`Fill out the form!`)
}

const createSongSuccess = function (data) {
  // console.log(data)
  // console.log('Song ID is', data.song.id)
  $('#alert-modal').modal('toggle')
  $('#alert-modal-message').text(`Success! "${data.song.name}" by ${data.song.artist} added to database.`)
  $('#create-song').trigger('reset')
}

const createSongFailure = function (error) {
  console.error(error)
  $('#alert-modal').modal('toggle')
  $('#alert-modal-message').text(`Fail!`)
  $('#create-song').trigger('reset')
}

const getPhasesSuccess = function (data) {
  // console.log('Phases are...', data)
  store.phases = data.phases
  // console.log(data)
  if (data.phases.length === 0) {
    $('#alert-modal').modal('toggle')
    $('#alert-modal-message').text(`No phases defined yet!`)
  } else {
    const showPhasesHtml = showPhasesTemplate({ phases: store.phases })
    // we can use `.html` instead of `.append` to get around the need for a
    // clear books button
    $('.phases-content').html(showPhasesHtml)
  }
}

const getPhaseSuccess = function (data) {
  // console.log('Phase is...', data)
  store.favorite_songs = data.favorite_songs
  const showPhaseHtml = showPhaseTemplate({ favorite_songs: store.favorite_songs })
  // we can use `.html` instead of `.append` to get around the need for a
  // clear books button
  // console.log(store.favorite_songs.length)
  if (store.favorite_songs.length === 0) {
    $('#alert-modal').modal('toggle')
    $('#alert-modal-message').text(`No favorite songs from this phase of your life were found. :(`)
  } else {
    // console.log('There\'s stuff here yay')
    $('.phases-content').html(showPhaseHtml)
  }
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
const createPhaseSuccess = (data) => {
  $('#alert-modal').modal('toggle')
  $('#alert-modal-message').text(`Created new phase: ${data.phase.name} (${data.phase.start_date} - ${data.phase.end_date})`)
  $('#create-phase').trigger('reset')
}

const createPhaseFailure = () => {
  $('#alert-modal').modal('toggle')
  $('#alert-modal-message').text(`Failed to create new phase :(`)
  $('#create-phase').trigger('reset')
}

const editPhaseSuccess = () => {
  $('.edit-phase-modal-message').html('Edits made! :D').addClass('successMessage')
  // console.log('Edited phase!')
}

const editPhaseFailure = () => {
  // console.log('Edited Phase!')
}

const clearPhases = () => {
  $('.phases-content').empty()
}

const getPhasesFailure = function (error) {
  console.error(error)
}

const getFavoriteSongsSuccess = function (data) {
  // console.log('you rock')
}

const getFavoriteSongsFailure = function (error) {
  console.error(error)
}

const createFavoriteSongSuccess = function (data) {
  $('#create-favorite-song').trigger('reset')
  $('#alert-modal').modal('toggle')
  $('#alert-modal-message').text('Your story was added!')
}

const createFavoriteSongFailure = function () {
  $('#alert-modal').modal('toggle')
  $('#alert-modal-message').text('Failed :( Add the song to the database first!')
}

const editFavoriteSongSuccess = () => {
  $('.edit-favorite-song-modal-message').html('Edits made! :D').addClass('successMessage')
  // console.log('Edited favorite song!')
}

const editFavoriteSongFailure = () => {
  // console.log('Edited favorite song!')
}

const signOutSuccess = function () {
  $('#sign-in, #sign-up-button, .sign-up, .intro-header')
    .css({
      'display': 'block'
    })
  $('#get-all-phases, #create-phase, #create-song, #create-favorite-song, #profile-button, #sign-out').css({
    'display': 'none'
  })
  $('#phases-content').empty()
  $('#create-favorite-song').trigger('reset')
  $('#create-song').trigger('reset')
  $('#create-phase').trigger('reset')
  $('#sign-in').trigger('reset')
  store.user = {}
  // console.log('SUCCESSFUL sign out')
}

const signOutFailure = function (error) {
  // console.log('FAILED to sign out')
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
  fillEmptyForms,
  createSongSuccess,
  createSongFailure,
  getFavoriteSongsSuccess,
  getFavoriteSongsFailure,
  createFavoriteSongSuccess,
  createFavoriteSongFailure,
  editFavoriteSongSuccess,
  editFavoriteSongFailure,
  getPhasesSuccess,
  getPhasesFailure,
  getPhaseSuccess,
  createPhaseSuccess,
  createPhaseFailure,
  editPhaseSuccess,
  editPhaseFailure,
  clearPhases
}
