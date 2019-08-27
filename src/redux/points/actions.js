import { Points } from "../actions-types";

export const request = () => ({
  type: Points.REQUEST
})

export const load = (payload) => ({
  type: Points.LOAD,
  payload
})

export const loadPoints = () => dispatch => {
  dispatch(request())
  fetch('/api/points')
    .then(resp => resp.json())
    .then(resp => dispatch(load(resp)))
}
