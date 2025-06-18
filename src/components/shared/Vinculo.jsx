import { Link } from 'react-router';
import styles from './Vinculo.module.css'

function Vinculo ({Icon, text, to}) {
    return (
        <Link to={to} className={styles.link}>
            <Icon className={styles.icon} />
            {text && <span className={styles.text}>{text}</span>}
        </Link>
    )
}

export default Vinculo;