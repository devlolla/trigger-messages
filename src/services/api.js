import axios from 'axios';

const api = axios.create({
  baseURL: 'https://whispering-anchorage-62933.herokuapp.com'
})

export default api;