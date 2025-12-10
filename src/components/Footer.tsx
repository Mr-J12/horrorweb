import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaReddit, FaGoogle } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebook />, href: 'https://www.facebook.com/search/top?q=paranormal+experience', label: 'Facebook' },
  { icon: <FaGoogle />, href: 'https://www.google.com/search?client=opera-gx&q=paranormal+experience&sourceid=opera&ie=UTF-8&oe=UTF-8', label: 'Google'},
  { icon: <FaReddit />, href: 'https://www.reddit.com/r/india/comments/x7f17d/what_is_your_paranormal_experience/', label: 'Reddit' },
  { icon: <FaTwitter />, href: 'https://x.com/search?q=paranormal%20experience&src=typed_query&f=top', label: 'Twitter' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/results?search_query=paranormal+experience', label: 'YouTube' }, // Fixed link
];

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="horror-footer"
      // Add a subtle, unnerving shake animation
      initial={{ y: 0 }}
      animate={{ y: [0, -1, 1, -1, 1, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      <div className="footer-content">
        <h3 className="footer-title">Follow Deep Into The Shadows...</h3>
        <div className="social-icons">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, color: '#ff4d4d' }} 
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Conjured in the Dark <p>by</p> <span className="designer">Yashwant Singh Rawat</span>
        </p>
        <p className="copyright">©{new Date().getFullYear()} The Nightmares are Real.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;