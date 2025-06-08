import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  const workData = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of cloud-based applications and microservices architecture.",
      responsibilities: [
        "Architected and implemented scalable microservices using Node.js and React",
        "Led a team of 5 developers in delivering critical features",
        "Improved system performance by 40% through optimization",
        "Implemented CI/CD pipelines using Jenkins and Docker"
      ]
    },
    {
      title: "Software Engineer",
      company: "Startup Solutions",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Developed full-stack web applications and RESTful APIs.",
      responsibilities: [
        "Built responsive web applications using React and Redux",
        "Developed RESTful APIs using Express.js and MongoDB",
        "Implemented automated testing using Jest and Cypress",
        "Collaborated with UX designers to improve user experience"
      ]
    },
    {
      title: "Junior Developer",
      company: "Digital Innovations",
      period: "2018 - 2020",
      location: "Boston, MA",
      description: "Contributed to various web development projects and learned industry best practices.",
      responsibilities: [
        "Assisted in developing front-end features using HTML, CSS, and JavaScript",
        "Participated in code reviews and team meetings",
        "Fixed bugs and implemented minor features",
        "Learned and applied software development best practices"
      ]
    }
  ];

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      <div className="timeline">
        {workData.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="period">{job.period}</span>
              </div>
              <h4>{job.company}</h4>
              <p className="location">{job.location}</p>
              <p className="description">{job.description}</p>
              <ul className="responsibilities">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
