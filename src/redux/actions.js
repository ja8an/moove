export const SET_FAVORITE = "SET_FAVORITE";
export const UNSET_FAVORITE = "UNSET_FAVORITE";

export const setFavorite = movie => ({
    type: SET_FAVORITE,
    payload: { movie }
});

export const unsetFavorite = id => ({
    type: UNSET_FAVORITE,
    payload: { id }
});
