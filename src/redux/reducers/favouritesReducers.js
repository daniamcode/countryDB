import actionTypes from '../actions/actionTypes';

const favouritesReducers = (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_FAVOURITES:
        return {
          ...state,
          favourites: action.payload
        };
      default:
        return state;
    }
  }
  
  export default favouritesReducers