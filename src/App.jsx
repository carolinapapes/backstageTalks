import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header className="layout__header" />
      <Main className="layout__main" />
      <Footer className="layout__footer" />
    </>
  );
}

export default App;
