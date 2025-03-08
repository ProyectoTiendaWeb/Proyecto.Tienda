import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SubNavbar.css';

const SubNavbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      setVisible(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sub-navbar ${visible ? 'visible' : ''}`}>
      <ul className="sub-navbar-links">
        <li><Link to="/hombre">Hombre</Link></li>
        <li><Link to="/categoria/mujer">Mujer</Link></li>
        <li><Link to="/categoria/accesorios">Accesorios</Link></li>
      </ul>
    </nav>
  );
};

export default SubNavbar;