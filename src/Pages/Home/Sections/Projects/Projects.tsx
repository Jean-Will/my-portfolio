import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Aurora from "../../../../Components/Background/AuroraBackground";

import "./Projects.css";

const Projects = () => {

  return (
    <>
      <Aurora />

      <ImageList 
        sx={{ 
          width: 500, 
          height: 450 
        }} 
        cols={3} 
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  
];

export default Projects;
