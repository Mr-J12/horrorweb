import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthButton from './AuthButton';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <motion.div 
        className="logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Paranormal<br />Website
      </motion.div>
      
      <motion.div 
        className="menu"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/demonology" className={location.pathname.includes('/demonology') ? 'active' : ''}>
          Demonology
        </Link>
        <Link to="/stories" className={location.pathname.includes('/stories') ? 'active' : ''}>
          Stories
        </Link>
        <Link to="/real-life" className={location.pathname.includes('/real-life') ? 'active' : ''}>
          Incidents
        </Link>
      </motion.div>
      
      <motion.div 
        className="auth-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
      >
        <Link to="/feedback" className="contact">Feedback</Link>
        <AuthButton />
      </motion.div>
    </nav>
  );
};

export default Navigation;