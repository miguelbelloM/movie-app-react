import axios from "axios";

const base = 'https://api.themoviedb.org/3/';
const header = {
    Authorization: localStorage.getItem("Authorization") || "Token" //GET TOKENN FROM LOCAL NOT IS USING
}

export default axios.create({
    baseURL: base,
    headers: header,
})