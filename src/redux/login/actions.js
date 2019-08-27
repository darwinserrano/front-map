import { Login } from "../actions-types";

const loginAction = (name) => ({
  type: Login.LOGIN,
  payload: {
    name: name
  }
})

const logoutAction = () => ({
  type: Login.LOGOUT
})

export const singIn = () => dispatch => {
  api().then((resp) => {
    dispatch(loginAction("Nombre de usuario"))
    return resp
  }).catch(() => {
    dispatch(logoutAction())
  })
}

export const singOut = () => dispatch => dispatch(logoutAction())


const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok")
    }, 1000);
  })
}