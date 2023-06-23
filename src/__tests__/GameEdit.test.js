import GameEdit from "../components/GameEdit";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Has a page that renders without crashing />', () => {
  it('renders text for GameEdit', () => {
    render(
      <BrowserRouter>
        <GameEdit />
      </BrowserRouter>
    )
  })
})

