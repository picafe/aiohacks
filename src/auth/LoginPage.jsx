import { LoginForm } from 'wasp/client/auth';
import AuthWrapper from './Wrapper';

// Use it like this
export default function LoginPage() {
  return <>
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  </>
}
