import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GameProtectedIndex from "../pages/GameProtectedIndex";

const currentUser = {
  id: 1,
  username: "john_doe",
  email: "john.doe@example.com",
};

const games = [
  {
    id: 1,
    title: "League of Legends",
    rating: 9.6,
    platform: "Windows PC, Mac OS",
    genre: "Multiplayer Online Battle Arena (MOBA)",
    developer: "Riot Games",
    image:
      "https://www.leagueoflegends.com/static/twitter-fafabb053dd48811ea554fe63188cc1a.jpg",
    summary:
      "League of Legends is one of the world's most popular video games...",
    release_date: "2009-10-27",
    user_id: 1,
  },
];

describe("GameProtectedIndex", () => {
  test("renders GameProtectedIndex component", () => {
    render(
      <Router>
        <GameProtectedIndex currentUser={currentUser} games={games} data-testid="game-protected-index" />
      </Router>
    );

    const gameProtectedIndexElement = screen.getByTestId("game-protected-index");
    expect(gameProtectedIndexElement).toBeInTheDocument();

    const gameTitleElements = screen.getAllByTestId("game-title");
    expect(gameTitleElements).toHaveLength(games.length);
    
  });
});
