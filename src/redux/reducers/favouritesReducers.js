import actionTypes from '../actions/actionTypes';

const favouritesReducers = (state = {favourites:[]}, action = {}) => {
    switch (action.type) {
        case actionTypes.ADD_FAVOURITE:
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        };
      default:
        return state;
    }
  }
  
  export default favouritesReducers