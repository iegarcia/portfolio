import arrow from "../assets/arrow.svg";

const Arrow = ({ link }) => {
  return (
    <div className="d-flex justify-content-center">
      <a href={link}>
        <img
          src={arrow}
          alt="arrow"
          style={{ transform: "rotate(90deg)", width: "30px" }}
        />
      </a>
    </div>
  );
};

export default Arrow;
