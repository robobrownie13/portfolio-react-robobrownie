import "../styles/Navbar.css";

const Navbar = ({ handleNavClick }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <a href="#home" onClick={() => handleNavClick("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleNavClick("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => handleNavClick("portfolio")}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleNavClick("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
