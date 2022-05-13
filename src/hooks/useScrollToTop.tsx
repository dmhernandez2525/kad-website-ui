import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#home' || location.pathname === '/ourstory') {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname]);
};

export default useScrollToTop;
