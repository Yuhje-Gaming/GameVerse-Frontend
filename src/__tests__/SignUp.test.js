import SignUp from "../components/SignUp";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

describe('<Has a page that renders without crashing />', () => {
  it('SignUp form', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
  })
})