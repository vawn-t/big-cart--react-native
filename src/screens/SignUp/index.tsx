import { SignUpForm } from '@components/index';
import { AuthLayout } from '@layouts/index';

// Images
import { Images } from '@assets/images';

const SignUp = () => (
  <AuthLayout
    description="Quickly create account"
    title="Create account"
    image={Images.signupBackground}
  >
    <SignUpForm />
  </AuthLayout>
);

export default SignUp;
