import rootReducer from '../rootReducer';
import {
    createStore
} from "redux";

describe('rootReducer', () => {
    it('initial situation', () => {
        let store = createStore(rootReducer)

        expect(store.getState().favouritesReducer).toEqual({favourites: []})
    })
})