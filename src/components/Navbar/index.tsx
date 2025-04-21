import { Link } from 'react-router-dom';
import styles from './style.module.less';

export const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}></div>
      </Link>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/">Blog</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/">People</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/">Spells</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/">Potions</Link>
        </li>
      </ul>
    </nav>
  );
};
