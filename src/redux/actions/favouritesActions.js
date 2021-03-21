import actionTypes from "./actionTypes";


export const addFavourite = (character) => {
    return ({
        type: actionTypes.ADD_FAVOURITE,
        payload: {character}
    });
}