import "../styles/Navbar.css";

const Navbar = ({ handleNavClick }) => {
  return (
    <div className="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation_icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="#home" onClick={() => handleNavClick("home")}>
              Home
            </a>
          </li>
          <li class="navigation__item">
            <a href="#about" onClick={() => handleNavClick("about")}>
              About
            </a>
          </li>
          <li class="navigation__item">
            <a href="#portfolio" onClick={() => handleNavClick("portfolio")}>
              Portfolio
            </a>
          </li>
          <li class="navigation__item">
            <a href="#contact" onClick={() => handleNavClick("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
