import GameIndex from "../pages/GameIndex";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Has a page that renders without crashing />', () => {
  it('renders text for GameShow', () => {
    render(
      <BrowserRouter>
        <GameIndex />
      </BrowserRouter>
    )
  })
})

