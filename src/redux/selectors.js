export const getFavorites = store => {
    return store.favorites || {};
};

export const getAuth = store => {
    return store.auth || null;
};

export const isFavorite = (store, id) => {
    const favs = getFavorites(store);
    return Object.keys(favs).some(key => key === id);
};

export const isLoggedIn = (store) => {
    return getAuth(store) != null;
};