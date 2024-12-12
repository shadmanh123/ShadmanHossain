import linkedinIcon from "/images/LinkedInIcon.webp";
import githubIcon from "/images/GitHubIcon.webp";
import outlookIcon from "/images/OutlookIcon.webp";
import "./ConnectPage.css";
export default function connectPageRef() {
  return (
    <div className="connect-page">
      <div id="connect-page__icons">
        <a
          href="https://www.linkedin.com/in/shadman-hossain-30b9a2228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="connect" src={linkedinIcon} alt="LinkedIn icon" />
        </a>
        <a
          href="https://github.com/shadmanh123?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="connect" src={githubIcon} alt="GitHub icon" />
        </a>
        <a href="mailto:shadman_h@hotmail.com">
          <img
            className="connect"
            src={outlookIcon}
            alt="Microsoft Outlook icon"
          />
        </a>
      </div>
    </div>
  );
}
