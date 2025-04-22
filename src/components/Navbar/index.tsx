import { Link } from "react-router-dom";
import styles from "./style.module.less";

export const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}></div>
      </Link>

      <ul className={styles.navbarMenu}>
        <li className={styles.navbarMenu_Item}>
          <Link to="/">Blog</Link>
        </li>
        <li className={styles.navbarMenu_Item}>
          <Link to="/">People</Link>
        </li>
        <li className={styles.navbarMenu_Item}>
          <Link to="/">Spells</Link>
        </li>
        <li className={styles.navbarMenu_Item}>
          <Link to="/">Potions</Link>
        </li>
      </ul>
    </nav>
  );
};
