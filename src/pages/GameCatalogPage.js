// GameCatalogPage.js
import React from 'react';
import GameDataFetcher from '../components/GameDataFetcher';
import GameCard from '../components/GameCard'; // Make sure the path is correct

const GameCatalogPage = () => {
    return (
        <GameDataFetcher>
            {({ gameData }) => (
                <div className="game-catalog">
                    {gameData.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            )}
        </GameDataFetcher>
    );
};

export default GameCatalogPage;
