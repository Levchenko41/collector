import React from "react";
import "../style/aboutProject.css";

export const AboutProject = () => {
  return (
    <div className="aboutProject p-3 m-3">
      <div className="fs-2 mb-4">List of technologies used in the project</div>
      <div className="list">
        <div className="about-project">
          <div className="fs-3 title-about">Beck-end:</div>
          <ul className="fs-4">
            <li>Node js</li>
            <li>Express</li>
            <li>Sequelize ORM</li>
            <li></li>
          </ul>
        </div>
        <div className="about-project">
          <div className="fs-3 title-about">Front-end:</div>
          <ul className="fs-4">
            <li>React</li>
            <li>Axios</li>
            <li>MobX</li>
            <li>React Router Dom</li>
            <li>Bootstrap</li>
            <li>JWT</li>
          </ul>
        </div>
        <div className="about-project">
          <div className="fs-3 title-about">Database:</div>
          <div className="fs-4">PostgreSql</div>
        </div>
      </div>
    </div>
  );
};
