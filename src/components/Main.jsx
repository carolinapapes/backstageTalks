import React from 'react';

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
  return (
    <main>
      <Section imgUrl={issue6} id="issue6" />
      <Section imgUrl={issue5} id="issue5" />
      <Section imgUrl={issue4} id="issue4" />
      <Section imgUrl={issue3} id="issue3" />
      <Section imgUrl={issue2} id="issue2" />
      <Section imgUrl={issue1} id="issue1" />
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
};
