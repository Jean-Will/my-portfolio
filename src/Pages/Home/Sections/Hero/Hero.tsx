import { styled , Grid, Container, Typography , Button} from "@mui/material"
import profile from "../../../../assets/Images/pofile.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from "react";


const Hero = () => {


  const [typedText, setTypedText] = useState('');
  
  useEffect(() => {
    const textToType = "I'm a Software Developer";
    let index = 0;
  
    const typingInterval = setInterval(() => {
      setTypedText(prevText => {
        if (index === textToType.length) {
          clearInterval(typingInterval); // Limpa o intervalo quando a mensagem é totalmente digitada
          setTimeout(() => { // Define um timeout para limpar o texto após 15 segundos
            setTypedText('');
            // Reinicia a digitação após o intervalo de 15 segundos
            startTyping();
          }, 15000); // Tempo de espera em milissegundos (15 segundos)
          return prevText; // Mantém o texto atual enquanto espera
        }
        return prevText + textToType[index++]; // Adiciona o próximo caractere ao texto
      });
    }, 150); // Velocidade de digitação em milissegundos
  
    const startTyping = () => {
      index = 0; // Reinicia o índice quando a mensagem é totalmente digitada
      setInterval(() => {
        setTypedText(prevText => {
          if (index === textToType.length) {
            clearInterval(typingInterval); // Limpa o intervalo quando a mensagem é totalmente digitada
            setTimeout(() => { // Define um timeout para limpar o texto após 15 segundos
              setTypedText('');
              // Reinicia a digitação após o intervalo de 15 segundos
              startTyping();
            }, 15000); // Tempo de espera em milissegundos (15 segundos)
            return prevText; // Mantém o texto atual enquanto espera
          }
          return prevText + textToType[index++]; // Adiciona o próximo caractere ao texto
        });
      }, 150); // Velocidade de digitação em milissegundos
    };
  
    return () => {
      clearInterval(typingInterval); // Limpa o intervalo quando o componente é desmontado
    };
  }, []); // Array vazio para garantir que o useEffect seja executado apenas uma vez

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      //<=mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      //=> mobile
    },
  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "30%",
    border: "1px solid",
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
                      href="/Components/Pdf/JeanWill_Eng"
                      download
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
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
                  <Button color="secondary"  style={{textDecoration:"none"}}>
                    <a href="mailto:jeanwill93@hotmail.com"  style={{ textDecoration: "none", color: "inherit" }} >
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
  