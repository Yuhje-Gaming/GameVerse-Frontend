import LogIn from "../components/LogIn";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Has a page that renders without crashing />', () => {
  it('Login form', () => {
    render(
      <BrowserRouter>
        <LogIn />
      </BrowserRouter>
    )
  })
})