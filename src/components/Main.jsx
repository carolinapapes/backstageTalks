import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Section from './Section';

export default function Main({ className }) {
  const [backgroundColor, setBackgroundColor] = useState('');
  const elementRef = useRef(null);
  const { innerHeight } = window;

  const showScroll = () => {
    const scroll = elementRef.current.scrollTop;

    if (scroll < innerHeight) {
      setBackgroundColor('');
    } else if (scroll >= innerHeight && scroll < innerHeight * 2) {
      setBackgroundColor('color-1');
    } else if (scroll >= innerHeight * 2 && scroll < innerHeight * 3) {
      setBackgroundColor('color-2');
    } else if (scroll >= innerHeight * 3 && scroll < innerHeight * 4) {
      setBackgroundColor('color-3');
    } else if (scroll >= innerHeight * 4 && scroll < innerHeight * 5) {
      setBackgroundColor('color-4');
    } else {
      setBackgroundColor('color-5');
    }
  };

  return (
    <div
      className={`${className} ${styles.main} ${backgroundColor}`}
      onScroll={showScroll}
      ref={elementRef}
    >
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
};
