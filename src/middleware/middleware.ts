import axios from "axios";

const base = 'https://api.themoviedb.org/3/';
const header = {
    Authorization: localStorage.getItem("Authorization") || "Token"
}

export default axios.create({
    baseURL: base,
    headers: header,
})