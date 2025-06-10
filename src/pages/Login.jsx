import Logo from '../components/Login/Logo';
import TextHeader from '../components/Login/TextHeader';
import InputField from '../components/Login/InputField';
import PasswordInput from '../components/Login/PasswordInput';
import Button from '../components/Login/Button';
import ForgotPasswordLink from '../components/Login/ForgotPasswordLink';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <Logo />
        <TextHeader />
        <form>
          <InputField type="email" id="email" placeholder="Email" />
          <PasswordInput id="password" placeholder="Password" />
          <Button>Login</Button>
        </form>
        <ForgotPasswordLink />
      </div>
    </div>
  );
}
