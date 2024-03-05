import styles from "./AboutShop.module.css";

function AboutShop() {
    return (
        <div className={styles.aboutShop}>
            <h3>Shop Collections</h3>
            <div className={styles.shopCollections}>
                <div className={`${styles.racquets} ${styles.collection}`}>
                    Racquets
                </div>
                <div className={`${styles.shoes} ${styles.collection}`}>
                    Shoes
                </div>
                <div className={`${styles.apparel} ${styles.collection}`}>
                    Apparel
                </div>
            </div>
        </div>
    );
}

export default AboutShop;