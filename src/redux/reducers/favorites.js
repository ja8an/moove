import { SET_FAVORITE, UNSET_FAVORITE } from "../actions";

const initialState = localStorage.getItem('favorites') ?
    JSON.parse(localStorage.getItem('favorites')) : {

    };

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE: {
            const { movie } = action.payload;
            const _temp = {
                ...state,
                [movie.imdbID]: movie
            };
            localStorage.setItem('favorites', JSON.stringify(_temp));
            return _temp;
        }
        case UNSET_FAVORITE:
            const { id } = action.payload;
            delete state[id];
            localStorage.setItem('favorites', JSON.stringify(state));
            return { ...state };
        default: {
            return state;
        }
    }
};

export default favorites;