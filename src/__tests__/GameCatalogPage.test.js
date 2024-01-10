import { render } from '@testing-library/react';
import GameCatalogPage from '../pages/GameCatalogPage';
import GameDataFetcher from '../components/GameDataFetcher';
import { screen } from '@testing-library/react';

describe('<GameCatalogPage />', () => {
  it('renders game cards for each game in gameData', () => {
    const mockGameData = [
      { id: 1, title: 'Game 1' },
      { id: 2, title: 'Game 2' },
      { id: 3, title: 'Game 3' },
    ];

    render(<GameCatalogPage />, {
      wrapper: ({ children }) => (
        <GameDataFetcher gameData={mockGameData}>{children}</GameDataFetcher>
      ),
    });

    const gameCards = screen.getAllByTestId('game-card');
    expect(gameCards.length).toBe(mockGameData.length);
  });
});