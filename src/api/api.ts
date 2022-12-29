import axios from "axios";

export const api = axios.create({
    baseURL: 'https://www.freetogame.com/api/',
    headers: {
        "Content-Type": "application/json",
    },
});