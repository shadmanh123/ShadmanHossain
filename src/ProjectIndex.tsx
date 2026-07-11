import { useState } from "react";
import "./ProjectIndex.css";

type Category = "ml" | "cloud" | "offense";
type Filter = "all" | Category;

interface Project {
  name: string;
  cat: Category;
  prize?: boolean;
  fortinet?: boolean;
  meta: string;
  tags: string;
  desc: string;
  gh?: string;
  ghLabel?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Adversarial ML for Network Intrusion Detection",
    cat: "ml",
    prize: true,
    meta: "CMPT 783 · 02–05/2026",
    tags: "TensorFlow · XGBoost · CICIDS2017",
    gh: "https://github.com/shadmanh123/ML-Based-Network-Intrusion-Detection-Systems",
    ghLabel: "GitHub ↗",
    desc: "Trained an AI system that spots hackers breaking into computer networks, catching 99.84% of attacks. Then played the attacker: generated thousands of disguised attack samples to find its blind spots and hardened it against them. Won SFU's Cybersecurity Innovation Prize.",
  },
  {
    name: "YankIt — Multi-Agent LLM Phishing Detection",
    cat: "ml",
    fortinet: true,
    meta: "Fortinet-mentored · 09–12/2025",
    tags: "LangGraph · FastAPI · React",
    gh: "https://github.com/shadmanh123/yankit",
    ghLabel: "GitHub (private repo) ↗",
    desc: "Built a tool that checks whether a link is a phishing scam. Five AI analysts each inspect a different part of a suspicious website and a judge weighs their findings, correctly flagging about 95% of scams and beating commercial tools.",
  },
  {
    name: "Cloud Security Automation",
    cat: "cloud",
    meta: "CMPT 782 · 11/2025",
    tags: "AWS · Terraform · Lambda",
    desc: "Set up automatic guardrails for a company's cloud accounts on Amazon Web Services. The system watches for risky settings around the clock and fixes many of them on its own, keeping everything aligned with an industry security standard.",
  },
  {
    name: "Mental Health Platform Pentest",
    cat: "offense",
    meta: "CMPT 782 · 10–12/2025",
    tags: "Burp Suite · sqlmap · ZAP",
    desc: "Acted as an ethical hacker for a live mental health platform: probed logins, sessions, and data access the way a real attacker would, found serious weaknesses, and delivered a prioritized report the team could act on right away.",
  },
];

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "ml", label: "AI / ML" },
  { key: "cloud", label: "CLOUD" },
  { key: "offense", label: "OFFENSE" },
];

export default function ProjectIndex() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section className="project-index" id="projects">
      <div className="project-index__head">
        <h2>Project index</h2>
        <div className="project-index__filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={filter === f.key ? "is-active" : ""}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="project-index__list">
        {visible.map((p) => (
          <div className="project-index__entry" key={p.name}>
            <div>
              <h3>
                {p.name}
                {p.prize && <span className="project-index__badge">PRIZE WINNER</span>}
                {p.fortinet && (
                  <span className="project-index__badge">
                    MENTORED BY FORTINET RESEARCHER
                  </span>
                )}
              </h3>
              <p>{p.desc}</p>
              {p.gh && (
                <a href={p.gh} target="_blank" rel="noreferrer">
                  {p.ghLabel}
                </a>
              )}
            </div>
            <span className="project-index__tags">{p.tags}</span>
          </div>
        ))}
      </div>
      <p className="project-index__earlier">
        Earlier work: Cloud ML Inference (GKE vs Serverless), Honeypot
        Monitoring, Guess The Era, Pacman AI, Trip Planner DB.
      </p>
    </section>
  );
}
