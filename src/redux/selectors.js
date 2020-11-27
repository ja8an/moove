export const getFavorites = store => {
    console.log('getFavorites', store)
    return store.favorites || {};
};

export const isFavorite = (store, id) => {
    const favs = getFavorites(store);
    return Object.keys(favs).some(key => key === id);
};