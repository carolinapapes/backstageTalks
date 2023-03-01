import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ className }) {
  return (
    <nav className={`${className}`}>
      <h1>Backstage Talks</h1>
      <ul className="navLinks">
        <li>
          <a href="#issue6">Issue # 6</a>
        </li>
        <li>
          <a href="#issue5">Issue # 5</a>
        </li>
        <li>
          <a href="#issue4">Issue # 4</a>
        </li>
        <li>
          <a href="#issue3">Issue # 3</a>
        </li>
        <li>
          <a href="#issue2">Issue # 2</a>
        </li>
        <li>
          <a href="#issue1">Issue # 1</a>
        </li>
      </ul>
    </nav>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};
