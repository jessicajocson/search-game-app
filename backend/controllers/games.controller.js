import { games } from "../data/games.js";

// Get all games with optional filters
export const getGames = (req, res) => {
  let filteredGames = [...games];
  const { platform, category, "sort-by": sortBy } = req.query;

  if (platform) filteredGames = filteredGames.filter(game => game.platform === platform);
  if (category) filteredGames = filteredGames.filter(game => game.category === category);

  if (sortBy === "release-date") {
    filteredGames.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
  } else if (sortBy === "alphabetical") {
    filteredGames.sort((a, b) => a.name.localeCompare(b.name));
  }

  res.json(filteredGames);
};

// Filter games by tags
export const filterGames = (req, res) => {
  const { tag, platform, sort } = req.query;
  let filteredGames = games;

  if (tag) {
    const tagsArray = tag.split(".");
    filteredGames = filteredGames.filter(game => tagsArray.every(t => game.tags.includes(t)));
  }

  if (platform) {
    filteredGames = filteredGames.filter(game => game.platform === platform);
  }

  if (sort === "release-date") {
    filteredGames.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
  }

  res.json(filteredGames);
};

// Get unique categories
export const getCategories = (req, res) => {
  const categories = [...new Set(games.map(game => game.category))];
  res.json(categories);
};

// Get game details by ID
export const getGameDetails = (req, res) => {
  const gameId = parseInt(req.query.id, 10);
  const game = games.find(g => g.id === gameId);
  game ? res.json(game) : res.status(404).json({ error: "Game not found" });
};
