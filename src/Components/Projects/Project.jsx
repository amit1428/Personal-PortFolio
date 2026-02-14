import Project1 from "../../assets/foodWeb project.png";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./Project.css";

const Project = () => {
  const renderProjectsData = projectsData.map((project) => {
    return (
      <div className="card flex gap-5 project" key={project.id}>
        <div className="project-image">
          <img src={project.image} alt="Projects photos" />
        </div>

        <div className="project-content">
          <ul className="flex gap-1">
            {project.tech.map((technology) => {
              return (
                <li key={technology.id} className="list">
                  {technology.list}
                </li>
              );
            })}
          </ul>
          <h3 className="mt-2">{project.title}</h3>
          <p className="para">{project.description}</p>
          <a href="#" className="icon-container border-inverse rotate">
            <FaArrowRight  />
            
            </a>

          {/* <p className="btn">{project.link}</p> */}
          <a href={project.live} target="_blank" className="live btn self-end">
            Live Demo
          </a>
          <a href={project.github} target="_blank" className="live btn self-end">
            GitHub
          </a>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="wrapper p-block-9" id="projects">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="Projects">
              My Projects
            </span>
            <h2>
              Let's have a look <br /> at{" "}
              <span className="green-text">My Projects</span>
            </h2>
          </div>

          <a
            href="https://github.com/amit1428"
            target="_blank"
            className="btn self-end "
          >
            View All Projects
          </a>
        </div>

        <div className="flex column gap-2 mt-5">{renderProjectsData}</div>
      </div>
    </section>
  );
};

export default Project;

const projectsData = [
  {
    id: 1,
    title: "Temptation - Fast Food Delivery Service",
    description:
      "A modern food delivery platform with real-time order tracking, secure payment integration, and an intuitive user interface. Features include restaurant search, menu customization, and delivery status updates. This mobile-responsive food ordering system offers advanced filtering options, user ratings, and reviews to enhance the customer experience.",
    image: Project1,
    live: "https://weather-app.netlify.app",
    ithub: "https://github.com/username/todo-app",
    // link: "http://localhost:5173/",
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
        list: "HTML",
      },
    ],
  },
  {
    id: 2,
    title: "EcoSmart - AI-Powered Sustainability Platform",
    description:
      "An innovative platform designed to promote sustainable practices through AI-driven insights. Users can track their carbon footprint, receive personalized recommendations for reducing waste, and connect with local eco-friendly businesses. The platform features a community forum for sharing tips and experiences, making sustainability a collective effort.",
    image: Project2,
    live: "https://royalgymkalmboli.netlify.app/",
    ithub: "https://github.com/username/todo-app",
    

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
        list: "CSS",
      },
      {
        id: 34,
        list: "HTML",
      },
    ],
  },
  {
    id: 3,
    title: "Personal PortFolio - Best way to identify my Skills.",
    description:
      "A modern and responsive portfolio website showcasing my professional journey, technical skills, and project achievements. Built with React.js, featuring smooth animations, dynamic content rendering, and interactive UI elements. Includes sections for projects, skills, experience, and a contact form for professional networking.",
    image: Project3,
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
        list: "CSS",
      },
      {
        id: 4,
        list: "HTML",
      },
    ],
  },
];
