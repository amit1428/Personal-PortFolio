const servicesData = [
  {
    id: 1,
    title: "1️⃣ Frontend Web Development",
    description:
      "I build responsive, fast, and scalable web applications using modern technologies like React, Next.js, JavaScript (ES6+), TypeScript, HTML5, and CSS3. ✔Pixel-perfect implementation.  ✔Cross-browser compatibility.   ✔Clean & maintainable code.",

    icon: <FaLaptopCode />
    ,
  },
  {
    id: 2,
    title: "2️⃣ Responsive Website Design",
    description:
      "Mobile-first websites that look perfect on all devices — desktop, tablet, and mobile.✔Flexbox & CSS Grid layouts.    ✔Tailwind / Bootstrap styling.✔Performance optimization.",
    icon: <DiResponsive />
,
  },
  {
    id: 3,
    title: "3️⃣ UI Implementation from Design",
    description:
      "Have a Figma, Adobe XD, or Sketch file? I convert designs into fully functional, interactive websites.       ✔Exact design-to-code conversion.               ✔Smooth animations & transitions.✔Reusable components.",
    icon: <FaPalette />,
  },
  {
    id: 4,
    title: "4️⃣ Single Page Applications (SPA)",
    description:
      "Dynamic and fast-loading applications with seamless user experience..             ✔React / Vite SPA development.  ✔API integration.          ✔State management (Redux / Context API).",
    icon: <RiPagesFill />
,
  },
  {
    id: 5,
    title: "5️⃣ Website Performance Optimization",
    description:
      "Speed matters. I optimize websites for better loading time and SEO. Building complete solutions with modern tech stacks and best practices.✔Pixel-perfect implementation.  ✔Lighthouse performance improvements  splitting.                 ✔Image optimization.",
    icon:
     <MdWeb />,
  },

  {
    id: 6,
    title: "6️⃣ Website Maintenance & Support",
    description:
      "Ongoing updates, bug fixing, and feature improvements to keep your product running smoothly.. Building complete solutions with modern tech stacks and best practices.",
    icon: <FaPenRuler />,
  },
];

import React, { useState } from "react";
import { FaPalette, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import "./Services.css";
import { DiResponsive } from "react-icons/di";
import { RiPagesFill } from "react-icons/ri";


const Services = () => {
  const [activeId, setActiveId] = useState(null);

  const handleLearnMore = (e, id) => {
    e.preventDefault(); // prevent page reload
    setActiveId(activeId === id ? null : id); // toggle
  };

  const renderServicesData = servicesData.map((service) => {
    return (
      <div className="card design" key={service.id}>
        <span className="service-icon">{service.icon}</span>

        <h4 className="m-block-1">{service.title}</h4>

        {/* Show description only if clicked */}
        {activeId === service.id && (
          <p className="m-block-1">{service.description}</p>
        )}

        <a
          href="#"
          className="link"
          onClick={(e) => handleLearnMore(e, service.id)}
        >
          {activeId === service.id ? "Show Less" : "Learn More"} &nbsp;
          <FaArrowRight className="arrow green-text" />
        </a>
      </div>
    );
  });

  return (
    <section id="services">
      <div className="wrapper p-block-9 border-btm">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="Services">
              My Specialization
            </span>
            <h2>
              <span className="green-text">Services</span> I Provide
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/amit-jadhav1428/"
            target="_blank"
            rel="noreferrer"
            className="btn self-end"
          >
            View All Services
          </a>
        </div>

        <div className="flex gap-2 stretch mt-5">{renderServicesData}</div>
      </div>
    </section>
  );
};

export default Services;
