import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers:{Authorization:'Basic base64encode(username:token)'}
});

export default api;