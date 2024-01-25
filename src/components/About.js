import React from 'react';

function About() {

  return (

    <div className="components" id="about-div">
      <img src={require("../media/azerLtifi.png")} alt='' id="profile-picture" />
      <p className="p" id="about" > Welcome to the digital playground where innovation meets dedication !</p>
      <p className="p" id="about" > Discover the magic of turning ideas into reality with dedication and expertise.</p> 
      <p className="p" id="about" > ;) </p> 
    </div>
    
  );
  
}

export default About;