import styles from './Logo.module.css';

export const Logo = () => {
    return (
        <h1 className={styles.logo}>
            {/*<span role="img" aria-label="jesus cries">&#271D</span>*/}
            {/*<span role="img" aria-label="music notes">&#127926</span>*/}
            {/*<span role="img" aria-label="music keyboard">&#127929</span>*/}
            <span>Hello Music!</span>
        </h1>
    )
}
