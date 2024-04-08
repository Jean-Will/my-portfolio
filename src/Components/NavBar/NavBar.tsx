import { AppBar, Toolbar, MenuItem, styled } from "@mui/material"


const NavBar= () => {
  
    const StyledtToolBar = styled(Toolbar)(() => ({
        display:"flex",
        justifyContent:"space-evenly"
       
    
      }));
    

    return (
      <>
      <AppBar position="absolute">
        <StyledtToolBar>
        <MenuItem ><link href="https://retirement-react-js.netlify.app/"></link> ABOUT </MenuItem>
        <MenuItem>SKILLS </MenuItem>
        <MenuItem>PROJECTS </MenuItem>
        </StyledtToolBar>
        
      </AppBar>
      </>
    )
  }
  
  export default NavBar
  