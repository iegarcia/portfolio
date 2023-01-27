import Heading from "../components/Heading";
import SkillsBox from "../components/SkillsBox";

const Skills = () => {
  return (
    <>
      <div className="skills" id="skills">
        <div className="skills-container">
          <Heading text="Skills" />
          <div className="skills-content">
            <p>
              #itworker since 2017, I started programming in 2019, where I
              learned HTML, CSS, Bootstrap, JavaScript, PHP, Laravel, MySQL and
              Git. In 2020 I dabbled in ASP.NET, SQL Server and API REST. I know
              about OOP and design patterns. On the other hand, I have
              experience in technical support regarding configuration and
              assembly of equipment, remote assistance, backup, among others.
            </p>
            <p>
              Full Stack at Digital House, Systems Analyst at ORT and I was also
              self-taught. The MERN stack is one of my usual uses lately. I have
              certifications from Acamica and UTN in office automation,
              programming fundamentals and Photoshop.
            </p>
          </div>
        </div>
        <div className="skills-container">
          <SkillsBox />
        </div>
        <br />
      </div>
    </>
  );
};

export default Skills;
