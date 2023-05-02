import axios from 'axios';

const httpFetch = axios.create({
    baseURL: "http://localhost:8080/estudantes"
})

export default httpFetch;
