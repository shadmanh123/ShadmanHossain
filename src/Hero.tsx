import "./Hero.css";

const STATS = [
  { label: "CyberSci 2025/26", value: "2nd in BC" },
  { label: "NIDS ensemble", value: "99.84% acc" },
  { label: "First client pentest", value: "9 findings" },
  { label: "MPCS GPA", value: "3.83 / 4.33" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__intro">
        <h1 className="hero__headline">
          Security engineer who builds what he breaks.
        </h1>
        <p className="hero__bio">
          I&apos;m Shadman Hossain, a pentester, adversarial ML researcher, and
          backend engineer. I&apos;m doing my Master&apos;s in Cybersecurity
          at SFU and have run production security assessments for fintech and
          health tech platforms.
        </p>
      </div>
      <div className="hero__stats">
        {STATS.map((stat) => (
          <div className="hero__stat" key={stat.label}>
            <span className="hero__stat-label">{stat.label}</span>
            <strong className="hero__stat-value">{stat.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
