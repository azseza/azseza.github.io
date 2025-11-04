import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Resume.css';

const experiences = [
  {
    role: 'Full-Stack Engineer',
    company: 'Tabhotel',
    location: 'Paris, France (Remote)',
    period: 'May 2024 – Present',
    intro: 'Leading the evolution of a hospitality experience platform used by boutique hotel groups across Europe.',
    bullets: [
      'Deliver end-to-end product increments across Django, Angular, and TypeScript stacks with a focus on guest journey automation.',
      'Integrate third-party property management systems and payments to streamline onboarding for multi-property clients.',
      'Instrument CI/CD pipelines on Google Cloud to harden deployments, monitoring, and disaster recovery.'
    ],
    technologies: 'Django, Angular, TypeScript, PostgreSQL, REST APIs, GCP, Terraform, GitHub Actions'
  },
  {
    role: 'Full-Stack Engineer · NLP Specialist · DevOps',
    company: 'UBIAI',
    location: 'Tunisia · Remote',
    period: 'Feb 2024 – May 2024',
    intro: 'Accelerated the roadmap of UBIAI’s AI-powered annotation suite during a product scale-up sprint.',
    bullets: [
      'Build front-end and back-end web applications with Angular, Django, and Python.',
      'Introduce NLP-powered capabilities into production systems to unlock new user experiences.',
      'Design DevOps solutions on AWS that streamline deployment, monitoring, and reliability.'
    ],
    technologies: 'Python, Django, DRF, ELK, Haystack, Flask, Docker, Kubernetes, AWS, GitHub Actions, Angular, TypeScript, Linux, Bash'
  },
  {
    role: 'Back-end Engineer',
    company: 'Sisal',
    location: 'Tunis, Tunisia · Hybrid',
    period: 'Oct 2023 – Dec 2023',
    bullets: [
      'Developed robust enterprise modules in Java and Adobe Experience Manager (AEM).',
      'Crafted responsive Vanilla JS interfaces that empower AEM authors and end users.',
      'Combined AEM architecture knowledge with back-end services to deliver cohesive experiences.'
    ],
    technologies: 'Java, Adobe Experience Manager, JavaScript, HTL'
  },
  {
    role: 'Full-Stack Engineer',
    company: 'NST Groupe',
    location: 'Tunis, Tunisia',
    period: 'Jul 2022 – Jul 2023',
    bullets: [
      'Delivered a Spring Boot + Angular platform that tracks fishing activities for the Republic of Congo.',
      'Rapidly prototyped an oncology decision-support tool connecting clinicians to recommended treatments.',
      'Automated delivery workflows with Docker, Kubernetes, and Azure-powered CI/CD.'
    ],
    technologies: 'Java, Spring Boot, Angular, NGRX, Docker, Kubernetes, Azure Cloud, PowerShell, GitHub Actions, DevOps'
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Jan 2020 – Jan 2022',
    bullets: [
      'Delivered bespoke software solutions tailored to each client’s operational needs.',
      'Built dependable Python and Java services that power data-heavy workloads.',
      'Shipped modern Angular experiences with TypeScript and automated releases with Docker and Git.'
    ],
    technologies: 'Java, Spring Boot, Angular, TypeScript, React, Docker, Git, Python, Flask, Django, DRF, Linux'
  }
];

const achievements = [
  {
    title: 'Hospitality Platform Modernisation',
    detail: 'Rolled out modular guest journey flows, analytics dashboards, and secure payment integrations for Tabhotel’s SaaS suite.'
  },
  {
    title: 'Enterprise NLP Delivery',
    detail: 'Productised annotation pipelines, feedback loops, and search features that unlock actionable insights for UBIAI customers.'
  },
  {
    title: 'Mission-Critical Government Platforms',
    detail: 'Built resilient monitoring and reporting tools that support fisheries regulation and healthcare collaboration across Africa.'
  }
];

const strengths = [
  'Solid organisational and time-management skills that keep delivery predictable.',
  'Hands-on system architecture and design expertise across microservices and monoliths.',
  'Comfortable working autonomously while thriving in collaborative, cross-functional squads.',
  'Detail-oriented execution that balances velocity with maintainability.',
  'Experienced in building robust, scalable applications ready for production.',
  'Advocate for Agile and continuous improvement practices.'
];

const techStack = [
  {
    label: 'Back-end',
    items: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'DRF']
  },
  {
    label: 'Front-end',
    items: ['Angular', 'TypeScript', 'React', 'JavaScript', 'HTML/CSS']
  },
  {
    label: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'GitHub Actions', 'Linux', 'Bash']
  },
  {
    label: 'Data & Observability',
    items: ['PostgreSQL', 'SQL Database Administration', 'ELK Stack', 'Haystack']
  }
];

const hobbies = ['Open source contribution', 'Gaming', 'Cooking'];

const projects = [
  {
    name: 'Republic of Congo Fisheries Monitoring',
    description: 'National platform that digitises catch registration and customs compliance for inspectors and operators.',
    impact: 'Provided real-time dashboards and alerting that strengthened oversight and reduced manual reporting cycles.',
    tech: 'Spring Boot, Angular, PostgreSQL, Docker, Azure DevOps'
  },
  {
    name: 'Oncology Decision Support Portal',
    description: 'Clinical proof-of-concept that assists doctors in mapping treatments and trials to patient data.',
    impact: 'Enabled multi-clinic collaboration and knowledge sharing through a secure workflow and audit-ready trail.',
    tech: 'Angular, Spring Boot, NGRX, REST APIs'
  },
  {
    name: 'NLP Annotation & Search Enhancements',
    description: 'Shipped customizable pipelines, elastic search, and review experiences to speed up dataset labelling.',
    impact: 'Improved labeller productivity and surfaced realistic quality metrics for go-to-market reporting.',
    tech: 'Django, DRF, Elasticsearch, Haystack, AWS'
  }
];

const languages = [
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'French', level: 'Professional working proficiency' },
  { name: 'Arabic', level: 'Native speaker' }
];

const volunteering = [
  {
    role: 'Instructor & Organiser',
    organisation: 'Association Jeunes Science de Tunisie (AJST)',
    period: '2010 – 2015',
    summary: [
      'Mentored youth in STEM disciplines through workshops, science fairs, and maker events.',
      'Organised community programmes that encouraged hands-on experimentation and teamwork.'
    ]
  },
  {
    role: 'Event Organiser',
    organisation: 'Rencontres cinématographiques de Menzel Temim',
    period: 'Aug 2018',
    summary: [
      'Coordinated a month-long cultural festival featuring local filmmakers and artists.',
      'Managed partnerships, logistics, and audience engagement to showcase regional talent.'
    ]
  }
];

const references = [
  'Houssem Jemal — CEO, NST Groupe',
  'Walid Amamou — CEO, UBIAI'
];

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>AZER LTIFI</h1>
        <div className="title">FULL-STACK ENGINEER</div>
        <div className="contact-info">
          <a href="tel:+21655227798" className="contact-item">
            <FaPhone /> +216 55 22 77 98
          </a>
          <a href="mailto:azeer.ltifi@gmail.com" className="contact-item">
            <FaEnvelope /> azeer.ltifi@gmail.com
          </a>
          <span className="contact-item">
            <FaMapMarkerAlt /> Tunis, Tunisia
          </span>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/azer-ltifi-528284120/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/azseza" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </header>

      <section className="resume-section summary">
        <h3>Professional Summary</h3>
        <p>
          Dedicated and dynamic software engineer with a passion for open source collaboration and emerging
          technologies. Specialised in back-end development with Java and Python, and fluent in Angular for
          front-end experiences. Adept at database administration—particularly PostgreSQL—paired with strong
          observability using the ELK stack. Comfortable across the full delivery lifecycle, from architecture
          and containerisation with Docker to automation and release management with Git and cloud platforms.
        </p>
      </section>

      <section className="resume-section">
        <h3>Highlighted Achievements</h3>
        <div className="achievements-grid">
          {achievements.map((item) => (
            <article className="achievement-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h3>Professional Experience</h3>
        {experiences.map((job) => (
          <div className="job" key={job.company}>
            <div className="job-header">
              <h4>{job.role}</h4>
              <div className="job-meta">
                <span className="company">{job.company}</span>
                {job.location && <span className="location">{job.location}</span>}
                <span className="period">{job.period}</span>
              </div>
            </div>
            {job.intro && <p className="job-intro">{job.intro}</p>}
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="technologies">
              <strong>Technologies:</strong> {job.technologies}
            </div>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h3>Education</h3>
        <div className="education-item">
          <h4>National Diploma of Software Engineering</h4>
          <p>SESAME University · 2019 – 2022</p>
        </div>
        <div className="education-item">
          <h4>Bachelor&apos;s Degree in Fundamental Physics</h4>
          <p>Faculty of Sciences of Tunis · 2014 – 2019</p>
        </div>
      </section>

      <section className="resume-section">
        <h3>Strengths & Ways of Working</h3>
        <ul>
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="resume-section">
        <h3>Technical Toolkit</h3>
        <div className="tech-stack-grid">
          {techStack.map((group) => (
            <div className="tech-category" key={group.label}>
              <h4>{group.label}</h4>
              <p>{group.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h3>Selected Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <header>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </header>
              <div className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </div>
              <div className="project-tech">
                <strong>Stack:</strong> {project.tech}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h3>Languages</h3>
        <ul className="languages-list">
          {languages.map((language) => (
            <li key={language.name}>
              <span>{language.name}</span>
              <span>{language.level}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-section">
        <h3>Community & Volunteering</h3>
        <div className="volunteering-list">
          {volunteering.map((item) => (
            <article className="volunteer-card" key={item.organisation}>
              <div className="volunteer-header">
                <h4>{item.role}</h4>
                <span className="period">{item.period}</span>
              </div>
              <div className="volunteer-organisation">{item.organisation}</div>
              <ul>
                {item.summary.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h3>Hobbies</h3>
        <div className="pill-list">
          {hobbies.map((hobby) => (
            <span className="pill" key={hobby}>{hobby}</span>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h3>References</h3>
        <ul>
          {references.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </section>

      <div className="download-section">
        <a href="/pdf/AzerLtifiEng.pdf" className="download-button" download>
          <FaDownload /> Download Full Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
