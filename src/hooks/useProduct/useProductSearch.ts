import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services
import { searchProducts } from '@services/product';

// Constants
import { QUERY_KEY } from '@constants/index';

// Models
import { Product } from '@models/index';

const useProductSearch = (searchValue: string): UseQueryResult<Product[]> => {
  return useQuery({
    queryKey: [QUERY_KEY.PRODUCT_SEARCH],
    queryFn: async () => {
      const result: Product[] = [];
      const response = await searchProducts(searchValue);
      response.products.forEach((product) => {
        result.push(new Product({ ...product, image: product.images[0] }));
      });
      return result;
    },
  });
};

export default useProductSearch;
