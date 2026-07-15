import "./CompetitionEducation.css";
import { Reveal } from "./effects";

export default function CompetitionEducation() {
  return (
    <section className="section section--top-rule" id="achievements">
      <Reveal className="section__inner">
        <div className="section__head">
          <h2>
            <span className="hash">##</span>Achievements
          </h2>
        </div>
        <div className="cred">
          <div className="cred__card">
            <h3>Recognition</h3>
            <div className="cred__list">
              <p>
                <strong>2nd in BC, 23rd in Canada</strong> · CyberSci 2025/26
                Regional Finals
              </p>
              <p>
                <strong>Co-founder and Admin, SFU CTF Group</strong> ·
                mentoring undergraduates in web exploitation, forensics, and
                networks
              </p>
            </div>
          </div>
          <div className="cred__card">
            <h3>Education</h3>
            <div className="cred__list">
              <p>
                <strong>
                  Master&apos;s in Professional Computer Science, Cybersecurity
                </strong>{" "}
                · Simon Fraser University (GPA 3.83/4.33)
              </p>
              <p>
                <strong>
                  BSc, Molecular Biology/Biochem &amp; Computing Science
                </strong>{" "}
                · Simon Fraser University
              </p>
              <p>
                <strong>Cert: Introductory NLP for Phishing Detection</strong> ·
                Northeastern University
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
