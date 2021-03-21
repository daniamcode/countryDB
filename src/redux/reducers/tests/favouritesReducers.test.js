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
    initialState.favouritesReducer.favourites = []
    let result = [{id: 8}]
    
    expect(
      favouritesReducers(
        {
          ...initialState.favouritesReducer,
        },
        {
          type: actionTypes.ADD_FAVOURITE,
          payload: {id: 8}
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