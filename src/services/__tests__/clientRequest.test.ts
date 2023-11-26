import axios from 'axios';
import { GET, POST, DELETE, PATCH } from '../clientRequest';
import { SERVER_ERROR } from '@constants/index';

jest.mock('axios');

describe('clientRequest', () => {
  describe('GET', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should make a GET request and return the data', async () => {
      const mockData = { message: 'Hello, World!' };
      const mockResponse = {
        data: mockData,
        headers: {},
        status: 200,
        statusText: 'ok',
      };
      axios.get = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockResponse));

      const result = await GET<typeof mockData>('/example');

      expect(result).toEqual(mockData);

      expect(axios.get).toHaveBeenCalledWith(`/example`, undefined);
    });

    it('should throw an error if the request fails', async () => {
      axios.get = jest
        .fn()
        .mockRejectedValue(() => Promise.reject(new Error(SERVER_ERROR)));

      await expect(GET('/example')).rejects.toThrow(SERVER_ERROR);
      expect(axios.get).toHaveBeenCalledWith(`/example`, undefined);
    });
  });

  describe('POST', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should make a POST request and return the data', async () => {
      const mockData = { message: 'Hello, World!' };
      const mockResponse = {
        data: mockData,
        headers: {},
        status: 200,
        statusText: 'ok',
      };
      axios.post = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockResponse));

      const result = await POST<typeof mockData>('/example', {});

      expect(result).toEqual(mockData);

      expect(axios.post).toHaveBeenCalledWith(`/example`, {}, undefined);
    });

    it('should throw an error if the request fails', async () => {
      axios.post = jest
        .fn()
        .mockRejectedValue(() => Promise.reject(new Error(SERVER_ERROR)));

      await expect(POST('/example', {})).rejects.toThrow(SERVER_ERROR);
      expect(axios.post).toHaveBeenCalledWith(`/example`, {}, undefined);
    });
  });

  describe('DELETE', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should make a DELETE request and return the data', async () => {
      const mockData = { message: 'Hello, World!' };
      const mockResponse = {
        data: mockData,
        headers: {},
        status: 200,
        statusText: 'ok',
      };
      axios.delete = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockResponse));

      const result = await DELETE<typeof mockData>('/example');

      expect(result).toEqual(mockData);

      expect(axios.delete).toHaveBeenCalledWith(`/example`, undefined);
    });

    it('should throw an error if the request fails', async () => {
      axios.delete = jest
        .fn()
        .mockRejectedValue(() => Promise.reject(new Error(SERVER_ERROR)));

      await expect(DELETE('/example')).rejects.toThrow(SERVER_ERROR);
      expect(axios.delete).toHaveBeenCalledWith(`/example`, undefined);
    });
  });

  describe('PATCH', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should make a PATCH request and return the data', async () => {
      const mockData = { message: 'Hello, World!' };
      const mockResponse = {
        data: mockData,
        headers: {},
        status: 200,
        statusText: 'ok',
      };
      axios.patch = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockResponse));

      const result = await PATCH<typeof mockData>('/example', {});

      expect(result).toEqual(mockData);

      expect(axios.patch).toHaveBeenCalledWith(`/example`, {}, undefined);
    });

    it('should throw an error if the request fails', async () => {
      axios.patch = jest
        .fn()
        .mockRejectedValue(() => Promise.reject(new Error(SERVER_ERROR)));

      await expect(PATCH('/example', {})).rejects.toThrow(SERVER_ERROR);
      expect(axios.patch).toHaveBeenCalledWith(`/example`, {}, undefined);
    });
  });
});
