import { Link } from 'react-router-dom';
import icon from "../assets/TennisGO.png";
import styles from "./Header.module.css";

function Header() {
  return (
      <div className={styles.header}>
          <Link className={styles.logo} to="/Home">
              <img className={styles.logoImage} src={icon} alt="" />
              <div className={styles.logoTitle}>Tennis Go</div>
          </Link>
          <div className={styles.navigationContainer}>
              <nav className={styles.navigation}>
                  <ul className={styles.navigationList}>
                      <li>
                          <Link className={styles.navigationLink} to="/Home">
                              Homepage
                          </Link>
                      </li>
                      <li>
                          <Link className={styles.navigationLink} to="/Wta">
                              WTA
                          </Link>
                      </li>
                      <li>
                          <Link className={styles.navigationLink} to="/Atp">
                              ATP
                          </Link>
                      </li>
                      <li>
                          <Link
                              className={styles.navigationLink}
                              to="/Tournaments"
                          >
                              Tournaments
                          </Link>
                      </li>
                      <li>
                          <Link className={styles.navigationLink} to="/Lessons">
                              Lessons
                          </Link>
                      </li>
                      <li>
                          <Link className={styles.navigationLink} to="/Shop">
                              Shop
                          </Link>
                      </li>
                  </ul>
              </nav>
          </div>
      </div>
  );
}

export default Header;