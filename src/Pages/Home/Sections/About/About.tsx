import { Typography, Card, CardActionArea, CardMedia, CardContent , styled } from "@mui/material";
import Avatar from "../../../../assets/Images/avatar.jpg";
import "./About.css";





const About = () => {

  const StyledAbout = styled("div")(({ theme }) => ({
   
    
    [theme.breakpoints.up("xs")]: {
      flexDirection: "row",
      
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row", 
    },
  }));

  return (
    <>
    <StyledAbout>
      <div className="container">
        <div className="elemento card-animation">
          
          <Card sx={{ maxWidth: 300 ,}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={Avatar}
                alt="Avatar"
              />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                  Jean Will
                </Typography>
                <Typography variant="body2" color="text.secondary">
                I have some academic experience in JavaScript, React.Js, Angular.Js, this is only about FrontEnd.
                Now in About BackEnd I have used C#.NET sometimes and SQL.
               I have published my codes in GitHub since my first code, 
               so you can see my progress during this time and follow my skills developed and compare my first project with this project. Enjoy this journeys
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="elemento card-animation">
          <Card sx={{ maxWidth: 300, }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={Avatar}
                alt="Avatar"
              />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                  Education
                </Typography>
                <Typography variant="body2" color="text.secondary">
                I'm studying Systems Analysis and Development at Universidade Cidade de São Paulo (UNICID),
                 where I took some tests and my evaluations were very good.
                I know I'm starting my studies, but I study every day, but not only at my university,
                 I have used some platforms like Microsoft Learn, Youtube, Google, Udemy among others.
                I have studied a little about SCRUM agile methodologies where I have certification.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      </StyledAbout>
    </>
  );
};

export default About;
