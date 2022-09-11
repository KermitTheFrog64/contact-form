import React from "react";
import styles from './Header.module.css'
import logo from '../common/logo.svg'

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div>
                <div className={styles.burger}></div>
                <div className={styles.burger}></div>
                <div className={styles.burger}></div>
            </div>

            <img src={logo} />

            <button className={styles.btn} >Sign up</button>
        </header>
    )
}

export default Header;