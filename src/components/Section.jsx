import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Section.module.scss';

export default function Section({ imgUrl, id }) {
  return (
    <div className="section" id={id}>
      <img src={imgUrl} alt="" />
    </div>
  );
}

Section.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
