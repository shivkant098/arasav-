import React from "react";
import styles from '../../styles/navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContent}>
                <div className={styles.navItems}>

                    <ul>
                    <img src="https://d33wubrfki0l68.cloudfront.net/3fe66c68786770bea4e7921b088f061c3d34fd73/b24b2/images/files/logo-header.png" alt="nav-logo" className={styles.navLogo}/>

                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">services</a></li>
                        <li><a href="/Teams">Teams</a></li>
                        <li><a href="/contact">Contact</a></li>




                    </ul>
                </div>
                </div> 
        </div>
    );
}

export default Navbar;
