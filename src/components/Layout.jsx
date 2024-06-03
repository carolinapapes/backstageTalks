import React, { useEffect, useRef } from 'react';
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
    alt: 'Issue 6 cover',
    backgroundColor: '#ffffff',
    id: 'issue6',
    image: issue6,
    name: 'Issue 6',
  },
  {
    alt: 'Issue 5 cover',
    backgroundColor: '#00c1b5',
    id: 'issue5',
    image: issue5,
    name: 'Issue 5',
  },
  {
    alt: 'Issue 4 cover',
    backgroundColor: '#ff651a',
    id: 'issue4',
    image: issue4,
    name: 'issue4',
  },
  {
    alt: 'Issue 3 cover',
    backgroundColor: '#ffbe00',
    id: 'issue3',
    image: issue3,
    name: 'Issue 3',
  },
  {
    alt: 'Issue 2 cover',
    backgroundColor: '#1d3fbb',
    id: 'issue2',
    image: issue2,
    name: 'Issue 2',
  },
  {
    alt: 'Issue 1 cover',
    backgroundColor: '#e30512',
    id: 'issue1',
    image: issue1,
    name: 'Issue 1',
  },
];

export default function Layout() {
  const elementRef = useRef(null);
  let correction = 1;
  let currentPage = 0;
  let slideHeight = 0;

  // Check use layout effect instead
  useEffect(() => {
    slideHeight = elementRef.current.clientHeight;
    correction = slideHeight * 0.3;
  });

  const showScroll = () => {
    const currentScroll = elementRef.current.scrollTop;
    const page = currentScroll / slideHeight;
    const newPage =
      currentScroll % slideHeight < correction
        ? Math.floor(page)
        : Math.ceil(page);
    if (newPage !== currentPage && newPage < slides.length) {
      currentPage = newPage;
      elementRef.current.style.background = slides[currentPage].backgroundColor;
      const pageName = slides[currentPage].name;
      window.history.pushState('Backstage Talks', pageName, `/#${pageName}`);
    }
  };

  return (
    <div className="layout" onScroll={showScroll} ref={elementRef}>
      <div className="layout__wrapper layout__wrapper--sm">
        <Header className="layout__header" />
      </div>
      <main>
        {slides.map((slide) => (
          <Section
            key={slide.id}
            imgUrl={slide.image}
            id={slide.id}
            ref={elementRef}
            alt={slide.alt}
          />
        ))}
        ;
      </main>
      <div className="layout__wrapper">
        <Footer className="layout__footer" />
      </div>
    </div>
  );
}
