import { Images } from "../../assets/media";
import styles from "./header-template.module.css";

export const HeaderTemplate = () => {
  return (
    <header className={styles["header-main-wrapper"]}>
      <img src={Images.Logo} alt="technologycal logo" />
    </header>
  );
};
