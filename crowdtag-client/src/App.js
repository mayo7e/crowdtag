

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const { isLoading, user, isAuthenticated, error,  } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }



  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Navbar toggleTheme={toggleTheme} themeMode={theme} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage {...props} toggleTheme={toggleTheme} themeMode={theme} />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile />
            )}
          />
          <Route
            path="/dashboard"
            render={(props) => (
              <DashboardPage
                {...props}
                toggleTheme={toggleTheme}
                themeMode={theme}
              />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
