import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2>Let&apos;s talk.</h2>
      <p>
        Open to security engineering and pentesting roles, collaborations,
        and interesting problems.
      </p>
      <a className="footer__email" href="mailto:shadmanh@sfu.ca">
        shadmanh@sfu.ca
      </a>
      <div className="footer__links">
        <a href="https://github.com/shadmanh123" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shad256/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://medium.com/@shadman_h" target="_blank" rel="noreferrer">
          Medium
        </a>
      </div>
      <p className="footer__copyright">
        © 2026 Shadman Hossain. All rights reserved
      </p>
    </footer>
  );
}
