interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a onClick={() => scrollToSection("home")}>Home</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("about")}>About</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("resume")}>Resume</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
