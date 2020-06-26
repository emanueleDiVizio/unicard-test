import {create} from 'apisauce';
import {API} from '../config';

const api = create({baseURL: API.BASE_URL, timeout: API.DEFAULT_TIMEOUT});

export default api;
