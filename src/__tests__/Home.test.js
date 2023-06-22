import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home.js';
import { BrowserRouter } from 'react-router-dom';

describe('Home Component', () => {
  it('renders the carousel', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const carouselElement = screen.getByRole('img', { name: 'League of Legends' });
    expect(carouselElement).toBeInTheDocument();
  });

  it('renders the "View All Games" button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const buttonElement = screen.getByText('View All Games');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the correct number of carousel items', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const carouselItemElements = screen.getAllByRole('img');
    expect(carouselItemElements.length).toBe(2);
  });
});
