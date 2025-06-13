import styles from './Link.module.css'

function Link ({Icon, text, href}) {
    return (
        <a href={href} className={styles.link}>
            <Icon className={styles.icon} />
            {text && <span className={styles.text}>{text}</span>}
        </a>
    )
}

export default Link;