import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import slides from './slides';

export default function Layout() {
  const elementRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const showScroll = () => {
    const slideHeight = elementRef.current.clientHeight;
    const correction = slideHeight * 0.3;
    const currentScroll = elementRef.current.scrollTop;
    const page = currentScroll / slideHeight;
    const newPage =
      currentScroll % slideHeight < correction
        ? Math.floor(page)
        : Math.ceil(page);
    if (newPage !== currentPage && newPage < slides.length) {
      setCurrentPage(newPage);
    }
  };
  useEffect(() => {
    elementRef.current.style.background = slides[currentPage].backgroundColor;
    const { id, name } = slides[currentPage];
    const title = `Backstage Talks - ${name}`;
    window.history.pushState('Backstage Talks', title, `/${id}`);
  }, [currentPage]);

  return (
    <div className="layout" onScroll={showScroll} ref={elementRef}>
      <div className="layout__wrapper layout__wrapper--sm">
        <Header slides={slides} currentPage={currentPage} />
      </div>
      <main>
        {slides.map((slide) => (
          <Section key={slide.id} slide={slide} />
        ))}
        ;
      </main>
      <div className="layout__wrapper">
        <Footer className="layout__footer" />
      </div>
    </div>
  );
}
