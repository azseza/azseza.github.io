import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaFacebook } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>AZER LTIFI</h1>
        <div className="title">FULL-STACK ENGINEER</div>
        <div className="contact-info">
          <a href="mailto:azer.ltifi@gmail.com"><FaEnvelope /> azer.ltifi@gmail.com</a>
          <a href="https://www.linkedin.com/in/azer-ltifi-528284120/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/azseza" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        </div>
      </div>

      <div className="resume-section">
        <h3>Professional Summary</h3>
        <p>
          Experienced Full-Stack Engineer with a strong background in both front-end and back-end development. 
          Specialized in Spring Boot, React, Angular, and Python/Django development. Proven track record in 
          delivering scalable applications and implementing DevOps practices. Strong expertise in database 
          administration, RESTful APIs, and cloud platforms (GCP, AWS). Passionate about clean code, 
          performance optimization, and continuous learning.
        </p>
      </div>

      <div className="resume-section">
        <h3>Professional Experience</h3>
        <div className="job">
          <div className="job-header">
            <h4>Full Stack Engineer</h4>
            <span className="period">Tabhotel | May 2024 - Present</span>
          </div>
          <ul>
            <li>Leading full-stack development using Django, Angular, and TypeScript</li>
            <li>Implementing RESTful APIs and managing SQL database administration</li>
            <li>Deploying and maintaining applications on Google Cloud Platform</li>
            <li>Collaborating with cross-functional teams to deliver high-quality solutions</li>
          </ul>
          <div className="technologies">
            <strong>Technologies:</strong> Django, Angular, TypeScript, REST APIs, GCP, Ubuntu, Python
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <h4>Software Engineer & NLP Specialist</h4>
            <span className="period">UbiAI | Feb 2024 - May 2024</span>
          </div>
          <ul>
            <li>Developed full-stack applications using Django/Python and Angular</li>
            <li>Implemented NLP solutions and machine learning models</li>
            <li>Managed DevOps responsibilities including CI/CD pipelines</li>
            <li>Optimized application performance and database queries</li>
          </ul>
          <div className="technologies">
            <strong>Technologies:</strong> Django, Angular, Python, NLP, DevOps, GCP, GitHub
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <h4>Back-end Development Specialist</h4>
            <span className="period">Sisal Technology Tunisia | Oct 2023 - Dec 2023</span>
          </div>
          <ul>
            <li>Developed and maintained Java-based enterprise applications</li>
            <li>Implemented Behavior-Driven Development (BDD) practices</li>
            <li>Worked with Adobe Experience Manager (AEM) for content management</li>
            <li>Collaborated with international teams on complex projects</li>
          </ul>
          <div className="technologies">
            <strong>Technologies:</strong> Java, REST APIs, BDD, AEM, PostgreSQL
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <h4>Full Stack Engineer</h4>
            <span className="period">NST GROUPE | Oct 2022 - Oct 2023</span>
          </div>
          <ul>
            <li>Developed full-stack applications using Spring Boot and Angular</li>
            <li>Managed PostgreSQL databases and implemented RESTful APIs</li>
            <li>Implemented CI/CD pipelines using Azure DevOps</li>
            <li>Led technical discussions and mentored junior developers</li>
          </ul>
          <div className="technologies">
            <strong>Technologies:</strong> Spring Boot, Angular, TypeScript, PostgreSQL, Azure DevOps
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <h4>NLP Developer (Internship)</h4>
            <span className="period">UBIAI | May 2021 - Oct 2021</span>
          </div>
          <ul>
            <li>Developed NLP solutions using Python and Django</li>
            <li>Implemented machine learning models for text processing</li>
            <li>Deployed applications on AWS cloud infrastructure</li>
          </ul>
          <div className="technologies">
            <strong>Technologies:</strong> Python, Django, AWS, NLP, REST APIs
          </div>
        </div>

        <div className="job">
          <div className="job-header">
            <h4>Game Developer (Internship)</h4>
            <span className="period">CGI Studio | Jul 2020 - Sep 2020</span>
          </div>
          <ul>
            <li>Developed and tested MMO game using Unity and C#</li>
            <li>Created 3D models and animations using Blender</li>
            <li>Implemented REST APIs for game server communication</li>
          </ul>
          <div className="technologies">
            <strong>Technologies:</strong> Unity, C#, Blender, REST APIs
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <div className="education-item">
          <h4>Bachelor's Degree in Computer Science</h4>
          <p>SESAME University</p>
        </div>
        <div className="education-item">
          <h4>Bachelor's Degree in Fundamental Physics</h4>
          <p>Faculty of Sciences of Tunis</p>
        </div>
      </div>

      <div className="resume-section">
        <h3>Technical Skills</h3>
        <div className="tech-category">
          <h4>Back-end Development</h4>
          <p>Java, Spring Boot, Python, Django, REST APIs, PostgreSQL, SQL Database Administration</p>
        </div>
        <div className="tech-category">
          <h4>Front-end Development</h4>
          <p>Angular, TypeScript, React, HTML5, CSS3, JavaScript</p>
        </div>
        <div className="tech-category">
          <h4>DevOps & Cloud</h4>
          <p>Docker, Kubernetes, GCP, AWS, Azure DevOps, GitHub, CI/CD</p>
        </div>
        <div className="tech-category">
          <h4>Other Technologies</h4>
          <p>NLP, Machine Learning, Unity, C#, Blender, Adobe Experience Manager</p>
        </div>
      </div>

      <div className="resume-section">
        <h3>Soft Skills</h3>
        <ul>
          <li>Problem Solving & Critical Thinking</li>
          <li>Team Leadership & Collaboration</li>
          <li>Project Management & Planning</li>
          <li>Technical Documentation</li>
          <li>Agile Methodologies</li>
          <li>Communication & Presentation</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Languages</h3>
        <ul>
          <li>English - Professional</li>
          <li>French - Professional</li>
          <li>Arabic - Native</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Volunteer Experience</h3>
        <div className="job">
          <div className="job-header">
            <h4>Instructor & Organizer</h4>
            <span className="period">Association Jeunes Science de Tunisie (AJST) | 2010 - 2015</span>
          </div>
          <ul>
            <li>Taught science and technology to young students</li>
            <li>Organized educational events and workshops</li>
            <li>Mentored students in various technical projects</li>
          </ul>
        </div>
        <div className="job">
          <div className="job-header">
            <h4>Event Organizer</h4>
            <span className="period">Rencontres cinématographiques de Menzel Temim | Aug 2018</span>
          </div>
          <ul>
            <li>Organized a month-long film festival in Menzel Temim</li>
            <li>Coordinated with local artists and cultural organizations</li>
            <li>Managed event logistics and community engagement</li>
          </ul>
          <div className="technologies">
            <a href="https://www.facebook.com/events/1905435666162292" target="_blank" rel="noopener noreferrer" className="event-link">
              <FaFacebook /> View Event on Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="download-section">
        <a href="/pdf/resume.pdf" className="download-button" download>
          <FaDownload /> Download Full Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
