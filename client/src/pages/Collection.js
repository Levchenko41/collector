import React from "react";
import "../style/collection.css";
import foto from '../assets/foto.jpg';

export function Collection() {
  return (
    
      <div className="con">
        <div className="container-cv">
          <div className="section left">
            <div className="foto">
              <img src={foto} alt="foto" className="img-foto" />
            </div>
            <div className="namePosition">Junior front-end developer</div>
            <hr className="hr-line" />
            <div className="personalData">
              <h3>PERSONAL DATA</h3>
              <b> Born:</b> 16th, October, 1997 <br />
              <b>Status:</b> single
              <br />
              <b>Military:</b> in reserve
            </div>
            <div className="contact">
              <h3>CONTACTS</h3>
              <ul className="contact">
                <li>
                  <b>Phone number:</b> +375298058682
                </li>
                <li>
                  <b>Email:</b>{" "}
                  <a className="link" href="http://www.lev4encko.vasia@gmail.com">
                    lev4encko.vasia@gmail.com
                  </a>
                </li>
                <li>
                  <b>LinkedIn:</b>{" "}
                  <a className="link" href="http://www.linkedin.com/in/vasily-levchenko-a68b72218">
                    www.linkedin.com/in/vasily-levchenko-a68b72218
                  </a>
                </li>
                <li>
                  <b>GitHub:</b> <br />
                  <a className="link" href="http://www.github.com/Levchenko41">
                    www.github.com/Levchenko41
                  </a>
                  <br />
                </li>
              </ul>
            </div>
            <div className="skills">
              <h3>SKILLS</h3>
              <ul>
                <b>
                  <li>JS</li>
                  <li>Html</li>
                  <li>CSS</li>
                  <li>Git</li>
                  <li>React</li>
                  <li>Axios</li>
                  <li>React Router Dom</li>
                  <li>Bootstrap</li>
                  <li>MobX</li>
                  <li>ORM Sequelize</li>
                  <li>PostgreSql</li>
                  <li>API REST</li>
                  <li>node.js</li>
                  <li>Figma</li>
                  <li>TypeScript</li>
                  <li>Angular</li>
                </b>
              </ul>
            </div>
          </div>
          <div className="section center">
            <div className="myName">Vasili Levchenko</div>
            <hr className="hr-line" />

            <div className="aboutMe">
              <h3>ABOUT ME</h3>
              <p>
                I am fond of science and nature around me, very much inspired
                when natural processes are described by mathematical and program
                functions. I have a great desire to study and develop in the
                field of software. I want to turn my hobby into work. My
                strengths are curiosity, persistence, humility.
              </p>
            </div>

            <div className="experience">
              <h3>EXPERIENCE</h3>
              <b>The Rolling Scopes School:</b>
              <br />
              javaScript/Front-end2021Q1 <br />
              <b>Performance of test tasks</b>
              <br />
              <b>Codewars tasks:</b>
              <br />
              <a className="link" href="https://www.codewars.com/users/Levchenko41">
                https://www.codewars.com/users/Levchenko41
              </a>
            </div>

            <div className="aducation">
              <h3>EDUCATION</h3>
              <b>Polessky State University,</b> <br />
              department Information technology of the financial and credit
              system( 2015-2019) <br />
            </div>

            <div className="codeExample">
              <h3>CODE EXAMPLES</h3>
              <b>
                {" "}
                <a className="link" href="https://levchenko41.github.io/calculator/">
                  Calculator:
                </a>
              </b>{" "}
              <br />
              <a className="link" href="https://github.com/Levchenko41/calculator">
                https://github.com/Levchenko41/calculator
              </a>
              <br />
              <b>
                <a className="link" href="https://levchenko41.github.io/virtual-piano/">
                  Virtual-piano:
                </a>
              </b>{" "}
              <br />
              <a className="link" href="https://github.com/Levchenko41/virtual-piano">
                https://github.com/Levchenko41/virtual-piano
              </a>
            </div>

            <div className="language">
              <h3>LANGUAGES</h3>
              <b>English:</b> <br />
              Elementary (A2) <br />
              <b>Russian:</b> <br />
              Native
            </div>
          </div>
        </div>
      </div>
   
  );
}
