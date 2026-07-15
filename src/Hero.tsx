import "./Hero.css";
import { Reveal } from "./effects";
import { useTypewriter } from "./useTypewriter";

const ROLES = [
  "pentester",
  "adversarial ML researcher",
  "backend engineer",
];

const STATS = [
  { value: "99.84%", label: "detection accuracy, NIDS project" },
  { value: "2nd_in_BC", label: "CyberSci 2025/26 regionals" },
  { value: "9_findings", label: "first client pentest" },
  { value: "3.83", label: "MPCS GPA / 4.33" },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <p className="hero__typed">
          &gt; {typed}
          <span className="hero__cursor" aria-hidden="true" />
        </p>
        <h1 className="hero__headline">
          Security engineer who
          <br />
          builds what he breaks.
        </h1>
        <p className="hero__bio">
          I&apos;m Shadman Hossain, a pentester, adversarial ML researcher, and
          backend engineer. Currently a Master&apos;s candidate in
          Cybersecurity at SFU, with production security assessments for fintech
          and health tech platforms.
        </p>
        <div className="hero__cta">
          <a href="#contact">./get_in_touch</a>
          <a href="https://github.com/shadmanh123" target="_blank" rel="noreferrer">
            ./see_the_work
          </a>
        </div>
      </div>

      <Reveal className="hero__stats">
        {STATS.map((stat) => (
          <div className="hero__stat" key={stat.value}>
            <div className="hero__stat-value">{stat.value}</div>
            <div className="hero__stat-label">{stat.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
