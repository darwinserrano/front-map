import { Points } from "../actions-types";

const initialState = {
  isFetching: false,
  items: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case Points.REQUEST:
      return { ...state, isFetching: true }

    case Points.LOAD:
      return {
        ...state,
        isFetching: false,
        items: payload
      }

    default:
      return state
  }
}
