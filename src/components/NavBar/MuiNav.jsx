import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { darkThemeActions } from "../../store/darkTheme";
import { authActions } from "../../store/auth";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import ROUTES from "../../routes/ROUTES";
import NavLinkComponent from "./NavLinkComponent";
import SearchPartial from "./SearchPartial";
import MiniMenuNavLink from "./MiniMenuNavLink";
import { pages, adminPages, loggedInPages, notAuthPages } from "./navbarPages";
import logo from "../../assets/imgs/logo.png";
import Button from "@mui/material/Button";

const MuiNavbar = () => {
  const isLoggedIn = useSelector((storePie) => storePie.authSlice.isLoggedIn);
  const userDetails = useSelector((storePie) => storePie.authSlice.payload);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (storePie) => storePie.darkThemeSlice.isDarkTheme
  );
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const changeTheme = () => {
    dispatch(darkThemeActions.changeTheme());
  };
  const handleLogoutClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };

  return (
    <AppBar position="static" className="navBar">
      <Container maxWidth="xl">
        <Toolbar>
          <NavLink to={ROUTES.HOME}>
            {isDarkTheme ? (
              <img src={logo} alt="logo" className="logoImg" />
            ) : (
              <img src={logo} alt="logo" className="logoImgDark" />
            )}
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLinkComponent key={page.label} {...page} />
            ))}
            {isLoggedIn ? (
              <NavLinkComponent
                key={loggedInPages[0].url}
                {...loggedInPages[0]}
              />
            ) : (
              ""
            )}
            {userDetails && userDetails.isAdmin ? (
              <NavLinkComponent key={adminPages.url} {...adminPages[0]} />
            ) : (
              ""
            )}
          </Box>
          <SearchPartial />
          <Box>
            <IconButton onClick={changeTheme}>
              {isDarkTheme ? (
                <LightModeIcon
                  fontSize={"large"}
                  color={isDarkTheme ? "white" : "black"}
                />
              ) : (
                <DarkModeIcon
                  fontSize={"large"}
                  color={isDarkTheme ? "white" : "black"}
                />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {isLoggedIn ? (
              <NavLinkComponent
                key={loggedInPages[1].url}
                {...loggedInPages[1]}
                onClick={handleLogoutClick}
              />
            ) : (
              notAuthPages.map((page) => (
                <NavLinkComponent key={page.url} {...page} />
              ))
            )}
          </Box>
          {isLoggedIn ? (
            <NavLink to={ROUTES.PROFILE}>
              <IconButton>
                <AccountCircleIcon fontSize={"large"} />
              </IconButton>
            </NavLink>
          ) : null}
          <Box
            sx={{
              flexGrow: 1,
              flex: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MiniMenuNavLink
                  to={page.url}
                  key={"miniLinks" + page.label}
                  onClick={handleCloseNavMenu}
                  {...page}
                ></MiniMenuNavLink>
              ))}
              {userDetails && userDetails.isAdmin ? (
                <MiniMenuNavLink
                  key={"adminMiniLinks" + adminPages.url}
                  {...adminPages[0]}
                />
              ) : (
                ""
              )}
              {isLoggedIn
                ? loggedInPages.map((page) =>
                    page.url === ROUTES.LOGOUT ? (
                      <MiniMenuNavLink
                        key={"miniLinks" + page.url}
                        {...page}
                        onClick={handleLogoutClick}
                      />
                    ) : (
                      <MiniMenuNavLink key={"miniLinks" + page.url} {...page} />
                    )
                  )
                : notAuthPages.map((page) => (
                    <MiniMenuNavLink
                      key={"miniLinks" + page.url}
                      {...page}
                      onClick={handleCloseNavMenu}
                    />
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MuiNavbar;
