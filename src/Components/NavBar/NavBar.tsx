import { AppBar, Toolbar, MenuItem, styled } from "@mui/material"


const NavBar= () => {
  
    const StyledtToolBar = styled(Toolbar)(() => ({
        display:"flex",
        justifyContent:"space-evenly",
        
       
    
      }));
    

    return (
      <>
      <AppBar position="absolute">
        <StyledtToolBar>
        <MenuItem component="a" href="https://github.com/Jean-Will"> GITHUB </MenuItem>
        <MenuItem component="a" href="https://www.linkedin.com/in/jean-will-webdeveloper/">LINKEDIN </MenuItem>
        <MenuItem >PROJECTS </MenuItem>
        </StyledtToolBar>
        
      </AppBar>
      </>
    )
  }
  
  export default NavBar
  