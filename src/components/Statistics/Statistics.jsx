import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
     {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles.item}>
            <span className="label">{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,  
};

export default Statistics
