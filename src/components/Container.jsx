import styles from "./Container.module.css";
import Link from "./Link";
import { ReactComponent as ListSVG } from "../img/lista.svg";
import { ReactComponent as NewSVG } from "../img/nueva.svg";
import Goal from '../list/Goal'
import List from "../list/List";

function Container({ children }) {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Link href="/list" text="Lista de Metas" Icon={ListSVG}></Link>
        <Link href="/create" text="Nueva Meta" Icon={NewSVG}></Link>
      </aside>
      <main className={styles.main}><List /></main>
    </div>
  );
}

export default Container;
