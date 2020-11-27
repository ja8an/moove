import axios from "axios";

const request = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params: {
        apiKey: process.env.REACT_APP_API_KEY
    }
});

const omdb = () => {

    return {
        search(s) {
            return request.get('/', {
                params: { s }
            });
        },
        byTitle(title) {
            return "http://www.omdbapi.com/?t=a";
        },
        byId(id) {
            return id;
        }
    };

};

export default omdb();