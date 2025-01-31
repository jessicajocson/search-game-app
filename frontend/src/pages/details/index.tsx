
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../styles/details-page.css'; // Import your CSS file
import { images } from '../../icon'; // Import your images

interface GameData {
  gameData: {
    thumbnail: string;
    column1: {
      title: string;
      description: string;
      genre: string;
      developer: string;
    };
    column2: {
      releaseDate: string;
      platform: string;
      rating: string;
      publisher: string;
    };
    additionalImages: string[];
  };
}

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [gameData, setGameData] = useState<GameData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/games/${id}`);
        const data = await response.json();
        setGameData(data);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!gameData) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="mainFrame">
        {/* Left Section - Thumbnail */}
        <div className="thumbnailContainer">
          <img 
            src={gameData.gameData.thumbnail} 
            alt="Game thumbnail" 
            className="thumbnail"
          />
        </div>

        {/* Right Section - Two Column Text */}
        <div className="detailsContainer">
          <div className="columnsWrapper">
            {/* First Column */}
            <div className="column">
              <h2 className="title">{gameData.gameData.column1.title}</h2>
              <p className="description">{gameData.gameData.column1.description}</p>
              <div className="detailItem">
                <span>Genre:</span> {gameData.gameData.column1.genre}
              </div>
              <div className="detailItem">
                <span>Developer:</span> {gameData.gameData.column1.developer}
              </div>
            </div>

            {/* Second Column */}
            <div className="column">
              <div className="detailItem">
                <span>Release Date:</span> {gameData.gameData.column2.releaseDate}
              </div>
              <div className="detailItem">
                <span>Platform:</span> {gameData.gameData.column2.platform}
              </div>
              <div className="detailItem">
                <span>Rating:</span> {gameData.gameData.column2.rating}
              </div>
              <div className="detailItem">
                <span>Publisher:</span> {gameData.gameData.column2.publisher}
              </div>
            </div>
          </div>

          {/* Back Button */}
          <Link to="/" className="backButton">
             Back to Home
          </Link>
        </div>
      </div>

      {/* Additional Images Section */}
      <div className="additionalImages">
        {[1, 2, 3].map((index) => (
          <div 
            key={index}
            className="imagePlaceholder"
            // Replace with actual image when available:
            // style={{ backgroundImage: `url(${gameData.additionalImages[index - 1]})` }}
          >
            <span>Image {index}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;