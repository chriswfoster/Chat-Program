import axios from "axios"

const REQ_REGISTER = "REQ_REGISTER"
const REQ_LOGIN = "REQ_LOGIN"
const REQ_GUEST = "REQ_GUEST"

const initialState = {
  user: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQ_REGISTER + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_REGISTER + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })
    case REQ_LOGIN + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_LOGIN + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })
    case REQ_GUEST + "_PENDING": //pending tag is applied by redux promise middleware
      return Object.assign({}, state, { isLoading: true })
    case REQ_GUEST + "_FULFILLED":
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      })
    default:
      return state
  }
}

export function register(username, password) {
  return {
    type: REQ_REGISTER,
    payload: axios
      .post("/api/register", {
        username,
        password
      })
      .then(response => {
        response.data.code
          ? alert("This username may be taken already!")
          : response.data
      })
  }
}

export function login(username, password) {
  return {
    type: REQ_LOGIN,
    payload: axios.get(`/api/login/?username=${username}&password=${password}`)
    .then(response => response.data)
  }
}

export function guestSignIn(username) {
  return {
    type: REQ_GUEST,
    payload: axios
      .post("/api/guestName?name=" + username)
      .then(response => (response.data))
  }
}
