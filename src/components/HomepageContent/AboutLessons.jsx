import styles from "./AboutLessons.module.css";

function AboutLessons() {
    return (
        <div className={styles.aboutLessons}>
            Beginner or need to improve your skills?
            <a className={styles.lessons}>Check our programs</a>
        </div>
    );
}

export default AboutLessons;