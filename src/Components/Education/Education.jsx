import React from "react";
import { FaGraduationCap,FaRocket  } from "react-icons/fa";
import "./Education.css";


const Education = () => {
  const Card = (props) => {
    return (
      <div className="card design" id="education">
        <div className="flex gap-1 border-btm p-bottom-1">
          <div className="icon-container green-inverse">{props.icon}</div>
          <h3>{props.title}</h3>
        </div>
        <div className="mt-2">
          {props.item.map((education) => {
            return (
              <div className="flex between mt-2">
                <div>
                  <span className="sub-text">{education.institute}</span>
                  <p>{education.field}</p>
                </div>
                <div className="list">{education.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="text-center">
          <span className="sub-text overlay-text middle" datatype="Education">
            Education{" "}
          </span>
          <h2>
            My{" "}
            <span className="green-text">
              Academic & <br />
              Professional
            </span>{" "}
            Journey
          </h2>
        </div>

        <div className=" flex gap-5 mt-5">
          <Card item={education} title="Education" icon={<FaGraduationCap />} />
          <Card item={certification} title="My Development Philosophy & Approach ✅" icon={<FaRocket  />} />
        </div>
      </div>
    </section>
  );
};

export default Education;

const education = [
  {
    id: 1,
    institute: "Mumbai University",
    field: "Bachelor of Science in Computer Science",
    date: "JUN 2020- AUG 2023",
  },
  {
    id: 2,
    institute: "kolhapur University",
    field: "Higher Secondary Certificate Education",
    date: "JUN 2019 - FEB 2020",
  },
  {
    id: 3,
    institute: "kolhapur University",
    field: "Secondary School Certificate Education",
    date: "JUN 2017- MAR 2018",
  },
];



const  certification= [
  {
    id: 1,
    institute: "🎯 My Developer Promise",
    date: "“I treat every project like it’s my own product — focusing on quality, performance, and user experience.”",
  },
  {
    id: 2,
    institute: "👨‍💻 What Makes Me Different",
    date: "I don’t just build websites — I solve real problems with clean, scalable code.",
  },
  {
    id: 3,
    institute: "🧠 My Thinking Process",
    date: "I first understand why the project exists — business need, user pain points, and expectations.",
  },
];
