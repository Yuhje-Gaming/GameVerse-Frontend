import Home from "../components/Home";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Has a page that renders without crashing />', () => {
  it('renders text for Home', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })
})

