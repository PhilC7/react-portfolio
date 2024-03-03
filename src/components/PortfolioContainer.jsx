import React, { useState } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Work") {
      return <Gallery />;
    } else {
      return <Contact />;
    }
  };

  return (
    <>
    <div className='wrapper'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </div>
    </>
  );
}

export default PortfolioContainer;
