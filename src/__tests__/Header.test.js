import Header from "../pages/GameIndex";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<GameIndex />", () => {
  it("has a heading", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  })
})  