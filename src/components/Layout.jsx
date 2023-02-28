import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import issue1 from '../img/backstagetalks_cover_issue_1.png';
import issue2 from '../img/backstagetalks_cover_issue_2.png';
import issue3 from '../img/backstagetalks_cover_issue_3.png';
import issue4 from '../img/backstagetalks_cover_issue_4.png';
import issue5 from '../img/backstagetalks_cover_issue_5.png';
import issue6 from '../img/backstagetalks_cover_issue_6.png';

const slides = [
  {
    image: issue6,
    name: 'issue6',
    backgroundColor: '#ffffff',
  },
  {
    image: issue5,
    name: 'issue5',
    backgroundColor: '#00c1b5',
  },
  {
    image: issue4,
    name: 'issue4',
    backgroundColor: '#ff651a',
  },
  {
    image: issue3,
    name: 'issue3',
    backgroundColor: '#ffbe00',
  },
  {
    image: issue2,
    name: 'issue2',
    backgroundColor: '#1d3fbb',
  },
  {
    image: issue1,
    name: 'issue1',
    backgroundColor: '#e30512',
  },
];
export default function Layout() {
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

  const showScrollV2 = () => {
    const slideHeight = elementRef.current.clientHeight;
    const currentScroll = elementRef.current.scrollTop;
    const percentageCorrection = 0.3;
    // TO-DO it could be better
    let page = currentScroll / slideHeight;
    page = page % 1 < percentageCorrection ? Math.floor(page) : Math.ceil(page);
    if (page >= slides.length) page -= 1;
    //
    elementRef.current.style.background = slides[page].backgroundColor;
    processChange(slides[page].name);
  };

  return (
    <div className="layout" onScroll={showScrollV2} ref={elementRef}>
      <div className="layout__wrapper layout__wrapper--sm">
        <Header className="layout__header" />
      </div>
      <main>
        <Section imgUrl={issue6} id="issue6" />
        <Section imgUrl={issue5} id="issue5" />
        <Section imgUrl={issue4} id="issue4" />
        <Section imgUrl={issue3} id="issue3" />
        <Section imgUrl={issue2} id="issue2" />
        <Section imgUrl={issue1} id="issue1" />
      </main>
      <div className="layout__wrapper">
        <Footer className="layout__footer" />
      </div>
    </div>
  );
}
