import styles from "./AboutPlayers.module.css";
import player from "../../assets/aboutPlayers1.jpg"

function AboutPlayers() {
    return (
        <div className={styles.aboutPlayers}>
            <img src={player} alt="tennis player" />
            <div className={styles.playersBar}>
                <button className={styles.wtaButton}>WTA</button>
                <button className={styles.atpButton}>ATP</button>
            </div>
        </div>
    );
}

export default AboutPlayers;