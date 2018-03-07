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
    console.log('I want to sign in plz')
    // console.log(data)
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
    $(this).closest('form').find('input[type=password], textarea').val('')
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

}

module.exports = {
  addHandlers
}
