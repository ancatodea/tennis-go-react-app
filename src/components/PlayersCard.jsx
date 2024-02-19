import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PlayersCard(props) {
  const {key, player} = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Set to true if you want the carousel to autoplay
    autoplaySpeed: 3000, // Adjust autoplay speed in milliseconds
  };

  // Sample data for your cards
  const cardData = [
    { id: `${key}`, title: `${player.name}`, content: `${player.rank}` },
    { id: 2, title: 'Player 2', content: 'Second' },
    { id: 3, title: 'Player 3', content: 'Third' },
    // Add more cards as needed
  ];
  return(
    <div className="PlayersCard">
      <div className="card-carousel">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default PlayersCard;