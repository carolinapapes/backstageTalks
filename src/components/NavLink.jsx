import React from 'react';
import PropTypes from 'prop-types';

export default function NavLink({ id, name, isCurrentPage }) {
  return (
    <li>
      <a className={isCurrentPage ? 'current' : ''} href={`#${id}`}>
        {name}
      </a>
    </li>
  );
}

NavLink.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isCurrentPage: PropTypes.bool.isRequired,
};
