// Services
import { GET } from '@services/clientRequest';

// Constants
import { ROUTES } from '@constants/index';

// Types
import { CategoryListResponse } from './type';

export const getCategories = async () =>
  await GET<CategoryListResponse>(ROUTES.CATEGORY.GET_ALL);
