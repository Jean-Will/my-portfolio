import { AppBar, Toolbar, MenuItem, styled , List , ListItem , ClickAwayListener} from "@mui/material"
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
            <List style={{ position: "absolute", top: "100%", right: 0, maxWidth: "300px", zIndex: 1, opacity: 1, transition: "opacity 0.3s" }}>
              <ListItem button component="a" href="https://sysbanking-angular.netlify.app/">1º Proj. Angular.js</ListItem>
              <ListItem button component="a" href="https://retirement-react-js.netlify.app/">Logic in js</ListItem>
              <ListItem button component="a" href="https://smartcalculator-js.netlify.app/">1ª Calc in Js</ListItem>
              <ListItem button component="a" href="https://forms-javascript.netlify.app/">1ªForm in Js</ListItem>
            </List>
          )}
         
        </StyledtToolBar>
        
      </AppBar>
      </>
    )
  }
  
  export default NavBar
  