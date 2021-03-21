import actionTypes from '../actions/actionTypes';

const favouritesReducers = (state = {favourites:[]}, action = {}) => {
  console.log(state)
    switch (action.type) {
        case actionTypes.ADD_FAVOURITE:
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        };
        case actionTypes.DELETE_FAVOURITE:
        return {
          ...state,
          favourites: state.favourites.filter(x => !action.payload.includes(x.character.id))
        };
      default:
        return state;
    }
  }
  
  export default favouritesReducers