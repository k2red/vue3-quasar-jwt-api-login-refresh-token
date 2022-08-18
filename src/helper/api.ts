import { axios } from 'boot/axios';
import { useAuthStore } from 'src/stores/auth.store'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const useAuth = useAuthStore();

api.interceptors.request.use(function (config) {
  if (useAuth.user.accessToken) {
    config.headers['Authorization'] = 'Bearer ' + useAuth.user.accessToken;  // for Spring Boot back-end
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
  return response;
}, async function (err) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  const originalConfig = err.config;
  if (originalConfig.url !== '/auth/signin' && err.response) {
    // Access Token was expired
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const rs = await api.post('/auth/refreshtoken', {
          refreshToken: useAuth.user.refreshToken,
        });

        const { accessToken } = rs.data;

        useAuth.refeshToken(accessToken);

        return api(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }

  return Promise.reject(err);
});

export {api};
