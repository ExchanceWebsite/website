import axios from 'axios';

const httpFetch = axios.create({
    baseURL: "https://3.221.247.133/"
})

export default httpFetch;
