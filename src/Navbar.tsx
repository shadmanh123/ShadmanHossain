interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  return (
    <header>
      <nav className="navbar" aria-label="Main Navigation">
        <ul className="nav-list">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("resume");
              }}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#connect"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("connect");
              }}
            >
              Connect
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
