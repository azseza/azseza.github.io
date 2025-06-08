import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    programming: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 }
    ],
    webDevelopment: [
      { name: 'React', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 }
    ],
    databases: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 75 }
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Linux', level: 85 }
    ]
  };

  const SkillBar = ({ name, level }) => (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-level" 
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  const SkillCategory = ({ title, skills }) => (
    <div className="skill-category">
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </div>
  );

  return (
    <div className="skills-container">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        <SkillCategory title="Programming Languages" skills={skillsData.programming} />
        <SkillCategory title="Web Development" skills={skillsData.webDevelopment} />
        <SkillCategory title="Databases" skills={skillsData.databases} />
        <SkillCategory title="Tools & Technologies" skills={skillsData.tools} />
      </div>
    </div>
  );
};

export default Skills;
