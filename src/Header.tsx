import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__prompt">
        shadman@sfu:~$
      </a>
      <nav className="header__nav">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact" className="header__nav-cta">
          Contact
        </a>
      </nav>
    </header>
  );
}
