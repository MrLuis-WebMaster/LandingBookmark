import { useState } from "react";
import Button from "../Button/Button";
import styles from "./BookMark.module.scss";
import Ilustration from "../../assets/images/illustration-features-tab-1.svg"
import Ilustration2 from "../../assets/images/illustration-features-tab-2.svg"
import Ilustration3 from "../../assets/images/illustration-features-tab-3.svg"

const BookMark = () => {
    const [option, setOption] = useState("");
    const HandleClick = ( e ) => {
        setOption(e.target.textContent);
    }
    console.log(styles)
    if (option === "Simple Bookmarking" || option === "") {
        return (
            <div className={styles.Box_Bookmark}>
                <div className={styles.Box_Bookmark_Button}>
                    <div className={`${styles.Box_button} ${styles.active}`} >
                        <button onClick={e=>{HandleClick(e)}}>Simple Bookmarking</button>
                    </div>
                    <div className={styles.Box_button}>
                        <button onClick={e=>{HandleClick(e)}}>Speedy Searching</button>
                    </div>
                    <div className={styles.Box_button}>
                        <button onClick={e=>{HandleClick(e)}}>Easy Sharing</button>
                    </div>
                </div>
                <section className={styles.BookMark}>
                    <div className={styles.BookMark_img}>
                        <img src={Ilustration} alt="" />
                    </div>
                    <div className={styles.BookMark_info}>
                        <h2>
                            Bookmark in one click 
                        </h2>
                        <p>
                            Organize your bookmarks however you like. Our simple
                            drag-and-drop interface gives you complete control over 
                            how you manage your favorites sites.
                        </p>
                        <div className={styles.BookMark_info_button} >
                            <Button
                                text={"More info"}
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    
    if (option === "Speedy Searching") {
        return (
            <div className={styles.Box_Bookmark}>
                <div className={styles.Box_Bookmark_Button}>
                    <div className={styles.Box_button}>
                        <button onClick={e=>{HandleClick(e)}}>Simple Bookmarking</button>
                    </div>
                    <div className={`${styles.Box_button} ${styles.active}`}>
                        <button onClick={e=>{HandleClick(e)}}>Speedy Searching</button>
                    </div>
                    <div className={styles.Box_button}>
                        <button onClick={e=>{HandleClick(e)}}>Easy Sharing</button>
                    </div>
                </div>
                <section className={styles.BookMark}>
                    <div className={styles.BookMark_img}>
                        <img src={Ilustration2} alt="" />
                    </div>
                    <div className={styles.BookMark_info}>
                        <h2>
                            Intelligent search
                        </h2>
                        <p>
                            Our powerful search feature will help you find saved
                            sites in no time at all. No need to trawl through all 
                            of your bookmarks.
                        </p>
                        <div className={styles.BookMark_info_button} >
                            <Button
                                text={"More info"}
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    } 

    if (option === "Easy Sharing") {
        return (
            <div className={styles.Box_Bookmark}>
                <div className={styles.Box_Bookmark_Button}>
                    <div className={styles.Box_button}>
                        <button onClick={e=>{HandleClick(e)}}>Simple Bookmarking</button>
                    </div>
                    <div className={styles.Box_button}>
                        <button onClick={e=>{HandleClick(e)}}>Speedy Searching</button>
                    </div>
                    <div className={`${styles.Box_button} ${styles.active}`}>
                        <button onClick={e=>{HandleClick(e)}}>Easy Sharing</button>
                    </div>
                </div>
                <section className={styles.BookMark}>
                    <div className={styles.BookMark_img}>
                        <img src={Ilustration3} alt="" />
                    </div>
                    <div className={styles.BookMark_info}>
                        <h2>
                           Share your bookmarks
                        </h2>
                        <p>
                            Easily share your bookmarks and collections with others.
                            Create a shareable link that you can send at the click of a button.
                        </p>
                        <div className={styles.BookMark_info_button} >
                            <Button
                                text={"More info"}
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    } 

}

export default BookMark;