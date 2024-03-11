import AtpHistory from "../components/ATPContent/AtpHistory";
import MainTitle from "../components/MainTitle";
import styles from "./Atp.module.css";

function Atp() {
    return (
        <div className={styles.atp}>
            <MainTitle title="ATP Players" />
            <AtpHistory />
        </div>
    );
}

export default Atp;
