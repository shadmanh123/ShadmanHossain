import "./Footer.css";
import { Reveal } from "./effects";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <Reveal className="footer__inner">
        <p className="footer__cmd">&gt; ./lets_talk</p>
        <h2>Let&apos;s talk.</h2>
        <p className="footer__lead">
          Open to security engineering and pentesting roles, collaborations,
          and interesting problems.
        </p>
        <a className="footer__email" href="mailto:shadmanh@sfu.ca">
          shadmanh@sfu.ca
        </a>
        <div className="footer__links">
          <a href="https://github.com/shadmanh123" target="_blank" rel="noreferrer">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/shad256/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          <a href="https://medium.com/@shadman_h" target="_blank" rel="noreferrer">
            medium
          </a>
        </div>
        <p className="footer__copyright">
          © 2026 Shadman Hossain. All rights reserved
        </p>
      </Reveal>
    </footer>
  );
}
