import GameNew from "../components/GameNew";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Has a page that renders without crashing />', () => {
  it('renders text for GameNew', () => {
    render(
      <BrowserRouter>
        <GameNew />
      </BrowserRouter>
    )
  })
})

