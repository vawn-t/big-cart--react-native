import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

// Services
import { verifyCode } from '@services/auth';
import { VerifyCodeError } from '@services/auth/type';

// Types
import { VerifyCodePayload } from '@interfaces/validate';

// Stores
import useStore from '@stores/useStore';

const useAuthVerifyCode = () => {
  const enableLoading = useStore.use.enableLoading();
  const disableLoading = useStore.use.disableLoading();

  return useMutation({
    mutationFn: ({ code }: VerifyCodePayload) => {
      enableLoading();
      return verifyCode(code);
    },
    onSuccess: () => {
      disableLoading();
    },
    onError: (error: AxiosError<VerifyCodeError>) => {
      disableLoading();
      return error;
    },
  });
};

export default useAuthVerifyCode;
