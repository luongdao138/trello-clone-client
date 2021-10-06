import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/api/v1'
      : 'https://luong-trello-clone.herokuapp.com/api/v1',
});

axiosInstance.interceptors.request.use(function (req) {
  const trello_token = localStorage.getItem('trello_token');
  if (trello_token) {
    req.headers.authorization = `Bearer ${trello_token}`;
    return req;
  }

  return req;
});

export default axiosInstance;
