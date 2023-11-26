import { getProductUnits } from '..';
import { GET } from '@services/clientRequest';
import { ROUTES } from '@constants/index';

jest.mock('@services/clientRequest', () => ({
  GET: jest.fn(),
}));

describe('getProductUnits', () => {
  it('should call GET with the correct parameters', async () => {
    await getProductUnits();
    expect(GET).toHaveBeenCalledWith(ROUTES.PRODUCT_UNIT.GET_ALL);
  });
});
