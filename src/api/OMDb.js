import axios from "axios";

const request = axios.create({
    baseURL: 'https://www.omdbapi.com/',
    params: {
        apiKey: process.env.REACT_APP_OMDB_API_KEY,
        type: 'movie'
    }
});

const omdb = () => {

    return {
        search(s, page = 1) {
            return request.get('/', {
                params: { s, page }
            });
        },
        byTitle(title) {
            return "http://www.omdbapi.com/?t=a";
        },
        byId(i) {
            return request.get('/', {
                params: { i, plot: 'full' }
            });
        }
    };

};

export default omdb();