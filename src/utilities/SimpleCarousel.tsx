import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const useStyles = makeStyles(() => ({
  carouselContainer: {
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    cursor: 'pointer'
  },
  carouselTrack: {
    display: 'flex',
    transition: 'transform 0.5s',
    alignItems: 'center',
  },
  carouselItem: {
    flex: '0 0 100%',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
}));

interface CarouselProps {
  images: string[];
}

const SimpleCarousel: React.FC<CarouselProps> = ({ images }) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Paper elevation={3} className={classes.carouselContainer}>
      <div className={classes.carouselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((imageName, index) => (
          <div key={index} className={classes.carouselItem}>
            <img src={process.env.PUBLIC_URL + imageName} alt={`Slide ${index}`} className={classes.image} />
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', display: 'flex', width: '100%', justifyContent: 'space-between', top: '50%', transform: 'translateY(-50%)' }}>
        <IconButton  style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            cursor: 'pointer',
          }} onClick={prevSlide}>
          <ArrowBack />
        </IconButton>
        <IconButton style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            cursor: 'pointer',
          }} onClick={nextSlide}>
          <ArrowForward />
        </IconButton>
      </div>
    </Paper>
  );
};

export default SimpleCarousel;
