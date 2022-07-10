import axios from "axios";

const api = axios.create({
    baseURL: "mongodb://localhost:27017"
});

export default api;