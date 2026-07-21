import { useState } from "react";
import { Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
//import Avatar from "../../../../assets/Images/avatar.jpg";
// image to education section
import jw from "../../../../assets/Images/jw.jpeg";
import "./About.css";

const About = () => {
  const [expanded, setExpanded] = useState<boolean[]>([false, false]);

  const handleReadMoreToggle = (index: number): void => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const cards = [
    {
      title: "Jean Will",
      content: ` Since 2018, I have been a volunteer leader, guiding and training
      youth for leadership positions. Focused on growing as a developer,
      improving strengths, and delivering quality results.
      I am a team player who motivates others and values a collaborative and
      productive work environment.`
    },
    {
      title: "Education",
      content: `I am a Full-Stack Developer with a degree in Systems Analysis and Development 
      from UNICID (Universidade Cidade de São Paulo), and I am currently enrolled in CINEL’s 
      CET program to become a Specialist in Information Systems Technology and Programming.

      I have practical experience in web development, testing, documentation, and application maintenance,
       gained through both professional and personal projects. 
       I have also developed skills in requirements analysis, information security, and data validation.

  I continue to deepen my knowledge of software development, with a focus on best practices,
   clean code, and continuous technical growth.`
    }
  ];

  return (
    <div className="gradient-background">
      <div className="container">
        {cards.map((card, index) => (
          <div className="elemento card-animation" key={index}>
            <Card className={`card ${expanded[index] ? "expanded" : ""}`}>
              <CardActionArea className="card-action-area">
                <CardMedia
                  component="img"
                  height="180"
                  image={jw}
                  alt="Avatar"
                />
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="p">
                    {card.content}
                  </Typography>
                  <span className="read-more" onClick={() => handleReadMoreToggle(index)}>
                    {expanded[index] ? "Read less" : "Read more"}
                  </span>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
