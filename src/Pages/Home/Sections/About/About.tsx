import { Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import Avatar from "../../../../assets/Images/avatar.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="elemento card-animation">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={Avatar}
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jean Will
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I Have some academic Experience in Js, React in another technologies
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="elemento card-animation">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={Avatar}
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Education
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I Studing technologies in Universidade Cidade de São Paulo (UNICID)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
