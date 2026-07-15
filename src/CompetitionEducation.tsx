import "./CompetitionEducation.css";
import { Reveal } from "./effects";

export default function CompetitionEducation() {
  return (
    <section className="section" id="achievements">
      <Reveal className="cred">
        <div className="cred__card">
          <h2>
            <span className="hash">##</span>Recognition
          </h2>
          <div className="cred__list">
            <p>
              <strong>2nd in BC, 23rd in Canada</strong> · CyberSci 2025/26
              Regional Finals
            </p>
            <p>
              <strong>Co-founder and Admin, SFU CTF Group</strong> · mentoring
              undergraduates in web exploitation, forensics, and networks
            </p>
          </div>
        </div>
        <div className="cred__card">
          <h2>
            <span className="hash">##</span>Education
          </h2>
          <div className="cred__list">
            <p>
              <strong>Master&apos;s in Professional Computer Science,
              Cybersecurity</strong>{" "}
              · Simon Fraser University (GPA 3.83/4.33)
            </p>
            <p>
              <strong>BSc, Molecular Biology/Biochem &amp; Computing
              Science</strong>{" "}
              · Simon Fraser University
            </p>
            <p>
              <strong>Cert: Introductory NLP for Phishing Detection</strong> ·
              Northeastern University
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
