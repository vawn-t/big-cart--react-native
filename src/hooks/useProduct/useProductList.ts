import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services
import { getProducts } from '@services/product';

// Constants
import { QUERY_KEY } from '@constants/index';

// Models
import { Product } from '@models/index';

const useProductList = (): UseQueryResult<Product[]> => {
  return useQuery({
    queryKey: [QUERY_KEY.PRODUCTS],
    queryFn: async () => {
      const result: Product[] = [];
      const response = await getProducts();
      response.products.forEach((product) => {
        result.push(new Product({ ...product, image: product.images[0] }));
      });
      return result;
    },
  });
};

export default useProductList;
