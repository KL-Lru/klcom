import ky from 'ky';

const api = ky.create({prefixUrl: `${API_ROOT}`});
export default api;
