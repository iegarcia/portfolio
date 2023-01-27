import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const iconSize = 30;

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <a
          className="sidebar-icon"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:ignacio.encina.garcia@gmail.com"
        >
          <FiMail size={iconSize} />
        </a>
        <a
          className="sidebar-icon"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/iegarcia"
        >
          <FiGithub size={iconSize} />
        </a>
        <a
          className="sidebar-icon"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/ignacio-encina-garcia/"
        >
          <FiLinkedin size={iconSize} />
        </a>
        <span className="sidebar-line"></span>
      </div>
    </>
  );
};

export default Sidebar;
