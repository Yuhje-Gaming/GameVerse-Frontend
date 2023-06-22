import NotFound from "../components/NotFound";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Has a page that renders without crashing />', () => {
  it('renders text for NotFound', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  })
})

