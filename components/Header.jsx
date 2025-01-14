import Link from "next/link";
import "./header.css";
import styles from "./Hero.module.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className={styles.overlayTex}>
            <span>SWEAT SYNC</span>
            {/* <span></span> */}
          </div>
        </div>

        <nav className="navigation">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            DashBoard
          </Link>
          <Link href="/classes" className="nav-link">
            Tracking
          </Link>
          <Link href="/trainers" className="nav-link">
            Calories
          </Link>
          <Link href="/pricing" className="nav-link">
            Achievement
          </Link>
          <Link href="/blog" className="nav-link">
            Games
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
