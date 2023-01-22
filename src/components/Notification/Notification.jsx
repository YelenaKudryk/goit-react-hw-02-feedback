import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text }) => {
  return <p>{text}</p>;
};

export default Notification;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
