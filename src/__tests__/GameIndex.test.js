import React from 'react';
import { render, screen } from '@testing-library/react';
import GameIndex from '../pages/GameIndex.js';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../mockGames', () => [
  { id: 1, name: 'Game 1', image: 'image1.jpg', title: 'Title 1', platform: 'Platform 1', rating: 'Rating 1' },
  { id: 2, name: 'Game 2', image: 'image2.jpg', title: 'Title 2', platform: 'Platform 2', rating: 'Rating 2' },
]);

const renderGameIndex = () => {
  render(
    <BrowserRouter>
      <GameIndex />
    </BrowserRouter>
  );
};

describe('GameIndex Component', () => {
  it('logs the games without errors', () => {
    renderGameIndex();
  });

  it('renders the card', async () => {
    renderGameIndex();
    const cardElement = await screen.findByRole('img', { name: /profile of a game named Game 1/i });
    expect(cardElement).toBeInTheDocument();
  });
  

  it('renders the correct number of card items', async () => {
    renderGameIndex();
    const cardItemElements = await screen.findAllByRole('img');
    expect(cardItemElements.length).toBe(2);
  });
});
