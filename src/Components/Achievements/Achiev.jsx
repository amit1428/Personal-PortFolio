import React from "react";
import Project1 from "../../assets/Web certificate.jpeg";
import Project2 from "../../assets/python certificate.jpeg";
import Project3 from "../../assets/SQL certificate.jpeg";
import { FaArrowRight } from "react-icons/fa";
import "./Achiev.css";

import { MdDescription } from "react-icons/md";

const Project = () => {
  const renderProjectsData = projectsData.map((project) => {
    return (
      <div className="card flex gap-5 project" key={project.id}>
        <div className="project-image">
            <img src={project.image} alt="Projects photos" />
        </div>

        <div className="project-content">
          <ul className="flex gap-1">
            {project.tech.map(technology =>{
              return (
                <li key={technology.id}className="list">{technology.list}</li>
              )
            })}
          </ul>
            <h3 className="mt-2">
                {project.title}
            </h3>
            <p className="para">{project.description}</p>
            <a href="#" className="icon-container border-inverse rotate"><FaArrowRight /></a>

        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="wrapper p-block-9" id="projects">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="certificates">
              My Certificates
            </span>
            <h2>
              Let's have a look <br /> at{" "}
              <span className="green-text">My Certification</span>
            </h2>
          </div>

          <a href="https://www.linkedin.com/in/amit-jadhav1428/"
                target="_blank" className="btn self-end ">
          
            View All Certificates
          </a>
        </div>

        <div className="flex column gap-2 mt-5">
            {renderProjectsData}
        </div>
      </div>
    </section>
  );
};

export default Project;

const projectsData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Completed a Frontend Web Development certification focused on creating responsive, visually appealing, and user-friendly web interfaces. Gained hands-on experience with modern frontend technologies and best practices used in real-world projects.",
    image: Project1,
    tech: [
      {
        id: 1,
        list: "React js",
      },
      {
        id: 2,
        list: "Javascript",
      },
      {
        id: 3,
        list: "CSS ",
      },
        {
        id: 4,
        list: "Bootstrap",
      },
       {
        id: 5,
        list: "HTML",
      },
    ],
  },
  {
    id: 2,
    title: "Python Programming",
    description:
      "Completed a Python Programming certification focused on building a strong foundation in core Python concepts, problem-solving, and real-world application development. Gained hands-on experience in writing clean, efficient, and reusable Python code following industry best practices.",
    image: Project2,
    tech: [
      {
        id: 1,
        list: "Python",
      },
   
    ],
  },
  {
    id: 3,
    title: "Oracle SQL Developer",
    description:
      "Completed an Oracle SQL Developer certification focused on database design, data manipulation, and query optimization using Oracle SQL. Gained hands-on experience in writing efficient SQL queries, managing relational databases, and ensuring data accuracy and integrity..",
    image: Project3,
    tech: [
      {
        id: 1,
        list: "SQl",
      },
    
    ],
  },
];
