import React from "react";
import AboutImage from "../../assets/myport2.webp";
import CV from '../../assets/Resume - amitjadhav.pdf'
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <section>
      <div className="flex gap-5 wrapper p-block-9 border-btm" id='about'>
        <div className="about-image">
          <img src={AboutImage} alt="Amit Jadhav" />
        </div>

        <div className="about-content">
          <span className="sub-text overlay-text" datatype="About Me">
            About Me
          </span>

          <h2>
            Who is <span className="green-text">Amit Jadhav ?</span>
          </h2>
          <p className="para">
            I am a passionate web developer with a love for creating dynamic and
            responsive web applications. With a background in computer science,
            I enjoy solving complex problems and continuously learning new
            technologies. In my free time, I like to explore new frameworks and
            contribute to open-source projects.
          </p>

          <div className="flex gap-2 m-block-3">
              <div>
                <h6>2+</h6>
                <p className="para">Years of Coding Practice</p>
              </div>
              <div>
                <h6>5+</h6>
                <p className="para">Projects Completed</p>
              </div>

              <div>
                <h6>9+</h6>
                <p className="para">Web Technologies</p>
              </div>
              <div>
                <h6>100%</h6>
                <p className="para">Dedication</p>
              </div>
            </div>

            <a href={CV} download="My Resume" className='btn '>Download Resume</a>
          </div>
        </div>
      
    </section>
  );
};

export default AboutMe;
