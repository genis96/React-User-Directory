import axios from "axios";
const url = 'https://randomuser.me/api/?results=100';

//api call
export default {
    GetApi: function () {
        return axios.get(url)
    }
}