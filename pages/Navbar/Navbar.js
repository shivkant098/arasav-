import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/navbar.module.css'; // Assuming the file is in the same directory

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Optional: Close menu on link click
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Your logo or brand name */}
        <Link href="/" legacyBehavior>
          <a >
            <img src="https://d33wubrfki0l68.cloudfront.net/3fe66c68786770bea4e7921b088f061c3d34fd73/b24b2/images/files/logo-header.png" alt="nav-logo"className={styles.navLogo} />
          </a>
        </Link>

        {/* Navigation links */}
        <ul className={`${styles.navItems} ${isMenuOpen ? styles.active : ''}`}>
        <Link href='/'><li>Home</li></Link>
          <li>
            <Link href="/about" >
              About
            </Link>
          </li>
          <li>
          <Link href="/services/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/teams">
              Teams
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Toggle button for mobile view */}
        <button
          className={styles.menuToggle}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
