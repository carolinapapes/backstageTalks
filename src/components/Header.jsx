import React from 'react';
import propTypes from 'prop-types';
import NavLink from './NavLink';
import projectProptypes from './proptypes';

export default function Header({ slides, currentPage }) {
  return (
    <nav className="layout__header">
      <h1>Backstage Talks</h1>
      <ul className="navLinks">
        {slides.map((slide, index) => (
          <NavLink
            key={slide.id}
            id={slide.id}
            name={slide.name}
            isCurrentPage={index === currentPage}
          />
        ))}
      </ul>
    </nav>
  );
}

Header.propTypes = {
  slides: propTypes.arrayOf(propTypes.shape(projectProptypes.slides))
    .isRequired,
  currentPage: propTypes.number.isRequired,
};
