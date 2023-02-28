import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

export default function Header({ className }) {
  return (
    <nav className={`${className} ${styles.main}`}>
      <h1>Page name</h1>
    </nav>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};
