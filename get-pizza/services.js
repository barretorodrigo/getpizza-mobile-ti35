import axios from 'axios';

const api = axios.create({
    baseURL: 'https://getpizza-barreto-ti35.herokuapp.com'
});

export default api;