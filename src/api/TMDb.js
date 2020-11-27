import axios from "axios";

const request = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY
    }
});

const tmdb = () => {

    return {
        trendOfTheDay(){
            return request.get('/trending/movie/day');
        }
    };

};

export default tmdb();

const imgUrl = (path, size) => {
    return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export {imgUrl};