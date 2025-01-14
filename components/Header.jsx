import Link from "next/link";
import "./header.css";
import styles from "./Hero.module.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <div className={styles.overlayTex}>
            <span>SWEAT SYNC</span>
            {/* <span></span> */}
          </div>
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/classes" className="nav-link">
            Classes
          </Link>
          <Link href="/trainers" className="nav-link">
            Trainers
          </Link>
          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
