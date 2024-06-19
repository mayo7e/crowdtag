import React from 'react';
import { StyledDashboardPage } from './DashboardPage.styled';
// import { Outlet } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";

const DashboardPage = () => {
  // const { user } = useAuth0();



  return (
    <StyledDashboardPage>
      <h1>Dashboard</h1>
      <p>Welcome  to your dashboard. Here you can manage your tasks, view your progress, and earn rewards.</p>
      {/* <Outlet /> */}
    </StyledDashboardPage>
  );
};

export default DashboardPage;
