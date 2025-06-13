import styles from "./Goal.module.css";

function Goal({icon, events, period, details, goal, finished}) {
  return (
    <div className={styles.goal + " tarjeta"}>
      <div className="flex items-center">
        <div className={styles.icon}>{icon}</div>
        <p className="text-xl ml-5 mr-10">
          {events}
          <sub className="text-xs text-gray-500 ml-1">/ {period}</sub>
        </p>
        <p>{details}</p>
      </div>

      <div className="flex">
        <div className="relative m-2 mx-5">
          <p className="text-center">
            {finished} de {goal}
          </p>
          <div className={styles.bar1}>
            <div className={styles.bar2} style={{ width: `${Math.round((finished / goal) * 100)}%` }}></div>
          </div>
        </div>
        <button className="button button--gray">Completado</button>
      </div>
    </div>
  );
}

export default Goal;
