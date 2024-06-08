import linkedinIcon from "./assets/images/LinkedInIcon.png";
import githubIcon from "./assets/images/GitHubIcon.png";
import outlookIcon from "./assets/images/OutlookIcon.png";
export default function ContactCard() {
  return (
    <div className="contact-container">
      <a
        href="https://www.linkedin.com/in/shadman-hossain-30b9a2228/"
        target="_blank"
      >
        <img className="contact" src={linkedinIcon} alt="LinkedIn icon" />
      </a>
      <a
        className="contact-github"
        href="https://github.com/shadmanh123?tab=repositories"
        target="_blank"
      >
        <img className="contact" src={githubIcon} alt="GitHub icon" />
      </a>
      <a href="mailto:shadman_h@hotmail.com">
        <img
          className="contact"
          src={outlookIcon}
          alt="Microsoft Outlook icon"
        />
      </a>
    </div>
  );
}
