import ky from 'ky';

const api = ky.create({prefixUrl: `${API_ROOT}`, credentials: 'include'});
export default api;
