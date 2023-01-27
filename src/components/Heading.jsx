import PropTypes from "prop-types";

const Heading = ({ text }) => {
  return (
    <>
      <h2 className="heading">{text}</h2>
    </>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
