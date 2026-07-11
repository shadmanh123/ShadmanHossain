import { useState } from "react";
import "./Experience.css";

type Track = "sec" | "dev";

interface ExperienceEntry {
  role: string;
  company: string;
  loc: string;
  dates: string;
  sec: string[];
  dev: string[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Security Consultant",
    company: "Ledgrly (Freelance)",
    loc: "Vancouver, BC",
    dates: "09/2025 – 10/2025",
    sec: [
      "Planned and ran the organization's first end-to-end penetration test, identifying critical vulnerabilities across authentication, access control, and infrastructure before production.",
      "Uncovered 9 key findings — leaked credentials, SSRF, CSP misconfigurations, legacy TLS, insecure Docker/Nginx — via automated scanning (gitleaks, semgrep, trivy, ZAP) plus manual validation.",
      "Translated technical vulnerabilities into a board-ready risk report adopted by leadership as the platform's formal compliance roadmap.",
    ],
    dev: [
      "Reviewed microservices backend and containerized Docker deployments; assessed CI/CD pipelines for secret management, dependency security, and deployment hardening.",
      "Combined automated scans (GitLeaks, Trivy, Semgrep) with manual verification to cut false positives.",
      "Delivered structured findings reports to engineering stakeholders and helped implement secure code review procedures.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Twiine",
    loc: "Vancouver, BC",
    dates: "10/2024 – Present",
    sec: [
      "Designed secure REST APIs (Node.js, Express, MongoDB) with JWT/OAuth 2.0 and bcrypt hashing, deployed on AWS with MongoDB Atlas.",
      "Hardened the backend with TDD, input validation, token expiration, and session lifecycle controls — eliminating credential and session vulnerability classes before production.",
      "Coached the team on access control and secure SDLC patterns through security-focused code reviews every sprint.",
    ],
    dev: [
      "Built modular REST APIs on a Controller-Service-Repository pattern for scalability and seamless future microservice migration.",
      "Implemented aggregation logic and data validation supporting analytics, reporting, and cross-workflow consistency.",
      "Collaborated with front-end teams in Agile sprints; broke features into pointed tasks and reduced regressions through systematic reviews and documentation.",
    ],
  },
  {
    role: "Junior Systems Administrator",
    company: "Glentel",
    loc: "Burnaby, BC",
    dates: "01/2023 – 09/2024",
    sec: [
      "Triaged Sophos Central endpoint alerts across 500+ endpoints using forensic procedures — log preservation and structured evidence documentation — with a 99% resolution rate.",
      "Administered Active Directory enforcing least-privilege across fully auditable onboarding/offboarding workflows.",
      "Delivered security awareness training that cut repeat incident recurrence organization-wide.",
    ],
    dev: [
      "Delivered Tier 1-2 support for 500+ endpoints across 300+ retail sites in Canada with a 99% resolution rate.",
      "Managed nationwide POS systems and logistics supporting $100M in monthly revenue; tracked 10,000+ assets.",
      "Standardized troubleshooting steps and escalation paths in SOPs and knowledge base articles, improving team efficiency.",
    ],
  },
];

export default function Experience() {
  const [track, setTrack] = useState<Track>("sec");

  return (
    <section className="experience" id="experience">
      <div className="experience__head">
        <h2>Experience</h2>
        <div className="experience__toggle">
          <button
            type="button"
            className={track === "sec" ? "is-active" : ""}
            onClick={() => setTrack("sec")}
          >
            SECURITY
          </button>
          <button
            type="button"
            className={track === "dev" ? "is-active" : ""}
            onClick={() => setTrack("dev")}
          >
            SOFTWARE
          </button>
        </div>
      </div>
      <div className="experience__list">
        {EXPERIENCE.map((entry) => (
          <div className="experience__entry" key={entry.role + entry.company}>
            <div className="experience__meta">
              <div className="experience__dates">{entry.dates}</div>
              <div className="experience__loc">{entry.loc}</div>
            </div>
            <div>
              <h3>
                {entry.role} · <span className="experience__company">{entry.company}</span>
              </h3>
              <ul>
                {(track === "sec" ? entry.sec : entry.dev).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
