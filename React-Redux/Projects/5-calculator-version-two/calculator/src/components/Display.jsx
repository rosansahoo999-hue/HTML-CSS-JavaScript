import styles from "./Display.module.css";

const Dispaly = ({ displayValue }) => {
    return <input className={styles.display} type="text" value={displayValue} readOnly />
}

export default Dispaly;