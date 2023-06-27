import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';

describe('AboutUs component', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByText('Justin')).toBeInTheDocument();
    expect(screen.getByText('Yue Han')).toBeInTheDocument();
    expect(screen.getByText('Henri')).toBeInTheDocument();
  });
});
