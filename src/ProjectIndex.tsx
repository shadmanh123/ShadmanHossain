import { useState } from "react";
import "./ProjectIndex.css";
import { Reveal } from "./effects";

type Category = "ml" | "cloud" | "offense";
type Filter = "all" | Category;

interface Project {
  name: string;
  cat: Category;
  prize?: boolean;
  fortinet?: boolean;
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
    tags: "TensorFlow · XGBoost · CICIDS2017",
    gh: "https://github.com/shadmanh123/ML-Based-Network-Intrusion-Detection-Systems",
    ghLabel: "./github",
    desc: "Trained an AI system that spots hackers breaking into computer networks, catching 99.84% of attacks. Then played the attacker: generated thousands of disguised attack samples to find its blind spots and hardened it against them. Won SFU's Cybersecurity Innovation Prize.",
  },
  {
    name: "YankIt — Multi-Agent LLM Phishing Detection",
    cat: "ml",
    fortinet: true,
    tags: "LangGraph · FastAPI · React",
    gh: "https://github.com/shadmanh123/yankit",
    ghLabel: "./github (private)",
    desc: "Built a tool that checks whether a link is a phishing scam. Five AI analysts each inspect a different part of a suspicious website and a judge weighs their findings, correctly flagging about 95% of scams and beating commercial tools.",
  },
  {
    name: "Cloud Security Automation",
    cat: "cloud",
    tags: "AWS · Terraform · Lambda",
    desc: "Set up automatic guardrails for a company's cloud accounts on Amazon Web Services. The system watches for risky settings around the clock and fixes many of them on its own, keeping everything aligned with an industry security standard.",
  },
  {
    name: "Mental Health Platform Pentest",
    cat: "offense",
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

const MORE: { label: string; href: string }[] = [
  {
    label: "cloud_ml_inference",
    href: "https://github.com/shadmanh123/CC-Fraud-Containerized-vs-Serverless",
  },
  { label: "honeypot_monitoring", href: "https://github.com/shadmanh123/honeypot" },
  { label: "guess_the_era", href: "https://github.com/shadmanh123/GuessTheEra" },
  { label: "pacman_ai", href: "https://github.com/shadmanh123/Pacman-AI-Project" },
  {
    label: "trip_planner_db",
    href: "https://github.com/shadmanh123/Trip-Planner-Database",
  },
];

export default function ProjectIndex() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section className="section" id="projects">
      <Reveal className="section__inner">
        <div className="section__head">
          <h2>
            <span className="hash">##</span>Projects
          </h2>
          <div className="pillbar">
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

        <div className="projects__grid">
          {visible.map((p) => (
            <div className="projects__card" key={p.name}>
              {(p.prize || p.fortinet) && (
                <div className="projects__badges">
                  {p.prize && (
                    <span className="projects__badge projects__badge--prize">
                      PRIZE_WINNER
                    </span>
                  )}
                  {p.fortinet && (
                    <span className="projects__badge projects__badge--fortinet">
                      MENTORED_BY_FORTINET
                    </span>
                  )}
                </div>
              )}
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="projects__card-foot">
                {p.gh ? (
                  <a href={p.gh} target="_blank" rel="noreferrer">
                    {p.ghLabel}
                  </a>
                ) : (
                  <span />
                )}
                <span className="projects__tags">{p.tags}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__more">
          <span>more:</span>
          {MORE.map((m, i) => (
            <span key={m.href} className="projects__more-item">
              <a href={m.href} target="_blank" rel="noreferrer">
                {m.label}
              </a>
              {i < MORE.length - 1 && <span className="projects__dot">·</span>}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
