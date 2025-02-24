import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Images } from "../../assets/media";
import { NAVBAR_ITEMS } from "../../common/constants";
import { Button } from "../../components/button/button";
import { IconButton } from "../../components/icon-button/icon-button";
import styles from "./header-template.module.css";

export const HeaderTemplate = () => {
  return (
    <header className={styles["header-main-wrapper"]}>
      <img src={Images.Logo} alt="technologycal logo" />

      <nav className={styles["header-navbar-wrapper"]}>
        {NAVBAR_ITEMS.map((item) => (
          <Link
            key={item.id}
            className={styles["header-navbar-link"]}
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles["cta-header-container"]}>
        <IconButton className={styles["header-cart-icon-container"]}>
          <ShoppingCart color="white" />
        </IconButton>

        <Button variant="transparent" size="small">
          Sign in
        </Button>
      </div>
    </header>
  );
};
