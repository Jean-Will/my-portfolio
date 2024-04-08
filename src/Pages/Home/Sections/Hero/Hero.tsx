import { styled , Grid, Container, Typography , Button} from "@mui/material"
import profile from "../../../../assets/Images/pofile.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';






const Hero = () => {



  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems:"center",
    [theme.breakpoints.up("xs")]: {//<=mobile 
      paddingTop:"100px"
    
    },
    [theme.breakpoints.up("md")]: { //=> mobile 
    
    }

  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "30%",
    border: "1px solid"
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={profile} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center" pb={2}
              >
                {" "}
                Jean Will{" "}
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center" 
              >
                {" "}
                I'm a Software Developer {" "}
              </Typography>
              <Grid container display="flex" justifyContent="center" pt={3} >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button color="secondary" > 
                  <a href="../" download style={{textDecoration:"none"}}>
                  <DownloadIcon />
                    <Typography>DOWLOAD CV</Typography>
                  </a>
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button color="secondary" >
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
  