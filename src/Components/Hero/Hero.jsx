import React from "react";
import HeroImage from "../../assets/myport1.webp";
import CV from "../../assets/Resume - amitjadhav.pdf";
import "./Hero.css";

const Hero = () => {
  return (
    <section>
      <div className="hero-section flex wrapper gap-4" id="home">
        <div className="hero-content">
          <span className="sub-text">Hello there!</span>
          <h1>
            <span className="green-text">I'm 𝐀𝐦𝐢𝐭 𝐉𝐚𝐝𝐡𝐚𝐯,</span>
            <br />a Creative Web Developer.
          </h1>
          <p className="para">
            I'm a computer science graduate and a passionate front-end developer
            building clean, responsive websites with React, JavaScript, HTML,
            and CSS. I'm eager to learn, collaborate on real-world projects, and
            bring creative problem-solving and attention to detail to every
            task.
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/amit1428"
              target="_blank"
              className="btn"
            >
              ✔️ View My Works
            </a>
            <a href={CV} download="My Resume" className="btn border-btn">
              ⬇️ Download Resume
            </a>

            <button
              className="btn"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=amitjadhav1202@gmail.com&su=Hiring%20Inquiry",
                  "_blank"
                )
              }
            >
              📤 Mail Me
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
