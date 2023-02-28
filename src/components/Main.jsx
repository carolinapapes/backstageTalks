import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Section from './Section';
import issue1 from '../img/backstagetalks_cover_issue_1.png';
import issue2 from '../img/backstagetalks_cover_issue_2.png';
import issue3 from '../img/backstagetalks_cover_issue_3.png';
import issue4 from '../img/backstagetalks_cover_issue_4.png';
import issue5 from '../img/backstagetalks_cover_issue_5.png';
import issue6 from '../img/backstagetalks_cover_issue_6.png';

export default function Main({ className }) {
  // const [backgroundColor, setBackgroundColor] = useState('');
  const elementRef = useRef(null);

  const showScroll = () => {
    const innerHeight = elementRef.current.clientHeight;
    const scroll = elementRef.current.scrollTop;
    if (scroll < innerHeight * 0.3) {
      // setBackgroundColor('');
      elementRef.current.style.background = '';
    } else if (scroll >= innerHeight * 0.3 && scroll < innerHeight * 1.3) {
      // setBackgroundColor('color-1');
      elementRef.current.style.background = '#00c1b5';
    } else if (scroll >= innerHeight * 1.3 && scroll < innerHeight * 2.3) {
      // setBackgroundColor('color-2');
      elementRef.current.style.background = '#ff651a';
    } else if (scroll >= innerHeight * 2.3 && scroll < innerHeight * 3.3) {
      // setBackgroundColor('color-3');
      elementRef.current.style.background = '#ffbe00';
    } else if (scroll >= innerHeight * 3.3 && scroll < innerHeight * 4.3) {
      // setBackgroundColor('color-4');
      elementRef.current.style.background = '#1d3fbb';
    } else {
      // setBackgroundColor('color-5');
      elementRef.current.style.background = '#e30512;';
    }
  };

  return (
    <div
      className={`${className} ${styles.main} `}
      onScroll={showScroll}
      ref={elementRef}
    >
      <Section imgUrl={issue6} />
      <Section imgUrl={issue5} />
      <Section imgUrl={issue4} />
      <Section imgUrl={issue3} />
      <Section imgUrl={issue2} />
      <Section imgUrl={issue1} />
    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
};
