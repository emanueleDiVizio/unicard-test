import client from '../client';
import {API} from '../../config';
import {transformGetUsers} from './transform';

export const getUsers = () =>
  client.get(API.ENDPOINTS.GET_USERS).then(transformGetUsers);
