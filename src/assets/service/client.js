import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_SERVER_CONNECTION,
    withCredentials: true
});

export default client;