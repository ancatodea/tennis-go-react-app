import MainTitle from "../components/MainTitle";
import styles from "./Tournaments.module.css";

function Tournaments() {
  return (
      <div className={styles.tournaments}>
          <MainTitle title="Tennis Tournaments arouns the world" />
      </div>
  );
}

export default Tournaments;