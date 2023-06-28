import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css"
import Homebg from '../assets/Homebg.mp4'

const Home = ({ games, ...args }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `GameIndex`;
    navigate(path);
  };

  const items = games.map((game) => ({
    src: game.image,
    altText: game.title,
    caption: game.title,
    genre: game.genre,
    key: game.id,
  }));

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >

        <img 
          className='carousel-img'
          src={item.src} 
          alt={item.altText} 
          href={`/gameshow/${items.key}`}
        />

        <CarouselCaption
          className='carousel-text'
          captionText={item.genre}
          captionHeader={item.caption}
        />
        
      </CarouselItem>
    )
  })

  return (

    <div className='home-page'>

      <div className='overlay'></div>

      <video 
        className='home-vbg'
        src={Homebg} 
        autoPlay 
        loop 
        muted 
      />

      <div className='home-carousel'>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>

      <div className='btn-cotainer'>
        <Button
         className='home-view-btn'
          color="primary"
          outline
          size="sm"
          href="#"
          onClick={routeChange}
        >
          View All Games
        </Button>
      </div>

    </div>

  )

}

export default Home;
