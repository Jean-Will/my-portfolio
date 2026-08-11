import { AppBar, Toolbar, styled, List, ListItemButton, ClickAwayListener, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
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

// Close navbar when scrolling down
useEffect(() => {
  const handleScroll = () => {
    if (showProjects) {
      setShowProjects(false);
    }
  };

  window.addEventListener("scroll", handleScroll, true);

  return () => {
    window.removeEventListener("scroll", handleScroll, true);
  };
}, [showProjects]);


  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" component="div">
          Welcome to My Portfolio
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton component="a" href="https://github.com/Jean-Will" color="inherit" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/jean-will-softwaredeveloper/" color="inherit" target="_blank" rel="noopener noreferrer">
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

                   <ListItemButton component = "a" href="https://telhasclean.pt" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">Telhas Clean </Typography>
                  </ListItemButton>
                    <ListItemButton component="a" href="https://studio-minucelli.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">Estudio Minucelli </Typography>
                  </ListItemButton>

                  <ListItemButton component="a" href="https://sysbanking-angular.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">Angular Project </Typography>
                  </ListItemButton>
                  <ListItemButton component="a" href="https://youtu.be/cKmxXSjsnos" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">Medical appointments manager </Typography>
                  </ListItemButton>
                  <ListItemButton component="a" href="https://youtube.com/shorts/wUSwRjGfT2U?feature=share" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">Stock Management </Typography>
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
