import { useEffect, useRef, useState } from 'react';
import './App.css';

/* ----------------------------- data ----------------------------- */

type SkillCategory = {
  name: string;
  level: number;
  blurb: string;
  tags: string[];
};

const skills: SkillCategory[] = [
  {
    name: 'AWS',
    level: 95,
    blurb: 'EC2, S3, IAM, Lambda, ASG, ALB, VPC, CloudWatch, Route 53, ECS.',
    tags: ['EC2', 'S3', 'IAM', 'Lambda', 'ASG', 'ALB', 'VPC', 'CloudWatch', 'Route 53', 'ECS', 'SNS', 'SQS'],
  },
  {
    name: 'Azure',
    level: 88,
    blurb: 'App Services, Functions, Cosmos DB, Key Vault, App Gateway, OpenAI.',
    tags: ['App Services', 'Functions', 'Cosmos DB', 'Key Vault', 'VNET', 'App Gateway', 'Azure OpenAI', 'AI Search'],
  },
  {
    name: 'Terraform',
    level: 90,
    blurb: 'Reusable modules, multi-account state, and repeatable provisioning.',
    tags: ['HCL', 'Modules', 'Remote State', 'CloudFormation'],
  },
  {
    name: 'Jenkins',
    level: 88,
    blurb: 'Declarative & scripted pipelines, shared libraries, autoscaled agents.',
    tags: ['Pipelines', 'Groovy', 'Shared Libs', 'Agents'],
  },
  {
    name: 'Docker',
    level: 87,
    blurb: 'Multi-stage builds, slim images, and container-first delivery.',
    tags: ['Images', 'Compose', 'Registry', 'Multi-stage'],
  },
  {
    name: 'Kubernetes',
    level: 80,
    blurb: 'Deployments, services, ingress, and workload scaling.',
    tags: ['Deployments', 'Services', 'Ingress', 'HPA'],
  },
  {
    name: 'Python',
    level: 85,
    blurb: 'Automation, tooling, FastAPI services, and cloud scripting.',
    tags: ['Automation', 'FastAPI', 'Boto3', 'Scripting'],
  },
  {
    name: 'Linux',
    level: 90,
    blurb: 'Server administration, Nginx, systemd, networking, and hardening.',
    tags: ['Nginx', 'Bash', 'systemd', 'Certbot'],
  },
  {
    name: 'SonarQube',
    level: 78,
    blurb: 'Quality gates, code scanning, and pipeline-integrated analysis.',
    tags: ['Quality Gates', 'Scanning', 'Dependency-Track'],
  },
  {
    name: 'GitHub Actions',
    level: 86,
    blurb: 'Workflow automation, reusable actions, and matrix builds.',
    tags: ['Workflows', 'YAML', 'Matrix', 'Secrets'],
  },
];

type Project = {
  name: string;
  tagline: string;
  cloud: string;
  description: string;
  stack: string[];
  highlight: string;
};

const projects: Project[] = [
  {
    name: 'BIRA',
    tagline: 'AWS CI/CD & infrastructure automation',
    cloud: 'AWS',
    description:
      'Jenkins CI/CD pipelines for React frontend and Node.js backend deployments on AWS, with Terraform-provisioned VPC, subnets, route tables, Internet/NAT gateways, ALB, IAM roles, and security groups for secure, scalable networking. DNS routing handled through Route 53 with network-level troubleshooting.',
    stack: ['React', 'Node.js', 'AWS', 'Jenkins', 'Terraform', 'VPC', 'ALB', 'Route 53', 'IAM'],
    highlight: 'Automated build, test, and deploy that cut manual effort and errors.',
  },
  {
    name: 'BoardWorks',
    tagline: 'Azure multi-component delivery',
    cloud: 'Azure',
    description:
      'Azure DevOps YAML pipelines for multi-component applications (V6, V8, and AI services) with parameterized, multi-environment, multi-region support. Deployed to Azure App Services, Functions, and IIS on VMs with provisioned Cosmos DB, VNETs, Key Vault, Storage, and Application Gateway.',
    stack: ['Azure App Services', 'Functions', 'Cosmos DB', 'VNET', 'Key Vault', 'App Gateway', 'Log Analytics', 'App Insights', 'Azure DevOps'],
    highlight: 'Centralized monitoring with Log Analytics and Application Insights.',
  },
  {
    name: 'OCR Redaction Pipeline',
    tagline: 'AWS event-driven document processing',
    cloud: 'AWS',
    description:
      'A complete OCR and redaction pipeline built with AWS CloudFormation and automated Lambda releases via Bitbucket Pipelines. Event-driven workflows using S3 triggers, SNS notifications, and SQS queues, with least-privilege IAM and a dev/prod multi-account deployment strategy.',
    stack: ['CloudFormation', 'S3', 'Lambda', 'SNS', 'SQS', 'IAM', 'CloudWatch', 'Bitbucket'],
    highlight: 'Fully automated, secure document redaction at scale.',
  },
  {
    name: 'Cambridge & Vicinia',
    tagline: 'Python app hosting & server ops',
    cloud: 'AWS · DigitalOcean',
    description:
      'Deployed and managed Python applications on AWS EC2 and DigitalOcean Droplets. Configured Nginx, DNS, and SSL with Certbot for secure access, automated deployments, and ensured high availability through proactive monitoring and maintenance.',
    stack: ['Python', 'AWS EC2', 'DigitalOcean', 'Nginx', 'Certbot', 'DNS', 'SSL'],
    highlight: 'Secure, highly available hosting with automated deployments.',
  },
  {
    name: 'LightMetrics',
    tagline: 'Jenkins CI autoscaling on AWS',
    cloud: 'AWS',
    description:
      'Jenkins auto-scaling build infrastructure using EC2 Auto Scaling Groups and EC2 Fleet for dynamic CI agent provisioning, with Groovy declarative pipelines and Terraform-managed VPC, launch templates, IAM, and Fleet configs. Migrated and optimized workflows across Jenkins and GitHub Actions with cost-optimized scaling.',
    stack: ['EC2', 'ASG', 'EC2 Fleet', 'Jenkins', 'Groovy', 'GitHub Actions', 'Terraform', 'IAM', 'CloudWatch'],
    highlight: 'Faster builds with elastic, cost-aware CI agents.',
  },
];

type TimelineItem = {
  period: string;
  role: string;
  company: string;
  points: string[];
};

const timeline: TimelineItem[] = [
  {
    period: 'May 2026 — Present',
    role: 'DevOps Engineer',
    company: 'Siemens Healthineers',
    points: [
      'Building and scaling cloud-native delivery and platform engineering practices.',
    ],
  },
  {
    period: 'Aug 2022 — Feb 2026',
    role: 'DevOps Engineer',
    company: 'Spurtree Technologies Pvt Ltd',
    points: [
      'Built and maintained CI/CD across Jenkins, Azure DevOps, Bitbucket Pipelines, and GitHub Actions.',
      'Provisioned cloud infrastructure with Terraform and CloudFormation.',
      'Designed secure networking and monitoring across AWS and Azure environments.',
    ],
  },
  {
    period: '2022',
    role: 'Bachelor of Engineering, ECE',
    company: 'Sri Krishna Institute of Technology, Bangalore',
    points: ['Graduated with a focus on systems, networking, and electronics.'],
  },
];

const metrics: [string, string][] = [
  ['3.5+', 'Years experience'],
  ['3', 'Cloud platforms'],
  ['5', 'Delivery programs'],
  ['AWS SAA', 'Certified 2024'],
];

/* --------------------------- reveal hook --------------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'isVisible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------ app ------------------------------ */

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <header className={`nav ${scrolled ? 'navScrolled' : ''}`}>
        <a href="#top" className="brand">
          <span className="brandDot" />
          Adhi
        </a>
        <nav className="navLinks" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="navCta"
          href="https://drive.google.com/drive/folders/1qN8yAWcLUgWQloUhreJJxvKhoE5FV-eU?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="heroGlow" aria-hidden="true" />
          <div className="heroInner">
            <Reveal>
              <span className="badge">
                <span className="pulse" /> DevOps Engineer at Siemens Healthineers
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="heroTitle">
                Adithya C S
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="heroRole">
                Cloud &amp; DevOps Engineer
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="heroIntro">
                I design and automate cloud-native delivery systems that stay fast, observable, and
                repeatable. 3.5+ years building CI/CD pipelines and infrastructure across AWS, Azure,
                and GCP with Terraform, Jenkins, Docker, and Kubernetes.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="heroStats">
                {metrics.map(([v, l]) => (
                  <div className="heroStat" key={l}>
                    <strong>{v}</strong>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <Reveal>
            <p className="kicker">About me</p>
            <h2 className="sectionTitle">Engineering reliable paths from commit to cloud.</h2>
          </Reveal>
          <div className="aboutGrid">
            <Reveal delay={80} className="aboutCard glass">
              <h3>Professional summary</h3>
              <p>
                DevOps Engineer with hands-on experience automating, deploying, and managing
                cloud-native applications. I focus on infrastructure as code, resilient pipelines,
                secure networking, and observability so teams can ship with confidence.
              </p>
            </Reveal>
            <Reveal delay={140} className="aboutCard glass">
              <h3>Certifications</h3>
              <ul className="aboutList">
                <li>AWS Certified Solutions Architect — Associate</li>
                <li>Valid Oct 2024 — Oct 2027</li>
              </ul>
            </Reveal>
            <Reveal delay={200} className="aboutCard glass">
              <h3>Skills overview</h3>
              <div className="miniChips">
                {['AWS', 'Azure', 'Terraform', 'Jenkins', 'Docker', 'Kubernetes', 'Python', 'Linux', 'CI/CD'].map(
                  (t) => (
                    <span key={t}>{t}</span>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <Reveal>
            <p className="kicker">Technical skills</p>
            <h2 className="sectionTitle">The toolkit behind every deployment.</h2>
          </Reveal>
          <div className="skillGrid">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 50} className="skillCard glass">
                <div className="skillHead">
                  <h3>{skill.name}</h3>
                  <span className="skillLevel">{skill.level}%</span>
                </div>
                <p className="skillBlurb">{skill.blurb}</p>
                <div className="bar">
                  <SkillBar level={skill.level} />
                </div>
                <div className="miniChips">
                  {skill.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="projects">
          <Reveal>
            <p className="kicker">Featured projects</p>
            <h2 className="sectionTitle">Production work that shipped and scaled.</h2>
          </Reveal>
          <div className="projectLayout">
            <div className="projectTabs" role="tablist" aria-label="Projects">
              {projects.map((p, i) => (
                <button
                  key={p.name}
                  role="tab"
                  aria-selected={activeProject === i}
                  className={`projectTab ${activeProject === i ? 'active' : ''}`}
                  onClick={() => setActiveProject(i)}
                >
                  <span className="projectTabCloud">{p.cloud}</span>
                  <span className="projectTabName">{p.name}</span>
                </button>
              ))}
            </div>
            <div className="projectPanel glass" key={activeProject}>
              <span className="projectCloudTag">{projects[activeProject].cloud}</span>
              <h3>{projects[activeProject].name}</h3>
              <p className="projectTagline">{projects[activeProject].tagline}</p>
              <p className="projectDesc">{projects[activeProject].description}</p>
              <p className="projectHighlight">{projects[activeProject].highlight}</p>
              <div className="miniChips">
                {projects[activeProject].stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <Reveal>
            <p className="kicker">Experience</p>
            <h2 className="sectionTitle">A timeline of building and shipping.</h2>
          </Reveal>
          <div className="timeline">
            {timeline.map((item, i) => (
              <Reveal key={item.role + item.period} delay={i * 80} className="timelineItem">
                <div className="timelineMarker" aria-hidden="true">
                  <span className="timelineDot" />
                </div>
                <div className="timelineCard glass">
                  <span className="timelinePeriod">{item.period}</span>
                  <h3>{item.role}</h3>
                  <p className="timelineCompany">{item.company}</p>
                  <ul>
                    {item.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="section" id="certifications">
          <Reveal>
            <p className="kicker">Certifications</p>
            <h2 className="sectionTitle">Validated cloud expertise.</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="certCard glass">
              <div className="certBadge" aria-hidden="true">
                AWS
              </div>
              <div className="certBody">
                <h3>AWS Certified Solutions Architect — Associate</h3>
                <p>
                  Demonstrated ability to design distributed systems that are resilient,
                  cost-effective, and secure on AWS.
                </p>
                <span className="certValid">Valid October 2024 — October 2027</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section className="section contactSection" id="contact">
          <div className="contactGlow" aria-hidden="true" />
          <Reveal className="contactInner glass">
            <p className="kicker">Contact</p>
            <h2 className="sectionTitle">Let&apos;s build something reliable.</h2>
            <p className="contactText">
              DevOps Engineer at Siemens Healthineers. Always happy to connect on Cloud, DevOps,
              and Platform Engineering — reach out and I&apos;ll get back to you.
            </p>
            <div className="contactActions">
              <a className="btn btnPrimary" href="mailto:adithyacs064@gmail.com">
                adithyacs064@gmail.com
              </a>
              <a className="btn btnGhost" href="tel:+919480759266">
                +91 94807 59266
              </a>
              <a
                className="btn btnGhost"
                href="https://www.linkedin.com/in/adithya-c-s-00661b23b"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Adithya C S</span>
        <span>Cloud &amp; DevOps Engineer · Bangalore, India</span>
      </footer>
    </div>
  );
}

function SkillBar({ level }: { level: number }) {
  const { ref, shown } = useReveal<HTMLSpanElement>();
  return (
    <span
      ref={ref}
      className="barFill"
      style={{ width: shown ? `${level}%` : '0%' }}
    />
  );
}

export default App;
