import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <>
      <h2 className="title light">{text}</h2>
      <br />
      <hr className="divider" />
      <br />
    </>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
