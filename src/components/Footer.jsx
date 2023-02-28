import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ className }) {
  return (
    <div className={className}>
      <div className="notes">
        <p>
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </p>
      </div>
      <div className="contact">
        <p>email@email</p>
      </div>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};
