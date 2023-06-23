import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  })
  it("renders logo with a src and alt", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
    const logo = screen.getByAltText(/logo/i)
    expect(logo).toHaveAttribute("src", "YLogo.gif")
    expect(logo).toHaveAttribute("alt", "Ylogo logo gif")
  })
})