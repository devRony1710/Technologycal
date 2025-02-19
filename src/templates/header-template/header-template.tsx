import { Link } from "react-router-dom";
import { Images } from "../../assets/media";
import styles from "./header-template.module.css";

export const HeaderTemplate = () => {
  return (
    <header className={styles["header-main-wrapper"]}>
      <img src={Images.Logo} alt="technologycal logo" />

      <nav className={styles["header-navbar-wrapper"]}>
        <Link className={styles["header-navbar-link"]} to="/">
          Home
        </Link>
        <Link className={styles["header-navbar-link"]} to="/features">
          Features
        </Link>
        <Link className={styles["header-navbar-link"]} to="/resources">
          Resources
        </Link>
        <Link className={styles["header-navbar-link"]} to="/pricing">
          Pricing
        </Link>
        <Link className={styles["header-navbar-link"]} to="/blog">
          Blog
        </Link>
      </nav>
    </header>
  );
};
