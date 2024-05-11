import { AppBar, Toolbar, MenuItem, styled , List , ListItemButton , ClickAwayListener} from "@mui/material"
import { useState } from "react";


const NavBar= () => {
  
    const StyledtToolBar = styled(Toolbar)(() => ({
        display:"flex",
        justifyContent:"space-evenly",
        
       
    
      }));

      const [showProjects,setShowProjects] = useState(false);

      const toggleProjects = () => {
        setShowProjects(!showProjects);
      };

      const handleClickAway = () => {
        setShowProjects(false)
      };
    

    return (
      <>
      <AppBar position="absolute">
        <StyledtToolBar>
        <MenuItem component="a" href="https://github.com/Jean-Will"> GITHUB </MenuItem>
        <MenuItem component="a" href="https://www.linkedin.com/in/jean-will-webdeveloper/">LINKEDIN </MenuItem>
        <ClickAwayListener onClickAway={handleClickAway}>
            <MenuItem onClick={toggleProjects}>PROJECTS</MenuItem>
          </ClickAwayListener>
          {showProjects && (
            <List style={{ position: "absolute", top: "100%", right: 0, maxWidth: "300px", zIndex: 1, opacity: 1, transition: "opacity 0.3s" , }}>
              <ListItemButton component="a" href="https://sysbanking-angular.netlify.app/">1º Proj. Angular.js</ListItemButton>
              
              <ListItemButton component="a" href="https://smartcalculator-js.netlify.app/">1ª Calc in Js</ListItemButton>
              <ListItemButton component="a" href="https://forms-javascript.netlify.app/">1ªForm in Js</ListItemButton>
            </List>
          )}
         
        </StyledtToolBar>
        
      </AppBar>
      </>
    )
  }
  
  export default NavBar
  