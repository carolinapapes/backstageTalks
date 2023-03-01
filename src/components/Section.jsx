import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ imgUrl, id }) {
  return (
    <section className="section" id={id}>
      <img src={imgUrl} alt="" />
      <h2>Issue #6</h2>
      <p className="subtitle_links">
        <span>
          <a href="/buy">BUY HERE</a>
        </span>
        <br />
        <span>
          or in <a href="selected">selected stores</a>.
        </span>
      </p>
    </section>
  );
}

Section.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
