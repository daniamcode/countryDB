import favouritesReducers from '../favouritesReducers';
import { initialState } from '../../configureStore';
import actionTypes from '../../actions/actionTypes';

describe('Favourites reducer', () => {
  it('should handle no initial state and no action', () => {
    expect(favouritesReducers()).toEqual({favourites: []});
  });

  it('should handle initial state and no action', () => {
    expect(favouritesReducers(initialState.favouritesReducer)).toEqual({ favourites: [] });
  });

  

  it('should handle ADD_FAVOURITE', () => {
    let initialState = {favouritesReducer: {favourites: [{character: {id: 1}}, {character: {id: 2}}]}}
    let result = {favourites: [{character: {id: 1}}, {character: {id: 2}}, {character: {id: 3}}]}
    
    expect(
      favouritesReducers(
        {
          ...initialState.favouritesReducer,
        },
        {
          type: actionTypes.ADD_FAVOURITE,
          payload: {character: {id: 3}}
        },
      ),
    ).toEqual(
      result
    );
  })

  it('should handle DELETE_FAVOURITE', () => {
    let initialState = {favouritesReducer: {favourites: [{character: {id: 1}}, {character: {id: 2}}]}}
    let result = {favourites: [{character: {id: 1}}]}
    
    expect(
      favouritesReducers(
        {
          ...initialState.favouritesReducer,
        },
        {
          type: actionTypes.DELETE_FAVOURITE,
          payload: '2'
        },
      ),
    ).toEqual(
      result
    );
  })

  

it('should handle default', () => {
    expect(
      favouritesReducers(
        {
          ...initialState.favouritesReducer,
        }
      ),
    ).toEqual({
      ...initialState.favouritesReducer
    });
  })

})