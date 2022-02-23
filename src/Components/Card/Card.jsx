import Button from "../Button/Button";
import styles from "./Card.module.scss";
import bgDots from "../../assets/images/bg-dots.svg"
const Card = ({logo,title,p}) => {
    return (
        <div className={styles.Card}>
            <div className={styles.Card_info}>
                <img src={logo} alt="" />
                <h3>{title}</h3>
                <p>{p}</p>
            </div>
            <div>
                <img src={bgDots} alt="" />
            </div>
            <div className={styles.Card_button}>
                <Button
                    text="Add & Install Extension"
                />
            </div>
        </div>
    )
}

export default Card;