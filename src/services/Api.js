import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers:{Authorization:'Basic base64encode(lekkinhah:f6fc87ef0225391d539baeb413fee39fc8afd842)'}
});

export default api;