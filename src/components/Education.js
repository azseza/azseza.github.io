import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "Your University Name",
      year: "2018 - 2022",
      description: "Focused on software development, algorithms, and data structures. Participated in various hackathons and coding competitions.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Senior Project: Developed a full-stack web application",
        "Member of Computer Science Club"
      ]
    },
    {
      degree: "High School Diploma",
      school: "Your High School Name",
      year: "2014 - 2018",
      description: "Completed with honors in Mathematics and Computer Science.",
      achievements: [
        "National Science Olympiad Winner",
        "Programming Club President",
        "Valedictorian"
      ]
    }
  ];

  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <h4>{edu.school}</h4>
            <p>{edu.description}</p>
            <ul className="achievements-list">
              {edu.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
