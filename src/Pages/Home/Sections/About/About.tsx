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
      content: `I have some academic experience in JavaScript, React.Js, Angular.Js, this is only about FrontEnd.
                Now in About BackEnd I have used C#.NET sometimes and SQL.
                I have published my codes in GitHub since my first code,
                so you can see my progress during this time and follow my skills developed and compare my first project with this project. Enjoy this journeys`
    },
    {
      title: "Education",
      content: `I'm studying Systems Analysis and Development at Universidade Cidade de São Paulo (UNICID),
                where I took some tests and my evaluations were very good.
                I know I'm starting my studies, but I study every day, but not only at my university,
                I have used some platforms like Microsoft Learn, Youtube, Google, Udemy among others.
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
