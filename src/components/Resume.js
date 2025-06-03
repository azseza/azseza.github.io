import React from 'react';
// import './Resume.css'; // Assuming a CSS file might be created later

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>John Doe</h1>
        <p>Software Engineer | Web Developer | Tech Enthusiast</p>
      </header>

      <div className="resume-section contact-info-section">
        <h3>Contact Information</h3>
        <p>Email: john.doe@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe</p>
      </div>

      <div className="resume-section summary-section">
        <h3>Summary</h3>
        <p>Highly motivated and results-oriented software engineer with X years of experience in developing and deploying web applications. Proficient in JavaScript, React, Node.js, and various other technologies. Passionate about creating innovative solutions and continuously learning new skills.</p>
      </div>

      <div className="resume-section skills-section">
        <h3>Skills</h3>
        <ul>
          <li>Programming Languages: JavaScript, Python, Java, C#</li>
          <li>Frameworks/Libraries: React, Angular, Vue.js, Node.js, Express.js, Spring Boot, .NET</li>
          <li>Databases: MongoDB, PostgreSQL, MySQL, SQL Server</li>
          <li>Tools: Git, Docker, Kubernetes, AWS, Azure</li>
          <li>Other: Agile Methodologies, UI/UX Design Principles, Problem Solving</li>
        </ul>
      </div>

      <div className="resume-section work-experience-section">
        <h3>Work Experience</h3>
        <div className="job">
          <h4>Senior Software Engineer | Tech Solutions Inc. | Jan 2020 – Present</h4>
          <ul>
            <li>Led the development of a new client-facing portal using React and Node.js, resulting in a 20% increase in user engagement.</li>
            <li>Collaborated with cross-functional teams to define project requirements and deliver high-quality software solutions.</li>
            <li>Mentored junior developers and conducted code reviews to maintain code quality and consistency.</li>
          </ul>
        </div>
        <div className="job">
          <h4>Software Engineer | Web Innovations Co. | Jun 2017 – Dec 2019</h4>
          <ul>
            <li>Developed and maintained full-stack web applications using Angular and Java Spring Boot.</li>
            <li>Participated in the entire software development lifecycle, from concept to deployment.</li>
            <li>Contributed to the improvement of development processes and tools.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section education-section">
        <h3>Education</h3>
        <div className="education-item">
          <h4>Master of Science in Computer Science | University of Technology | 2015 – 2017</h4>
          <p>Thesis: Advanced Algorithms for Big Data Analysis</p>
        </div>
        <div className="education-item">
          <h4>Bachelor of Science in Software Engineering | State University | 2011 – 2015</h4>
          <p>Minor: Mathematics</p>
        </div>
      </div>

      {/* New Featured Projects Section */}
      <div className="resume-section featured-projects-section">
        <h3>Featured Projects</h3>
        <p>Details about featured projects will be listed here. This could include descriptions, technologies used, and links to repositories or live demos.</p>
        <div className="project-placeholder">
          <h4>Project Title 1: Awesome E-commerce Platform</h4>
          <p>Brief description: A full-featured e-commerce platform built with the MERN stack, integrating Stripe for payments and a custom admin dashboard for product management.</p>
          <p><em>Technologies: React, Node.js, Express, MongoDB, Stripe API</em></p>
        </div>
        <div className="project-placeholder">
          <h4>Project Title 2: Real-time Collaborative Editor</h4>
          <p>Brief description: A web-based collaborative text editor using WebSockets, allowing multiple users to edit documents simultaneously. Implemented operational transforms for conflict resolution.</p>
          <p><em>Technologies: React, Node.js, Socket.io, Redis</em></p>
        </div>
      </div>

      {/* New Achievements Section */}
      <div className="resume-section achievements-section">
        <h3>Achievements</h3>
        <p>A list of notable achievements, awards, or certifications will be displayed here.</p>
        <ul>
          <li>AWS Certified Solutions Architect – Associate (2021)</li>
          <li>Winner, University Hackathon – Best Innovative Solution (2016)</li>
          <li>Published paper on "Efficient Data Structures" in the Journal of Computer Science (2017)</li>
          <li>Employee of the Month - Tech Solutions Inc. (March 2022)</li>
        </ul>
      </div>

    </div>
  );
};

export default Resume;
