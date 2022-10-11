import { useTranslation } from "react-i18next";

import PropTypes from "prop-types";

const Title = ({ text }) => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="title light">{t(text)}</h2>
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
