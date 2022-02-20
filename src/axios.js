import axios from "axios";

//this help create final url without having to repeatedly write the baseURL
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;