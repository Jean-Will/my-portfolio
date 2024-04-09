import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"; // Importando o arquivo CSS

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: '#414141',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <BottomNavigationAction
        label="GitHub"
        icon={<GitHubIcon />}
        href="https://github.com/Jean-Will"
        target="_blank"
        rel="noopener noreferrer"
      />
      {/* Adicionando a classe "footer-container" */}
      <div className="footer-container">
        <Typography variant="body2" color="textSecondary" sx={{ mt: 0.4 }}>
          Criado por Jean Will
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 0.4 }}>
          © 2024 Todos os direitos reservados.
        </Typography>
      </div>
      <BottomNavigationAction
        label="LinkedIn"
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/jean-will-webdeveloper/"
        target="_blank"
        rel="noopener noreferrer"
      />
      {/* Adicione mais ações do footer conforme necessário */}
    </BottomNavigation>
  );
};

export default Footer;
