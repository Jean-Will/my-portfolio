import { useState } from "react";
import { Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import Avatar from "../../../../assets/Images/avatar.jpg";
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
      content: `I'm studying Systems Analysis and Development at the City University of São Paulo (UNICID),
       I'm in my second semester and my evaluations have been very good, and I'll graduate in December 2025.
       I'm taking a programming and Python course at IEFP to complement my studies, which I'll finish in December 2024.
       I have studied a little about SCRUM agile methodologies where I have certification.`
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
                  image={Avatar}
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
