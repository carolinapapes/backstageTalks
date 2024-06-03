import React from 'react';
import PropTypes from 'prop-types';
import projectProptypes from './proptypes';

export default function Section({ slide: { alt, id, image, name } }) {
  return (
    <section className="section" id={id}>
      <img src={image} alt={alt} />
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
  slide: PropTypes.shape(projectProptypes.slides).isRequired,
};
