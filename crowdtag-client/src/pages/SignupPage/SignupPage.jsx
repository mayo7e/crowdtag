import React from 'react';
import { StyledSignupPage } from './SignupPage.styled';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <StyledSignupPage>
      <h1>Sign Up</h1>
      <form>
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </StyledSignupPage>
  );
};

export default SignupPage;
