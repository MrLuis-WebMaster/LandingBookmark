import BookMark from "../../Components/BookMark/BookMark";
import Features from "../../Components/Features/Features"
import Card from "../../Components/Card/Card";
import LogoChrome from "../../assets/images/logo-chrome.svg";
import LogoFirefox from "../../assets/images/logo-firefox.svg";
import LogoOpera from "../../assets/images/logo-opera.svg";
import styles from "./Main.module.scss";
import Questions from "../../Components/Questions/Questions";
import Newsletters from "../../Components/Newsletters/Newsletters";
import Footer from "../Footer/Footer";
const Main = () => {
    return (
        <>
            <main>
                <Features
                    title={"Features"}
                    parrafo={
                        " Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can acces them on the go."
                    }
                />
                <BookMark/>
                <Features
                    title={"Download the extension"}
                    parrafo={
                        "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
                    }
                />
                <section className={styles.Cards}>
                    <Card
                        logo={LogoChrome}
                        title={"Add to Chrome"}
                        p={"Minimun version 62"}
                    />
                    <Card
                        logo={LogoFirefox}
                        title={"Add to Chrome"}
                        p={"Minimun version 62"}               
                    />
                    <Card
                        logo={LogoOpera}
                        title={"Add to Chrome"}
                        p={"Minimun version 62"}                
                    />
                </section>
                <Features
                    title={"Frequently Asked Questions"}
                    parrafo={
                        "Here are some of our FAQs. If you have any others questions you'd like answered please feel free to email us"}
                />
                <Questions/>
            </main>
            <Newsletters/>
            <Footer/>            
        </>

    )
}
export default Main;