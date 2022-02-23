import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Questions.module.scss";
import iconArrow from "../../assets/images/icon-arrow.svg";

const Questions = () => {
    const [show,setShow] = useState({
        question1:false,
        question2:false,
        question3:false,
        question4:false,
    });
 
    return (
        <div className={styles.Questions}>
            <div onClick={()=> setShow( prevState => ({question1:!prevState.question1,}))}className={styles.Questions_info}>
                <div className={styles.Questions_title}>
                    <h4>What is Bookmark?</h4>
                    <img src={iconArrow} alt="" />
                </div>
                {show.question1 && (
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam recusandae optio, dignissimos quo vero ipsam quasi atque illo minus quae.</p>
                )
                }
            </div>
            <div onClick={()=> setShow( prevState => ({question2:!prevState.question2,}))}className={styles.Questions_info}>
                <div className={styles.Questions_title}>
                    <h4>How can I request a new browser?</h4>
                    <img src={iconArrow} alt="" />
                </div>               
                {show.question2 && (
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam recusandae optio, dignissimos quo vero ipsam quasi atque illo minus quae.</p>)
                }
            </div>
            <div onClick={()=> setShow( prevState => ({question3:!prevState.question3,}))}className={styles.Questions_info}>
                <div className={styles.Questions_title}>
                    <h4>Is there a mobile app?</h4>
                    <img src={iconArrow} alt="" />
                </div> 
                {show.question3 && (
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam recusandae optio, dignissimos quo vero ipsam quasi atque illo minus quae.</p>)
                }
            </div>
            <div onClick={()=> setShow( prevState => ({question4:!prevState.question4,}))}className={styles.Questions_info}>
                <div className={styles.Questions_title}>
                    <h4>What about other Chromium browsers?</h4>
                    <img src={iconArrow} alt="" />
                </div> 
                {show.question4 && (
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam recusandae optio, dignissimos quo vero ipsam quasi atque illo minus quae.</p>)
                }
            </div>
            <Button text={"More info"}/>
        </div>
    )
}

export default Questions;