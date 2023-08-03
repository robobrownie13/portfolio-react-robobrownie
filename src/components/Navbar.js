const Navbar = ({ handleNavClick }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleNavClick("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("about")}>About</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("portfolio")}>Portfolio</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
