import { styled, Grid, Container, Typography, Button } from "@mui/material";
import jw1 from "../../../../assets/Images/Jw1.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import { useState, useEffect } from "react";
import ENG_JeanWill from "../../../../assets/Pdf/JeanWill_CV_062026_Eng.pdf";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const textToType = "I'm a Software Developer";
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      timeoutId = setTimeout(() => {
        if (!isDeleting) {
          // Digitando
          setTypedText(textToType.slice(0, index + 1));
          index++;

          if (index > textToType.length) {
            // Terminou de digitar, espera e começa a apagar
            setIsDeleting(true);
            type();
          } else {
            type();
          }
        } else {
          // Apagando
          setTypedText(textToType.slice(0, index - 1));
          index--;

          if (index === 0) {
            // Terminou de apagar, espera e começa a digitar de novo
            setIsDeleting(false);
            setTimeout(type, 15000); // 15s parado antes de reiniciar
          } else {
            type();
          }
        }
      }, isDeleting ? 100 : 170); // mais rápido para apagar
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [isDeleting]);

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
              <StyledImg src={jw1} />
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