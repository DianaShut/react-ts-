import React from 'react'
import {AppBar, Toolbar, Typography,  Tab, Button} from "@mui/material";
import {NavbarWrapper} from "../styles/Header.modules";

const menuItems = [
    {name: "Home"},
    {name: "Now Playing"},
    {name: "Popular"},
    {name: "Tv shows"},
]
const Header = () => {
 return (
  <NavbarWrapper>
      <AppBar sx={{padding: "10px", backgroundColor: "#063970"}}>
          <Toolbar>
              <Typography className="logo">Cinematica</Typography>
              <div className="navLinks">
                  {menuItems.map((nav, index) =>(<Tab clasName="links" label={nav.name} key={index}/>))}
              </div>

              <Button className="loginBtn" variant="contained" color="info">Login</Button>
          </Toolbar>
      </AppBar>
  </NavbarWrapper>
 );
};

export {Header};