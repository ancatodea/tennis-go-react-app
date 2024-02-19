import { Link } from 'react-router-dom';
import icon from "../assets/TennisGO.png";
import styles from "./Header.module.css";

function Header() {
  return(
    <div className="Header">
      <div className="logo">
        <Link to='/Home'>
          <img className={styles.logo} src={icon} alt="" />
        </Link>
      </div>
      <div className="title">Tennis Go</div>
      <div className="navigation-container">
          <nav className="navigation">
            <ul>
              <li>
                <Link to='/Home'>Homepage</Link>
              </li>
              <li>
                <Link to='/Players'>Players</Link>
              </li>
              <li>
                <Link to='/Tournaments'>Tournaments</Link>
              </li>
              <li>
                <Link to='/Lessons'>Lessons</Link>
              </li>
              <li>
                <Link to='/Shop'>Shop</Link>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  );
}

export default Header;