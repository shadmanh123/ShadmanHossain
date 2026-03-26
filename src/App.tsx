import { useEffect, useState } from "react";
import "./App.css";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
};

type ProjectItem = {
  name: string;
  context: string;
  dates: string;
  outcomes: string[];
};

type BlogPost = {
  title: string;
  link: string;
  publishedAt: string;
};

type BlogStatus = "loading" | "ready" | "error";

const MEDIUM_PROFILE_URL = "https://medium.com/@shadman_h";
const MEDIUM_FEED_URL = "https://medium.com/feed/@shadman_h";
const BLOG_LIMIT = 3;

const experiences: ExperienceItem[] = [
  {
    role: "Security Consultant",
    company: "Ledgrly (Freelance)",
    location: "Vancouver, BC",
    dates: "09/2025 - 10/2025",
    highlights: [
      "Security Assessment: Conducted a comprehensive security audit of a production AI SaaS platform, identifying and prioritizing 9 critical vulnerabilities to harden the environment against real-world threats.",
      "Full-Stack Analysis: Performed deep-dive static and dynamic analysis (SAST/DAST) across the application, container, and infrastructure layers using industry-standard tooling.",
      "Infrastructure Hardening: Evaluated and strengthened cloud-native configurations, including Supabase RLS enforcement, container security posture, and Nginx/Docker orchestration.",
      "Remediation & Strategy: Partnered with the engineering team to deliver a roadmap for secure CI/CD integration, secrets management, and automated dependency patching.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Twiine",
    location: "Vancouver, BC",
    dates: "10/2024 - Present",
    highlights: [
      "Architected Secure Foundations: Designed and deployed RESTful APIs using Node.js and MongoDB, prioritizing a \"secure-by-design\" approach through OAuth 2.0 and JWT integration for robust identity management.",
      "Proactive Hardening: Scaled backend resilience by implementing Test-Driven Development (TDD) and strictly enforced input validation and token lifecycle workflows to mitigate common injection and session-hijacking vectors.",
      "Collaborative Security Culture: Championed code quality within an Agile framework, leading security-focused peer reviews and triaging complex issues to ensure a high-velocity, low-risk development cycle.",
    ],
  },
  {
    role: "Junior Systems Administrator",
    company: "Glentel",
    location: "Burnaby, BC",
    dates: "01/2023 - 09/2024",
    highlights: [
      "IAM Lifecycle Management: Managed the full identity lifecycle for a large-scale workforce, leveraging Active Directory to ensure the Principle of Least Privilege (PoLP) during account provisioning and offboarding.",
      "Incident Response & Documentation: Acted as a key point of contact for access-related security incidents, triaging and resolving complex IAM issues while maintaining rigorous audit trails within the ticketing system.",
      "Vulnerability & Hygiene Oversight: Drove endpoint security by monitoring \"hygiene\" workflows, specifically targeting unpatched or offline assets to reduce the corporate attack surface.",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    name: "LLM Security (Fortinet) & Adversarial Testing",
    context: "Cybersecurity Lab I CMPT 782",
    dates: "09/2025 - Present",
    outcomes: [
      "Built a phishing detection system using multi-agent LLM debate and consensus logic with 95% accuracy.",
      "Orchestrated parallel agent workflows using LangGraph with escalation to a judge agent.",
      "Simulated prompt injection, SSTI, XXE, and RAG poisoning attacks to test model resilience.",
      "Implemented defenses including system prompt hardening, input validation, and token-based access control.",
    ],
  },
  {
    name: "Penetration Testing for a Mental Health Platform",
    context: "Cybersecurity Lab I CMPT 782",
    dates: "10/2025 - 12/2025",
    outcomes: [
      "Performed penetration testing of authentication, session handling, and API access control.",
      "Identified high-impact vulnerabilities using Burp Suite, sqlmap, and ZAP.",
      "Delivered an OWASP-aligned report with risk ratings and remediations including HSTS, CSP enforcement, and tighter token handling.",
    ],
  },
  {
    name: "Cloud Security Automation",
    context: "Cybersecurity Lab I CMPT 782",
    dates: "11/2025",
    outcomes: [
      "Implemented CIS v3.0.0 security benchmarks across AWS Organizations in a multi-account setup.",
      "Audited IAM, storage, logging, monitoring, and networking with AWS Config, CloudTrail, and CloudWatch.",
      "Automated remediation of non-compliant resources using Security Hub findings, Lambda (Python), and CloudFormation.",
      "Applied Terraform and least-privilege controls with IAM, KMS, S3, EBS, NACLs, and security groups.",
    ],
  },
];

const formatPublishedDate = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Recently published";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const toBlogPost = (title: string, link: string, publishedAt: string): BlogPost => ({
  title: title.trim() || "Untitled Post",
  link: link.trim() || MEDIUM_PROFILE_URL,
  publishedAt: formatPublishedDate(publishedAt),
});

const fetchFromRss2Json = async (signal: AbortSignal): Promise<BlogPost[]> => {
  const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_FEED_URL)}`;
  const response = await fetch(endpoint, { signal });

  if (!response.ok) {
    throw new Error("rss2json_fetch_failed");
  }

  const payload = (await response.json()) as {
    status?: string;
    items?: Array<{ title?: string; link?: string; pubDate?: string }>;
  };

  if (payload.status !== "ok" || !Array.isArray(payload.items)) {
    throw new Error("rss2json_payload_invalid");
  }

  return payload.items
    .slice(0, BLOG_LIMIT)
    .map((item) => toBlogPost(item.title ?? "", item.link ?? "", item.pubDate ?? ""));
};

const fetchFromAllOrigins = async (signal: AbortSignal): Promise<BlogPost[]> => {
  const endpoint = `https://api.allorigins.win/raw?url=${encodeURIComponent(MEDIUM_FEED_URL)}`;
  const response = await fetch(endpoint, { signal });

  if (!response.ok) {
    throw new Error("allorigins_fetch_failed");
  }

  const xml = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "application/xml");
  const parserError = doc.querySelector("parsererror");

  if (parserError) {
    throw new Error("allorigins_xml_invalid");
  }

  return Array.from(doc.querySelectorAll("item"))
    .slice(0, BLOG_LIMIT)
    .map((item) =>
      toBlogPost(
        item.querySelector("title")?.textContent ?? "",
        item.querySelector("link")?.textContent ?? "",
        item.querySelector("pubDate")?.textContent ?? "",
      ),
    );
};

const fetchMediumPosts = async (signal: AbortSignal): Promise<BlogPost[]> => {
  try {
    const rss2JsonPosts = await fetchFromRss2Json(signal);
    if (rss2JsonPosts.length > 0) {
      return rss2JsonPosts;
    }
  } catch (error) {
    if (signal.aborted) {
      throw error;
    }
  }

  return fetchFromAllOrigins(signal);
};

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogStatus, setBlogStatus] = useState<BlogStatus>("loading");

  useEffect(() => {
    const controller = new AbortController();

    const loadPosts = async (): Promise<void> => {
      setBlogStatus("loading");

      try {
        const posts = await fetchMediumPosts(controller.signal);
        if (posts.length === 0) {
          throw new Error("no_posts");
        }

        setBlogPosts(posts);
        setBlogStatus("ready");
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setBlogStatus("error");
      }
    };

    void loadPosts();

    return () => controller.abort();
  }, []);

  return (
    <div className="page-shell">
      <header className="site-header">
        <h1>Shadman Hossain</h1>

        <nav className="top-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section id="about" className="content-section">
          <h2>About</h2>
          <p>
            Hi, I&apos;m Shadman. I&apos;m currently a Master&apos;s in Cybersecurity student at SFU,
            where I&apos;m deepening my expertise in protecting digital infrastructure. My approach
            to security is rooted in a mix of high-stakes environments and agile startups; I&apos;ve
            delivered security assessments for fintech and health tech companies, ensuring their
            platforms are as resilient as they are innovative.
          </p>
          <p>
            Beyond assessments, I&apos;m a builder. I have experience supporting large-scale IT
            environments as a systems administrator, and currently, I work as a Backend Engineer at
            Twiine. There, I focus on designing and implementing secure backend systems that can
            scale without compromising on safety.
          </p>
        </section>

        <section id="experience" className="content-section">
          <h2>Experience</h2>
          {experiences.map((item) => (
            <article key={`${item.role}-${item.company}`} className="entry">
              <header>
                <h3>{item.role}</h3>
                <p className="entry-meta">
                  {item.company} | {item.location}
                </p>
                <p className="entry-date">{item.dates}</p>
              </header>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="projects" className="content-section">
          <h2>Projects</h2>
          {projects.map((project) => (
            <article key={project.name} className="entry">
              <header>
                <h3>{project.name}</h3>
                <p className="entry-meta">{project.context}</p>
                <p className="entry-date">{project.dates}</p>
              </header>
              <ul>
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="blogs" className="content-section">
          <h2>Blogs</h2>
          <p className="section-note">
            Latest posts from Medium. If feed loading fails, open the full profile directly.
          </p>

          {blogStatus === "loading" && <p>Fetching latest Medium posts...</p>}

          {blogStatus === "error" && (
            <p>
              Unable to load posts automatically right now. <a href={MEDIUM_PROFILE_URL}>View all on Medium</a>.
            </p>
          )}

          {blogStatus === "ready" && (
            <ul className="blog-list">
              {blogPosts.map((post) => (
                <li key={post.link}>
                  <a href={post.link} target="_blank" rel="noreferrer">
                    {post.title}
                  </a>
                  <span>{post.publishedAt}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section id="contact" className="content-section">
          <h2>Contact</h2>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong> <a href="mailto:shadmanh@sfu.ca">shadmanh@sfu.ca</a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/shadmanh123" target="_blank" rel="noreferrer">
                github.com/shadmanh123
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/shad256/" target="_blank" rel="noreferrer">
                linkedin.com/in/shad256
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">Built and designed by Shadman Hossain.</footer>
    </div>
  );
}

export default App;
