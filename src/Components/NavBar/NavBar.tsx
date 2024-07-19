import { AppBar, Toolbar, styled, List, ListItemButton, ClickAwayListener, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CSSTransition } from 'react-transition-group';
import './NavBar.css'; // Crie este arquivo para as classes CSS

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    padding: "0 20px"
  }));

  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const handleClickAway = () => {
    setShowProjects(false);
  };

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <Typography variant="h6" component="div">
          Welcome to My Portfolio
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton component="a" href="https://github.com/Jean-Will" color="inherit">
            <GitHubIcon />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/jean-will-webdeveloper/" color="inherit">
            <LinkedInIcon />
          </IconButton>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <IconButton onClick={toggleProjects} color="inherit">
                <MenuIcon />
                <ExpandMoreIcon />
              </IconButton>
              <CSSTransition
                in={showProjects}
                timeout={300}
                classNames="list"
                unmountOnExit
              >
                <List 
                  style={{ 
                    position: "absolute", 
                    top: "60px", 
                    right: 20, 
                    backgroundColor: "0000", 
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", 
                    borderRadius: "4px", 
                    zIndex: 1 
                  }}
                >
                  <ListItemButton component="a" href="https://sysbanking-angular.netlify.app/">
                    <Typography variant="body1">1º Proj. Angular.js</Typography>
                  </ListItemButton>
                  <ListItemButton component="a" href="https://smartcalculator-js.netlify.app/">
                    <Typography variant="body1">1ª Calc in Js</Typography>
                  </ListItemButton>
                  <ListItemButton component="a" href="https://forms-javascript.netlify.app/">
                    <Typography variant="body1">1ª Form in Js</Typography>
                  </ListItemButton>
                </List>
              </CSSTransition>
            </div>
          </ClickAwayListener>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
