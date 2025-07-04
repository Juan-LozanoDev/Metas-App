import Vinculo from './Vinculo';
import { ReactComponent as ListSVG } from "../../img/lista.svg";
import { ReactComponent as NewSVG } from "../../img/nueva.svg";
import styles from "./Aside.module.css";

function Aside() {
  return (
    <aside className={styles.aside}>
        <Vinculo to="/list" text="Lista de Metas" Icon={ListSVG}></Vinculo>
        <Vinculo to="/new" text="Nueva Meta" Icon={NewSVG}></Vinculo>
      </aside>
  )
}

export default Aside;