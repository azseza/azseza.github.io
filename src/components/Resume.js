import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Resume.css';

const toArray = (value) => (Array.isArray(value) ? value : []);

const Resume = () => {
  const { t } = useTranslation();
  const resumeData = t('resume', { returnObjects: true }) || {};
  const {
    header = {},
    sectionTitles = {},
    summary = '',
    achievements = [],
    experiences = [],
    education = [],
    strengths = [],
    techToolkit = [],
    projects = [],
    languages = [],
    volunteering = [],
    hobbies = [],
    references = [],
    download
  } = resumeData;

  const technologiesLabel =
    resumeData.technologiesLabel || t('resume.technologiesLabel', { defaultValue: 'Technologies:' });
  const impactLabel =
    resumeData.impactLabel || t('resume.impactLabel', { defaultValue: 'Impact:' });
  const stackLabel =
    resumeData.stackLabel || t('resume.stackLabel', { defaultValue: 'Stack:' });

  const getSectionTitle = (key, fallback) =>
    (sectionTitles && sectionTitles[key]) || fallback;

  const contactDetails = [
    header.phone && {
      key: 'phone',
      icon: <FaPhone />,
      label: header.phone,
      href: `tel:${header.phone.replace(/\s+/g, '')}`
    },
    header.email && {
      key: 'email',
      icon: <FaEnvelope />,
      label: header.email,
      href: `mailto:${header.email}`
    },
    header.location && {
      key: 'location',
      icon: <FaMapMarkerAlt />,
      label: header.location
    }
  ].filter(Boolean);

  const achievementsList = toArray(achievements);
  const experienceList = toArray(experiences);
  const educationList = toArray(education);
  const strengthsList = toArray(strengths);
  const techToolkitList = toArray(techToolkit);
  const projectsList = toArray(projects);
  const languagesList = toArray(languages);
  const volunteeringList = toArray(volunteering);
  const hobbiesList = toArray(hobbies);
  const referencesList = toArray(references);

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>{header.name || 'AZER LTIFI'}</h1>
        <div className="title">{header.title || 'FULL-STACK ENGINEER'}</div>
        {contactDetails.length > 0 && (
          <div className="contact-info">
            {contactDetails.map(({ key, icon, label, href }) =>
              href ? (
                <a key={key} href={href} className="contact-item">
                  {icon} {label}
                </a>
              ) : (
                <span key={key} className="contact-item">
                  {icon} {label}
                </span>
              )
            )}
          </div>
        )}
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/azer-ltifi-528284120/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/azseza" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </header>

      {summary && (
        <section className="resume-section summary">
          <h3>{getSectionTitle('summary', 'Professional Summary')}</h3>
          <p>{summary}</p>
        </section>
      )}

      {achievementsList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('achievements', 'Highlighted Achievements')}</h3>
          <div className="achievements-grid">
            {achievementsList.map((item) => (
              <article className="achievement-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {experienceList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('experience', 'Professional Experience')}</h3>
          {experienceList.map((job) => (
            <div className="job" key={`${job.company}-${job.period}`}>
              <div className="job-header">
                <h4>{job.role}</h4>
                <div className="job-meta">
                  {job.company && <span className="company">{job.company}</span>}
                  {job.location && <span className="location">{job.location}</span>}
                  {job.period && <span className="period">{job.period}</span>}
                </div>
              </div>
              {job.intro && <p className="job-intro">{job.intro}</p>}
              <ul>
                {toArray(job.bullets).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {job.technologies && (
                <div className="technologies">
                  <strong>{technologiesLabel}</strong> {job.technologies}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {educationList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('education', 'Education')}</h3>
          <div className="education-grid">
            {educationList.map((item) => (
              <div className="education-item" key={`${item.title}-${item.period}`}>
                <h4>{item.title}</h4>
                <p>
                  {item.school}
                  {item.period ? ` · ${item.period}` : ''}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {strengthsList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('strengths', 'Strengths & Ways of Working')}</h3>
          <ul>
            {strengthsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {techToolkitList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('techToolkit', 'Technical Toolkit')}</h3>
          <div className="tech-stack-grid">
            {techToolkitList.map((group) => (
              <div className="tech-category" key={group.label}>
                <h4>{group.label}</h4>
                <p>{toArray(group.items).join(', ')}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {projectsList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('projects', 'Selected Projects')}</h3>
          <div className="projects-grid">
            {projectsList.map((project) => (
              <article className="project-card" key={project.name}>
                <header>
                  <h4>{project.name}</h4>
                  {project.description && <p>{project.description}</p>}
                </header>
                {project.impact && (
                  <div className="project-impact">
                    <strong>{impactLabel}</strong> {project.impact}
                  </div>
                )}
                {project.tech && (
                  <div className="project-tech">
                    <strong>{stackLabel}</strong> {project.tech}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {languagesList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('languages', 'Languages')}</h3>
          <ul className="languages-list">
            {languagesList.map((language) => (
              <li key={language.name}>
                <span>{language.name}</span>
                <span>{language.level}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {volunteeringList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('volunteering', 'Community & Volunteering')}</h3>
          <div className="volunteering-list">
            {volunteeringList.map((item) => (
              <article className="volunteer-card" key={`${item.organisation}-${item.period}`}>
                <div className="volunteer-header">
                  <h4>{item.role}</h4>
                  {item.period && <span className="period">{item.period}</span>}
                </div>
                {item.organisation && (
                  <div className="volunteer-organisation">{item.organisation}</div>
                )}
                <ul>
                  {toArray(item.summary).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {hobbiesList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('hobbies', 'Hobbies')}</h3>
          <div className="pill-list">
            {hobbiesList.map((hobby) => (
              <span className="pill" key={hobby}>{hobby}</span>
            ))}
          </div>
        </section>
      )}

      {referencesList.length > 0 && (
        <section className="resume-section">
          <h3>{getSectionTitle('references', 'References')}</h3>
          <ul>
            {referencesList.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="download-section">
        <a href="/pdf/AzerLtifiEng.pdf" className="download-button" download>
          <FaDownload /> {download || t('resume.download', { defaultValue: 'Download Full Resume' })}
        </a>
      </div>
    </div>
  );
};

export default Resume;
