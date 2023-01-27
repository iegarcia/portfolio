import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaNpm,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiDotnet,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const iconSize = "10%";

export const front = [
  <FaHtml5 size={iconSize} color="#f1662a" />,
  <FaCss3Alt size={iconSize} color="#1572b6" />,
  <FaSass size={iconSize} color="#cb6699" />,
  <FaBootstrap size={iconSize} color="#5b4282" />,
  <SiJavascript size={iconSize} color="#f0db4f" />,
  <FaReact size={iconSize} color="#61dafb" />,
  <FaVuejs size={iconSize} color="#41b883" />,
];
export const back = [
  <FaNodeJs size={iconSize} color="#83cd29" />,
  <FaPhp size={iconSize} color="#6280b6" />,
  <FaLaravel size={iconSize} color="red" />,
  <SiExpress size={iconSize} color="grey" />,
  <SiDotnet size={iconSize} color="#327ec5" />,
];
export const database = [
  <SiFirebase size={iconSize} color="orange" />,
  <SiMongodb size={iconSize} color="#5eb150" />,
  <SiMysql size={iconSize} color="#07658d" />,
  <SiMicrosoftsqlserver size={iconSize} color="red" />,
];
export const tools = [
  <FaNpm size={iconSize} color="#cb3837" />,
  <FaGitAlt size={iconSize} color="red" />,
  <FaGithub size={iconSize} color="" />,
  <SiAdobexd size={iconSize} color="#470137" />,
  <SiAdobephotoshop size={iconSize} color="#001d23" />,
  <FaFigma size={iconSize} color="" />,
];
