// Services
import { GET } from '@services/clientRequest';

// Types
import { ProductListUnitListResponse } from './type';

// Constants
import { ROUTES } from '@constants/routes';

export const getProductUnits = async () =>
  await GET<ProductListUnitListResponse>(ROUTES.PRODUCT_UNIT.GET_ALL);
