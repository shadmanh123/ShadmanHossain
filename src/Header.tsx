import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__wordmark">
        SH
      </a>
      <nav className="header__nav">
        <a href="#experience">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="header__nav-cta">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
