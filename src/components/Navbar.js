import "../styles/Navbar.css";

const Navbar = ({ handleNavClick }) => {
  return (
    <div className="navigation">
      <input type="checkbox" class="navigation_checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation_button">
        <span class="navigation_icon">&nbsp;</span>
      </label>
      <div class="navigation_background">&nbsp;</div>

      <nav class="navigation_nav">
        <ul class="navigation_list">
          <li class="navigation_item">
            <a href="#home" onClick={() => handleNavClick("home")}>
              Home
            </a>
          </li>
          <li class="navigation_item">
            <a href="#about" onClick={() => handleNavClick("about")}>
              About
            </a>
          </li>
          <li class="navigation_item">
            <a href="#portfolio" onClick={() => handleNavClick("portfolio")}>
              Portfolio
            </a>
          </li>
          <li class="navigation_item">
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
