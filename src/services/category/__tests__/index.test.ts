import { GET } from '@services/clientRequest';
import { ROUTES } from '@constants/index';
import { getCategories } from '..';

jest.mock('@services/clientRequest', () => ({
  GET: jest.fn(),
}));

describe('getCategories', () => {
  it('should call GET with the correct parameters', async () => {
    const mockResponse = { data: 'mockData' };

    (GET as jest.Mock).mockResolvedValueOnce(mockResponse);

    await getCategories();

    expect(GET).toHaveBeenCalledWith(ROUTES.CATEGORY.GET_ALL);
  });

  it('should return the response from GET', async () => {
    const mockResponse = { data: 'mockData' };

    (GET as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await getCategories();

    expect(result).toEqual(mockResponse);
  });
});
