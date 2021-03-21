import actionTypes from "./actionTypes";


export const loadFavourites = (favourites) => {
    return ({
        type: actionTypes.LOAD_FAVOURITES,
        payload: favourites
    });
}