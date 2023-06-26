import GameNew from "../pages/GameNew.js";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("GameNew component", () => {
  it("renders the component", () => {
    render(
      <BrowserRouter>
        <GameNew />
      </BrowserRouter>
    );
    const addButton = screen.getByText("Add New Game");
    expect(addButton).toBeInTheDocument();
  });

  it("updates input value on change", () => {
    render(
      <BrowserRouter>
        <GameNew />
      </BrowserRouter>
    );
    const titleInput = screen.getByPlaceholderText("Enter your Game Title");
    fireEvent.change(titleInput, { target: { value: "New Game Title" } });
    expect(titleInput.value).toBe("New Game Title");
  });
});
