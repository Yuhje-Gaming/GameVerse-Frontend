import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";
import Homebg from '../assets/Homebg.mp4';
import Carousel from '../components/Carousel';


const Home = ({ games }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `GameIndex`;
    navigate(path);
  };

  const images = games.map((game) => game.image);

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
       <Carousel games={games} />
      </div>

      <div className='btn3-container'>
        <Button
          className='all-view-btn'
          onClick={() => navigate('/gameindex')}
        >
          View All Games
        </Button>
      </div>
    </div>
  )
}

export default Home;
