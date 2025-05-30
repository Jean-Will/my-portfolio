import { styled, Grid, Container, Typography, Button } from "@mui/material";
import profile from "../../../../assets/Images/pofile.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import { useState, useEffect } from "react";
import ENG_JeanWill from "../../../../assets/Pdf/ENG_JeanWill.pdf";
import PTJeanWill from "../../../../assets/Pdf/JeanWill-CV-PT1.pdf";


const Hero = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const textToType = "I'm a Software Developer";
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prevText) => {
        if (index === textToType.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypedText("");
            startTyping(); // reinicia a digitação após o intervalo de 15 segundos
          }, 15000);
          return prevText;
        }
        return prevText + textToType[index++];
      });
    }, 170);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // Função para iniciar a digitação
  const startTyping = () => {
    const textToType = "I'm a Software Developer";
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prevText) => {
        if (index === textToType.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypedText("");
            startTyping(); // reinicia a digitação após o intervalo de 15 segundos
          }, 15000);
          return prevText;
        }
        return prevText + textToType[index++];
      });
    }, 170);
  };

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "60px",
      
    },
    [theme.breakpoints.up("md")]: {},
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "18%",

    [theme.breakpoints.up("xs")]: {
      width: "55%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
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
                textAlign="center"
                pb={2}
              >
                Jean Will
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                {typedText}
              </Typography>
              <Grid container display="flex" justifyContent="center" pt={3}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Button color="secondary">
                    <a
                      href={ENG_JeanWill}
                      download
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <DownloadIcon />
                      <Typography>DOWNLOAD CV (ENG)</Typography>
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
                  <Button color="secondary">
                    <a
                      href={PTJeanWill}
                      download
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <DownloadIcon />
                      <Typography>DOWNLOAD CV (PT)</Typography>
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
                  <Button
                    color="secondary"
                    style={{ textDecoration: "none" }}
                  >
                    <a
                      href="mailto:jeanwill93@hotmail.com"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <EmailIcon />
                      <Typography>Contact me</Typography>
                    </a>
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
