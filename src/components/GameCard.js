import React from 'react';
import '../styles/GameCard.css'; // Assuming you will create a CSS file for styling

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <img src={game.background_image} alt={game.name} className="game-image" />
            <div className="game-info">
                <h3>{game.name}</h3>
                <p>Released: {game.released}</p>
                <p>Rating: {game.rating} / 5</p>
                <p>Genres: {game.genres.map(genre => genre.name).join(', ')}</p>
            </div>
        </div>
    );
};

export default GameCard;
