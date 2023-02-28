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

  function debounce(func, timeout = 20) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const changeLocation = (issue) => {
    window.history.pushState('Backstage Talks', issue, `/#${issue}`);
  };
  const processChange = debounce((issue) => changeLocation(issue));
  const showScroll = () => {
    const innerHeight = elementRef.current.clientHeight;
    const scroll = elementRef.current.scrollTop;
    if (scroll < innerHeight * 0.3) {
      // setBackgroundColor('');
      elementRef.current.style.background = '';
      processChange('issue6');
    } else if (scroll >= innerHeight * 0.3 && scroll < innerHeight * 1.3) {
      // setBackgroundColor('color-1');
      elementRef.current.style.background = '#00c1b5';
      processChange('issue5');
    } else if (scroll >= innerHeight * 1.3 && scroll < innerHeight * 2.3) {
      // setBackgroundColor('color-2');
      elementRef.current.style.background = '#ff651a';
      processChange('issue4');
    } else if (scroll >= innerHeight * 2.3 && scroll < innerHeight * 3.3) {
      // setBackgroundColor('color-3');
      elementRef.current.style.background = '#ffbe00';
      processChange('issue3');
    } else if (scroll >= innerHeight * 3.3 && scroll < innerHeight * 4.3) {
      // setBackgroundColor('color-4');
      elementRef.current.style.background = '#1d3fbb';
      processChange('issue2');
    } else {
      elementRef.current.style.background = '#e30512';
      processChange('issue1');
    }
  };

  return (
    <div
      className={`${className} ${styles.main} `}
      onScroll={showScroll}
      ref={elementRef}
    >
      <Section imgUrl={issue6} id="issue6" />
      <Section imgUrl={issue5} id="issue5" />
      <Section imgUrl={issue4} id="issue4" />
      <Section imgUrl={issue3} id="issue3" />
      <Section imgUrl={issue2} id="issue2" />
      <Section imgUrl={issue1} id="issue1" />
    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
};
