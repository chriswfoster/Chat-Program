import React from 'react'
import {Redirect} from 'react-router-dom'
import axios from "axios"

const REQ_REGISTER = "REQ_REGISTER"
const REQ_LOGIN = "REQ_LOGIN"
const REQ_GUEST = "REQ_GUEST"
const REQ_KEY = "REQ_KEY"

const initialState = {
  user: {},
  productKey: {},
  redirect: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQ_REGISTER + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_REGISTER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload,
        redirect: <Redirect to="/chat" />
      })
    case REQ_LOGIN + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_LOGIN + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload,
        redirect: <Redirect to="/chat" />
      })
    case REQ_GUEST + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_GUEST + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })
      case REQ_KEY + "_PENDING":
        return Object.assign({}, state, {})
    default:
      return state
  }
}

export function register(username, password, image_url) {
  return {
    type: REQ_REGISTER,
    payload: axios
      .post("/api/register", {
        username,
        password,
        image_url
      })
      .then(response => {
        if (response.data.code) {
          alert(
            `Error: ${response.data.code}. This username may be taken already!`
          )
        } else {
          return response.data
        }
      })
  }
}

export function login(username, password) {
  return {
    type: REQ_LOGIN,
    payload: axios
      .get(`/api/login/?username=${username}&password=${password}`)
      .then(response => {
        if (response.data === "BADPW") {
          alert("I believe this is a bad password")
        } else if (response.data === "UNKNOWNUSER") {
          alert("We're unable to locate the user in the database")
        }
        {
          return response.data
        }
      })
  }
}

export function guestSignIn(username) {
  return {
    type: REQ_GUEST,
    payload: axios
      .post("/api/guestName?name=" + username)
      .then(response => response.data)
  }
}

export function getProductKey(){
    return {
        type: REQ_KEY,
        payload: axios.get('/api/getkey')
        .then(response => response.data)
    }
}