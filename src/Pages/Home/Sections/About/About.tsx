import { Typography,styled } from "@mui/material";
import Avatar from "../../../../assets/Images/avatar.jpg";



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';




const About= () => {

  
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      //<=mobile
      paddingTop: "0px",
    },
    [theme.breakpoints.up("md")]: {
      //=> mobile
    },
  }));

    
    
    return (
      <>
      <StyledAbout>
      <div className="container">
        <div className="elemento" >
        <Card sx={{ maxWidth: 345,  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
           
          src={Avatar}/>
          
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jean Will
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I Have some academic Experience in Js, React in another tecnologies
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


        </div>
      </div>

      </StyledAbout>
      
     
      
      </>
    )
  }
   export default About;
  
