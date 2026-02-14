import React from "react";
import {
  FaArrowRight,
  FaHtml5,
  FaReact,
  FaPython,
  FaDatabase,
  FaCheck,
  FaBootstrap,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import "./Skills.css";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const renderSkillsData = skillsData.map((skill) => {
    return (
      <div className="card" id="skills">
        <div className="bg-header flex between">
          <div className="">
            <h4 className="skillh4">{skill.title}</h4>
          </div>
          <a href="#" className="icon-container black-inverse rotate">
            <FaArrowRight />
          </a>
        </div>

        <ul>
          {skill.features.map((list) => {
            return (
              <li className="feature flex gap-1 p-2">
                <span className="check">{list.icon}</span>

                {list.label}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <section>
      <div className="wrapper  p-block-9">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="Skills">
              Skills
            </span>
            <h2>
              My <span className="green-text"> Skills</span>
            </h2>
          </div>

          <a href="#skills" className="btn self-end ">
            Check My Skills
          </a>
        </div>

        <div className="flex mt-5 gap-5">{renderSkillsData}</div>
      </div>
    </section>
  );
};

export default Skills;

const skillsData = [
  {
    id: 1,
    title: "Technical Skills",
    features: [
      {
        id: 1,
        label: "HTML",
        icon: <FaHtml5 />,
      },
      {
        id: 2,
        label: "CSS",
        icon: <FaCss3Alt />,
        included: true,
      },
      {
        id: 3,
        label: "Bootstrap",
        icon: <FaBootstrap />,
        included: true,
      },
      {
        id: 3,
        label: "Tailwindcss",
        icon: <RiTailwindCssFill />,
        included: true,
      },
      {
        id: 4,
        label: "Javascript",
        icon: <IoLogoJavascript />,
        included: true,
      },
      {
        id: 5,
        label: "React.js",
        icon: <FaReact />,
        included: true,
      },
      {
        id: 6,
        label: "Vite.js",
        icon: <SiVite />,
        included: true,
      },
      {
        id: 7,
        label: "Python",
        icon: <FaPython />,
        included: true,
      },
      {
        id: 8,
        label: "SQL",
        icon: <FaDatabase />,
        included: true,
      },
      {
        id: 9,
        label: "VS Code",
        icon: <VscVscode />,
        included: true,
      },
    ],
  },
  {
    id: 2,
    title: "Soft Skills",
    features: [
      {
        id: 1,
        label: "Creativity",
        icon: <FaCheck />,
      },
      {
        id: 2,
        label: "Teamwork",
        icon: <FaCheck />,
      },
      {
        id: 3,
        label: "Problem Solving",
        icon: <FaCheck />,
      },
      {
        id: 4,
        label: "Adaptability",
        icon: <FaCheck />,
      },
      {
        id: 5,
        label: "Time Management",
        icon: <FaCheck />,
      },
      {
        id: 6,
        label: "Critical Thinking",
        icon: <FaCheck />,
      },
      {
        id: 7,
        label: "Leadership",
        icon: <FaCheck />,
      },
    ],
  },
];
