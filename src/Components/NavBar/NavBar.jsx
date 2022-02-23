import { useState } from "react";
import NavMobile from "../NavMobile/NavMobile";
import styles from "./NavBar.module.scss";
import LogoBookmark from "../../assets/images/logo-bookmark.svg";
import MenuBurguer from "../../assets/images/icon-hamburger.svg";

const NavBar = () => {
    const [toggle,setToggle] = useState({
        active:false
    });
    const handleClick = () => {
        setToggle( prevState => ({active:!prevState.active}))
        console.log(toggle.active)
    }
    return (
        <nav className={styles.Nav}>
            <div className={styles.Nav_logo}>
                <a href="/">
                   <img src={LogoBookmark} alt="" />
                </a>
            </div>
            <div onClick={()=>{handleClick()}} className={styles.Nav_MenuBurguer}>
                <img src={MenuBurguer} alt="" />
            </div>
            {toggle.active && (
                <NavMobile
                    handleClick={handleClick}
                />
            )}
            <div className={styles.Nav_enlaces}>
                <a href="#features">features</a>
                <a href="#pricing">pricing</a>
                <a href="#contact">contact</a>
                <a href="/">login</a>
            </div>
        </nav>
    )
}

export default NavBar;