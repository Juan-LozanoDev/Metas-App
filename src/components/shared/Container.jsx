import styles from "./Container.module.css";
import Vinculo from "./Vinculo";
import { ReactComponent as ListSVG } from "../../img/lista.svg";
import { ReactComponent as NewSVG } from "../../img/nueva.svg";


function Container({ children }) {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Vinculo to="/list" text="Lista de Metas" Icon={ListSVG}></Vinculo>
        <Vinculo to="/new" text="Nueva Meta" Icon={NewSVG}></Vinculo>
      </aside>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Container;
