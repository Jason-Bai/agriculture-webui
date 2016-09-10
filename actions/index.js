import { api } from '../config'
// actions.js

// There are three possible states for our login
// process and we need actions for each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

// Calls the API to get a token and
// dispatches actions alone the way
export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body:`name=${creds.username}&password=${creds.password}`
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(`${api}/authenticate`, config)
      .then(response =>
        response.json()
          .then(user => ({ user }))
          .then(({ user }) => {
            if (!user.ok) {
              // If there was a problem, we want to
              // dispatch the error condition
              dispatch(loginError(user.message))
              return Promise.reject(user)
            } else {
              // If login was successful, set the token in local storage
              localStorage.setItem('id_token', user.token)
              dispatch(receiveLogin(user))
            }
          })
      ).catch(err => console.log("Error: ", err))
  }
}


// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'


function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}


function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}

// The middleware to call the API for quotes
import { CALL_API } from '../middleware/api'

export const USERS_REQUEST = 'QUOTE_REQUEST'
export const USERS_SUCCESS = 'QUOTE_SUCCESS'
export const USERS_FAILURE = 'QUOTE_FAILURE'



function requestUsers(users = [], total_num = 0) {
  return {
    type: USERS_REQUEST,
    isFetching: true,
    total_num: total_num,
    users
  }
}

function receiveUsers(users, total_num) {
  return {
    type: USERS_SUCCESS,
    isFetching: false,
    total_num: total_num,
    users
  }
}

function errorUsers(message) {
  return {
    type: USERS_FAILURE,
    isFetching: false,
    total_num: 0,
    message
  }
}


export function fetchUsers() {
  let config = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('id_token')}
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestUsers())

    return fetch(`${api}/users`, config)
      .then(response =>
        response.json()
          .then(users => ({ result }))
          .then(({ result }) => {
            if (!result.ok) {
              // If there was a problem, we want to
              // dispatch the error condition
              dispatch(errorUsers(result.message))
              return Promise.reject(result)
            } else {
              dispatch(receiveUsers(result.users, result.total_num))
            }
          })
      ).catch(err => console.log("Error: ", err))
  }
}