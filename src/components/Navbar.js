import "../styles/Navbar.css";

const Navbar = ({ handleNavClick }) => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation_icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#home"
              className="navigation__link"
              onClick={() => handleNavClick("home")}
            >
              Home
            </a>
          </li>
          <li classNam="navigation__item">
            <a
              href="#about"
              className="navigation__link"
              onClick={() => handleNavClick("about")}
            >
              About
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#portfolio"
              className="navigation__link"
              onClick={() => handleNavClick("portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#contact"
              className="navigation__link"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
