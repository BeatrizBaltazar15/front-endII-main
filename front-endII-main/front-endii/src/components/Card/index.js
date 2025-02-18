import styles from './Card.module.css';
export default function Card ({id, raça, tempovida}) {
    return(
        <div className={styles.div}>
            <h2>{id} - {raça}</h2>
            <p>{raça}</p>
            <p>{tempovida}</p>
        </div>
    )
}