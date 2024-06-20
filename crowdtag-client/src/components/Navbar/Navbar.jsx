
// import { Link } from "react-router-dom";
// import { SignupButton } from "../buttons/signup-button";
// import { LoginButton } from "../buttons/login-button";
// import { LogoutButton } from "../buttons/logout-button";

import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledNavbar,
  Container,
  Logo,
  Nav,
  NavItem,
  NavLink,
  Button,
  LogoContainer,
  ToggleSwitch,
  ProfileImage,
  UserName,
} from "./Navbar.styled";

const Navbar = ({toggleTheme}) => {
 
  const { user, error, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  }

  const handleLogout = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

    const handleSignUp = async () => {
      await loginWithRedirect({
        appState: {
          returnTo: "/profile",
        },
        authorizationParams: {
          prompt: "login",
          screen_hint: "signup",
        },
      });
    };

    console.log("isLoading:", isLoading);
    console.log("ihi:", user);
    console.log("isAuthenticated:", isAuthenticated);

    return (
      <StyledNavbar>
        <Container>
          <LogoContainer>
            <Logo>Crowdtag</Logo>
            <Nav>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              {!isAuthenticated && (
                <NavItem>
                  <NavLink to="/external-api">API</NavLink>
                </NavItem>
              )}
            </Nav>
          </LogoContainer>
          <Nav>
            {!isAuthenticated ? (
              <>
                <NavItem>
                  <Button onClick={handleLogin}>Log In</Button>
                </NavItem>
                <NavItem>
                  <Button onClick={handleSignUp}>Sign Up</Button>
                </NavItem>
          
              </>
            ) : (
              <>
                {/* <NavItem>
                  <p>Welcome, {user?.name}!</p>
                </NavItem> */}
                <NavItem>
                  <ProfileImage src={user.picture} alt="Profile" />
                  <UserName>{user.name}</UserName>
                </NavItem>
                <NavItem>
                  <Button onClick={handleLogout}>Log Out</Button>
                </NavItem>
              </>
            )}
            <NavItem>
              <ToggleSwitch>
                <input type="checkbox" onChange={toggleTheme} />
                <span className="moon-icon"></span>
              </ToggleSwitch>
            </NavItem>
          </Nav>
        </Container>
      </StyledNavbar>
    );
};

export default Navbar;
