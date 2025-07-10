import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>For More Information</p>
        <div className="social-icons">
          <motion.a 
            href="https://www.facebook.com/search/top?q=paranormal%20witness%20episodes"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-facebook"></i>
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/explore/tags/paranormalactivity/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
          <motion.a 
            href="https://twitter.com/search?q=paranormal%20investigator&src=typed_query&f=live"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
          <motion.a 
            href="https://en.wikipedia.org/wiki/Category:Paranormal_investigators"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-google-plus"></i>
          </motion.a>
          <motion.a 
            href="https://www.youtube.com/results?search_query=real+paranormal+investigators"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-youtube"></i>
          </motion.a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy;2024<br />
          Designed by <span className="designer">Yashwant and Chirag</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;