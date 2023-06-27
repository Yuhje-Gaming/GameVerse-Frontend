import GameEdit from "../pages/GameEdit.js";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("GameEdit component", () => {
  it("renders the component", () => {
    render(
      <BrowserRouter>
        <GameEdit />
      </BrowserRouter>
    );
    const deleteButton = screen.getByText("Delete game");
    expect(deleteButton).toBeInTheDocument();
  });

  it("updates input value on change", () => {
    render(
      <BrowserRouter>
        <GameEdit />
      </BrowserRouter>
    );
    const titleInput = screen.getByPlaceholderText("Enter your Game Title");
    fireEvent.change(titleInput, { target: { value: "Edit Game Title" } });
    expect(titleInput.value).toBe("Edit Game Title");
  });
});