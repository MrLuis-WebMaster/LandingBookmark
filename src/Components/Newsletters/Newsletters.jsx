import { useState } from "react";
import styles from "./Newsletters.module.scss"

const Newsletters = () => {
    const [checkEmail,setCheckEmail] = useState("");
    const [errors,setErrors] = useState("")
    const handleInput = (e) => {
        const reg =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        setCheckEmail(e.target.value);
        console.log(reg.test(checkEmail))
        if (checkEmail === "") {
            setErrors("Enter an email");
        } else if (!reg.test(checkEmail)) {
            setErrors("Whoops, male sure it's an email");
        } else {
            setErrors("")
        }
    }
    return (
        <div className={styles.Newsletters}>
            <p>35,000+ ALREADY JOINED</p>
            <h3>Stay up-to-date with what we're doing</h3>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <div>
                    <input onChange={(e)=>handleInput(e)} type="email" placeholder="Enter your email address"/>
                    {errors === "" || checkEmail === "" ? ("") : (<span>{errors}</span>)}
                </div>
                <button type="submit">Contac Us</button>
            </form>
        </div>
    )
}

export default Newsletters;