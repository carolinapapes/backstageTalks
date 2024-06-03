import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ alt, id, imgUrl, name }) {
  return (
    <section className="section" id={id}>
      <img src={imgUrl} alt={alt} />
      <h2>{name}</h2>
      <p className="subtitle_links">
        <span>
          <a href={`/buy/${id}`}>BUY HERE</a>
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
  alt: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
