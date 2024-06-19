import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { StyledLoginPage } from './LoginPage.styled';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const { loginWithRedirect } = useAuth0();
    const location = useLocation();
  
    const handleLogin = async () => {
      await loginWithRedirect({
        appState: {
          returnTo: location.state?.from?.pathname || "/dashboard",
        },
      })
    }

  return (
    <StyledLoginPage>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <button type="submit" onClick={handleLogin} >Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </StyledLoginPage>
  );
};

export default LoginPage;
