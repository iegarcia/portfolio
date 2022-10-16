import arrow from "../assets/arrow.svg";

const Arrow = ({ link }) => {
  return (
    <div className="d-flex justify-content-center">
      <a href={link}>
        <img src={arrow} alt="arrow" className="navigation" />
      </a>
    </div>
  );
};

export default Arrow;
