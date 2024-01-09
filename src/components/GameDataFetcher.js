import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIKEY = "af8d52f9a0f84f0db2d6ff805ae4d774";

const GameDataFetcher = ({ children }) => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            const options = {
                method: 'GET',
                url: `https://api.rawg.io/api/games?key=${APIKEY}`,
            };

            try {
                const response = await axios.request(options);
                setGames(response.data.results); // Assuming the data you want is in `results`
            } catch (error) {
                console.error('Error fetching data: ', error);
                setError(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Call the children function with the fetched data
    return children({ gameData: games });
};

export default GameDataFetcher;