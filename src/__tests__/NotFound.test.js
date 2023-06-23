import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('NotFound Component', () => {
  it('renders the NotFoundPage image', () => {
    render(<NotFound />);
    const imageElement = screen.getByAltText('UniverseImage');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toContain('NotFoundPage.jpg');
  });
});
