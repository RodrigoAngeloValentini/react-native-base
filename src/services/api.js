import {create} from 'apisauce';

const api = create({
  baseURL: 'localhost',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.axiosInstance.defaults.timeout = 40000;

export const changeApiUrl = (url) => {
  api.setBaseURL(url);
};

export default api;
