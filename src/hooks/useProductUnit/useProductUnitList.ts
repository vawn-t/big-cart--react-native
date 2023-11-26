import { useQuery, UseQueryResult } from '@tanstack/react-query';

// Services
import { getProductUnits } from '@services/productUnit';

// Constants
import { QUERY_KEY } from '@constants/index';

// Models
import { ProductUnit } from '@models/index';

const useProductUnitList = (): UseQueryResult<ProductUnit[]> => {
  return useQuery({
    queryKey: [QUERY_KEY.PRODUCT_UNITS],
    queryFn: async () => {
      const result: ProductUnit[] = [];
      const response = await getProductUnits();
      response.productUnits.forEach((productUnit) => {
        result.push(new ProductUnit({ ...productUnit }));
      });
      return result;
    },
  });
};

export default useProductUnitList;
