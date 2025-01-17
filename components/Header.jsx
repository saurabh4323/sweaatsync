"use client";
import Link from "next/link";
import "./header.css";
import styles from "./Hero.module.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className={styles.overlayTa}>
            <span>SWEAT SYNC</span>
            {/* <span></span> */}
          </div>
        </div>

        <nav className="navigation">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/dashboard" className="nav-link">
            DashBoard
          </Link>
          <Link href="/tracking" className="nav-link">
            Tracking
          </Link>
          <Link href="/calories" className="nav-link">
            Calories
          </Link>
          <Link href="/achivement" className="nav-link">
            Achievement
          </Link>
          <Link href="/community" className="nav-link">
            Community
          </Link>
          <Link href="/contact" className="nav-link">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
