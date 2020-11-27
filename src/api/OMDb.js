import axios from "./request";
import { randomInt } from "../utils"

const omdb = (() => {

    const output = {
        search(s) {
            return axios.get('/', {
                params: { s }
            });
        },
        random() {
            const t = String.fromCharCode(randomInt(48, 90));
            return axios.get('/', {
                params: { t }
            }).then(response => {
                if (!response.data)
                    return output.random();
                return response.data;
            });
        },
        byTitle(title) {
            return "http://www.omdbapi.com/?t=a";
        },
        get(id) {
            return id;
        }
    };

    return output;

})();

export default omdb;