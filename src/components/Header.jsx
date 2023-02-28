import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

export default function Header({ className }) {
  return (
    <nav className={`${className} ${styles.main}`}>
      <h1>Page name</h1>
      <ul className="navLinks">
        <li>
          <a href="#issue1">issue 1</a>
        </li>
        <li>
          <a href="#issue2">issue 2</a>
        </li>
        <li>
          <a href="#issue3">issue 3</a>
        </li>
        <li>
          <a href="#issue4">issue 4</a>
        </li>
        <li>
          <a href="#issue5">issue 5</a>
        </li>
        <li>
          <a href="#issue6">issue 6</a>
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
