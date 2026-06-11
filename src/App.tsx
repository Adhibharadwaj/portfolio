import './App.css';

type Project = {
  year: string;
  name: string;
  domain: string;
  stack: string;
  impact: string;
  accent: string;
};

const projects: Project[] = [
  {
    year: '2025',
    name: 'LightMetrics CI Autoscaling',
    domain: 'Jenkins on AWS',
    stack: 'EC2 Fleet, ASG, Terraform, IAM, CloudWatch, GitHub Actions',
    impact: 'Built dynamic CI build-agent infrastructure, tuned autoscaling behavior, improved build availability, and reduced pipeline wait time.',
    accent: 'fleet',
  },
  {
    year: '2025',
    name: 'BoardWorks Multi-Region Delivery',
    domain: 'Azure Platform Engineering',
    stack: 'Azure App Services, Functions, Cosmos DB, VNET, Key Vault, App Gateway, Azure DevOps',
    impact: 'Created parameterized YAML pipelines for V6, V8, and AI services across multiple environments and regions with centralized diagnostics.',
    accent: 'azure',
  },
  {
    year: '2024',
    name: 'OCR Redaction Pipeline',
    domain: 'AWS Event-Driven Platform',
    stack: 'CloudFormation, S3, Lambda, SNS, SQS, IAM, CloudWatch, Bitbucket Pipelines',
    impact: 'Delivered a complete OCR and redaction workflow with least-privilege IAM, multi-account configuration, alerts, and automated Lambda releases.',
    accent: 'event',
  },
  {
    year: '2024',
    name: 'BIRA Cloud Deployments',
    domain: 'Full-Stack CI/CD',
    stack: 'React, Node.js, AWS, Jenkins, Terraform, Route 53, ALB',
    impact: 'Provisioned AWS networking and deployment pipelines for frontend and backend services, cutting manual deployment effort and release errors.',
    accent: 'aws',
  },
  {
    year: '2023',
    name: 'Cambridge & Vicinia Servers',
    domain: 'Linux Operations',
    stack: 'Python, AWS EC2, DigitalOcean, Nginx, DNS, Certbot',
    impact: 'Managed Python application hosting, SSL, DNS, Nginx routing, deployment automation, and uptime maintenance across cloud servers.',
    accent: 'linux',
  },
];

const skillGroups = [
  {
    title: 'AWS',
    items: ['EC2', 'S3', 'IAM', 'ASG', 'ALB', 'VPC', 'Lambda', 'CloudWatch', 'CloudFront', 'WAF', 'RDS', 'ELB', 'SNS', 'SQS', 'API Gateway', 'Route 53', 'ECS', 'Airflow'],
  },
  {
    title: 'Azure',
    items: ['VNET', 'VM', 'App Services', 'Key Vault', 'Functions', 'Cosmos DB', 'Azure OpenAI', 'AI Search', 'Application Gateway', 'Managed Identity', 'Application Insights', 'Storage Accounts', 'Subnets'],
  },
  {
    title: 'CI/CD + IaC',
    items: ['Terraform', 'CloudFormation', 'Jenkins', 'Azure DevOps', 'Bitbucket Pipelines', 'GitHub Actions', 'YAML', 'Groovy'],
  },
  {
    title: 'Ops Toolkit',
    items: ['Docker', 'Kubernetes', 'Nginx', 'Apache2', 'FastAPI', 'PM2', 'SonarQube', 'Dependency-Track', 'Bash', 'PowerShell', 'Python'],
  },
];

const metrics = [
  ['3.5+', 'years experience'],
  ['3', 'cloud platforms'],
  ['5', 'delivery programs'],
  ['2024', 'AWS SAA certified'],
];

function App() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#top" className="brand">ADITHYA.CS</a>
          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#skills">Stack</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">DevOps Engineer / Immediate Joiner / Bangalore</p>
            <h1>Cloud delivery systems that stay fast, observable, and repeatable.</h1>
            <p className="summary">
              I am Adithya C S, a DevOps Engineer with 3.5 years of hands-on experience automating,
              deploying, and managing cloud-native applications across AWS, Azure, and GCP.
            </p>
            <div className="heroActions">
              <a className="button primary" href="mailto:adithyacs064@gmail.com">Email me</a>
              <a className="button secondary" href="https://www.linkedin.com/in/adithya-c-s-00661b23b" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <aside className="statusPanel" aria-label="Profile snapshot">
            <div className="panelHeader">
              <span>availability</span>
              <strong>immediate</strong>
            </div>
            <div className="cloudMap" aria-hidden="true">
              <span className="node aws">AWS</span>
              <span className="node az">AZ</span>
              <span className="node gcp">GCP</span>
              <span className="node ci">CI</span>
              <span className="line one" />
              <span className="line two" />
              <span className="line three" />
            </div>
            <dl className="contactList">
              <div><dt>Email</dt><dd>adithyacs064@gmail.com</dd></div>
              <div><dt>Phone</dt><dd>+91 9480759266</dd></div>
              <div><dt>Location</dt><dd>Bangalore, India</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="metrics" aria-label="Career metrics">
        {metrics.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="sectionIntro" id="work">
        <p className="eyebrow">Selected delivery archive</p>
        <h2>Production work shaped around pipelines, platforms, and cloud reliability.</h2>
      </section>

      <section className="workList" aria-label="Selected work">
        {projects.map((project) => (
          <article className={`workRow ${project.accent}`} key={project.name}>
            <div className="year">{project.year}</div>
            <div className="workMain">
              <p>{project.domain}</p>
              <h3>{project.name}</h3>
              <span>{project.stack}</span>
            </div>
            <p className="impact">{project.impact}</p>
          </article>
        ))}
      </section>

      <section className="splitSection">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Spurtree Technologies Pvt Ltd</h2>
          <p className="role">DevOps Engineer, August 2022 - February 2026</p>
        </div>
        <div className="experienceBody">
          <p>
            Built and maintained CI/CD systems across Jenkins, Azure DevOps, Bitbucket Pipelines, and GitHub Actions.
            Provisioned cloud infrastructure with Terraform and CloudFormation, implemented monitoring and diagnostics,
            and handled secure network design across AWS and Azure environments.
          </p>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="sectionIntro compact">
          <p className="eyebrow">Technical stack</p>
          <h2>Tools I use to move software from commit to cloud.</h2>
        </div>
        <div className="skillGrid">
          {skillGroups.map((group) => (
            <article className="skillCard" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="credentialBand">
        <div>
          <p className="eyebrow">Certification</p>
          <h2>AWS Certified Solutions Architect - Associate</h2>
          <p>Valid October 2024 - October 2027</p>
        </div>
        <div>
          <p className="eyebrow">Education</p>
          <h2>Bachelor of Engineering, ECE</h2>
          <p>Sri Krishna Institute of Technology, Bangalore - 2022</p>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Ready for DevOps, cloud, and platform engineering roles.</h2>
        </div>
        <div className="footerLinks">
          <a href="mailto:adithyacs064@gmail.com">adithyacs064@gmail.com</a>
          <a href="tel:+919480759266">+91 9480759266</a>
          <a href="https://www.linkedin.com/in/adithya-c-s-00661b23b" target="_blank" rel="noreferrer">LinkedIn profile</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
