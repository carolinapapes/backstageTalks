import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Section.module.scss';

export default function Section({ imgUrl }) {
  return (
    <div className="section">
      <img src={imgUrl} alt="" />
    </div>
  );
}

Section.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
