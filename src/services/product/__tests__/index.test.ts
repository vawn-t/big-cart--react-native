import { GET } from '@services/clientRequest';
import { getProducts, getProductDetail, searchProducts } from '..';
import { ROUTES } from '@constants/routes';

jest.mock('@services/clientRequest', () => ({
  GET: jest.fn(),
}));

describe('Product Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call GET with the correct parameters for getProducts', async () => {
    const mockResponse = { data: [] };
    (GET as jest.Mock).mockResolvedValueOnce(mockResponse);

    await getProducts();

    expect(GET).toHaveBeenCalledWith(ROUTES.PRODUCT.GET_ALL);
  });

  it('should call GET with the correct parameters for getProductDetail', async () => {
    const id = 1;
    const mockResponse = { data: {} };
    (GET as jest.Mock).mockResolvedValueOnce(mockResponse);

    await getProductDetail(id);

    expect(GET).toHaveBeenCalledWith(ROUTES.PRODUCT.getDetail(id));
  });

  it('should call GET with the correct parameters for searchProducts', async () => {
    const searchValue = 'your-search-value';
    const mockResponse = { data: [] };
    (GET as jest.Mock).mockResolvedValueOnce(mockResponse);

    await searchProducts(searchValue);

    expect(GET).toHaveBeenCalledWith(ROUTES.PRODUCT.search(searchValue));
  });
});
