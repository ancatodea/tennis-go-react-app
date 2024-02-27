import styles from "./MainTitle.module.css";
import mainImage from "../assets/ball.png"

function MainTitle(props) {
    return(
        <div className={styles.mainTitle}>
            <h1 className={styles.title}>{props.title}</h1>
            <img className={styles.mainImage} src={mainImage} alt="Tennis ball" />
        </div>
    )
}

export default MainTitle;