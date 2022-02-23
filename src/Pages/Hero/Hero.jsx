import NavBar from "../../Components/NavBar/NavBar"
import Button from "../../Components/Button/Button"
import IlutstrationHero from "../../assets/images/illustration-hero.svg"
import styles from "./Hero.module.scss";
const Hero = () => {
    return (
        <header>
            <NavBar/>
            <div className={styles.Hero}>
                <div className={styles.Hero_info}>
                    <h1>
                        A Simple Bookmark Manager 
                    </h1>
                    <p>
                        A clean and simple interface to organize your favourite
                        websites. Open a new browser tab and see your sites load
                        instatly. Try it for free.
                    </p>
                    <div className={styles.Hero_info_button}>
                        <Button
                            text={"Get it on Chrome"}
                        />
                        <Button
                            text={"Get it on Firefox"}
                        />
                    </div>
                </div>
                <div className={styles.Hero_img}>
                    <img src={IlutstrationHero} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Hero;