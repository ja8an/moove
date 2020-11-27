// Favorites
export const SET_FAVORITE = "SET_FAVORITE";
export const UNSET_FAVORITE = "UNSET_FAVORITE";
// Auth
export const SET_AUTH = "SET_AUTH";
export const UNSET_AUTH = "UNSET_AUTH";

export const setFavorite = movie => ({
    type: SET_FAVORITE,
    payload: { movie }
});

export const unsetFavorite = id => ({
    type: UNSET_FAVORITE,
    payload: { id }
});


export const setAuth = id => ({
    type: SET_AUTH,
    payload: { id }
});

export const unsetAuth = () => ({
    type: UNSET_AUTH,
});