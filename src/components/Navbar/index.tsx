import "./style.css";

export const Navbar = (): JSX.Element => {
  return (
    <div className="container-navbar">
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__menu--item">Navbar Item</li>
          <li className="navbar__menu--item">Navbar Item</li>
          <li className="navbar__menu--item">Navbar Item</li>
          <li className="navbar__menu--item">Navbar Item</li>
        </ul>
      </nav>
    </div>
  );
};
