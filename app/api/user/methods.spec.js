import client from '../client';
import * as methods from './methods';
import {API} from '../../config';
import {transformGetUsers} from './transform';

jest.mock('../client', () => ({
  __esModule: true,
  default: {get: jest.fn()},
}));

jest.mock('./transform');

describe('api/user/methods', () => {
  describe('getUsers', () => {
    it('gets user lists', async () => {
      const mockResponse = {data: {}};
      client.get.mockResolvedValue(mockResponse);

      await methods.getUsers();

      expect(client.get).toHaveBeenCalledWith(API.ENDPOINTS.GET_USERS);
      expect(transformGetUsers).toHaveBeenCalledWith(mockResponse);
    });
  });
});
