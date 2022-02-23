import styles from "./Features.module.scss"
const Features = ({title,parrafo}) => {
    return(
        <section className={styles.Features}>
            <h2>{title}</h2>
            <p>
                {parrafo}
            </p>
        </section>
    )
}

export default Features;