import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services
import { getProductDetail } from '@services/product';

// Constants
import { QUERY_KEY } from '@constants/index';

// Models
import { Product } from '@models/index';

const useProductDetail = (id: number): UseQueryResult<Product> => {
  return useQuery({
    queryKey: [`${QUERY_KEY.PRODUCT_DETAIL}-${id}`],
    queryFn: async () => {
      const response = await getProductDetail(id);

      return new Product({ ...response, image: response.images[0] });
    },
  });
};

export default useProductDetail;
