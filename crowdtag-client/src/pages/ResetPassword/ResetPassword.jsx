import React from 'react';
// import { Outlet } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const ResetPassword = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
   <div>
    <h1>hi</h1>
   </div>
  );
};

export default ResetPassword;
