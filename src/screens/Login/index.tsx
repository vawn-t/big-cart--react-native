// Components
import LoginForm from '@components/Form/LoginForm';

// Layouts
import { AuthLayout } from '@layouts/index';

// Images
import { Images } from '@assets/images/index';

const Login = () => (
  <AuthLayout
    title="Welcome back !"
    description="Sign in to your account"
    image={Images.loginBackground}
    isLogin
  >
    <LoginForm />
  </AuthLayout>
);

export default Login;
