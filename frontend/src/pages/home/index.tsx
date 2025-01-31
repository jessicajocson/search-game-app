import { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../icon';
import '../../styles/home-page.css';

interface Game {
  id: number;
  name: string;
  image: string;
  platform: string;
  category: string;
}

interface DropdownOption {
  value: string;
  label: string;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data - replace with actual API data
  const [games] = useState<Game[]>([
    { id: 1, name: 'Game 1', image: images.gameImage1, platform: 'PC', category: 'Action' },
    { id: 2, name: 'Game 2', image: images.gameImage2, platform: 'Console', category: 'RPG' },
  ]);

  const platforms: DropdownOption[] = [
    { value: '', label: 'All Platforms' },
    { value: 'pc', label: 'PC' },
    { value: 'browser', label: 'Browser' },
  ];

  const categories: DropdownOption[] = [
    { value: '', label: 'All Categories' },
    { value: 'action', label: 'Action' },
    { value: 'rpg', label: 'RPG' },
    { value: 'strategy', label: 'Strategy' },
  ];

  const sortOptions: DropdownOption[] = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'alphabetical', label: 'Alphabetical' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const paginatedGames = games.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container">
      <h2 className="title">Find & track the best free-to-play games!</h2>
      <h4 className="title">Search for what to play next!</h4>

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search by Name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="searchInput"
        />
      </div>

      <div className="filtersContainer">
        <select
          className="dropdown"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          {platforms.map(platform => (
            <option key={platform.value} value={platform.value}>
              {platform.label}
            </option>
          ))}
        </select>

        <select
          className="dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        <select
          className="dropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="gamesGrid">
        {paginatedGames.map(game => (
          <div key={game.id} className="gameCard">
            <h3>{game.name}</h3>
            <img src={game.image} alt={game.name} className="gameImage" />
            <div className="gameContent">
              <p className="gameDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
               {/* <button className="viewButton"> */}
              <Link to={`/games/${game.id}`} className="viewButton"> 
              View More
              </Link>
              {/* </button>  */}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className="paginationButton"
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          className="paginationButton"
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={paginatedGames.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
