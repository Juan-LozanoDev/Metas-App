import styles from './Header.module.css'
import Link from './Link'
import { ReactComponent as LogoSVG} from '../img/logo.svg'
import { ReactComponent as ProfileSVG} from '../img/perfil.svg'


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logocontainer}>
          <LogoSVG className={styles.logo}/>
        <a href="/" className={styles.title}>Metas App</a>
      </div>
      <nav>
        <Link href="/profile" Icon={ProfileSVG}/>
      </nav>
    </header>
  );
}

export default Header;
