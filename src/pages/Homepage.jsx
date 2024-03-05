import AboutLessons from "../components/HomepageContent/AboutLessons";
import AboutPlayers from "../components/HomepageContent/AboutPlayers";
import AboutShop from "../components/HomepageContent/AboutShop";
import AboutTournaments from "../components/HomepageContent/AboutTournaments";
import MainTitle from "../components/MainTitle";

function Homepage() {
  return (
      <div className="Homepage">
          <MainTitle title="LET'S DISCUSS TENNIS" />
          <AboutPlayers />
          <AboutTournaments />
          <AboutLessons />
          <AboutShop />
      </div>
  );
}

export default Homepage;