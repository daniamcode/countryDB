import actionTypes from "./actionTypes";


export const addFavourite = (character) => {
    return ({
        type: actionTypes.ADD_FAVOURITE,
        payload: {character}
    });
}

export const deleteFavourite = (id) => {
    return ({
        type: actionTypes.DELETE_FAVOURITE,
        payload: id
    });
}
