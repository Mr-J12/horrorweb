import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaReddit, FaGoogle } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebook />, href: 'https://www.facebook.com/search/top?q=paranormal+stories', label: 'Facebook' },
  { icon: <FaGoogle />, href: 'https://www.google.com/search?client=opera-gx&q=paranormal+stories&sourceid=opera&ie=UTF-8&oe=UTF-8', label: 'Google'},
  { icon: <FaInstagram />, href: 'https://www.instagram.com/explore/tags/horrorart/', label: 'Instagram' },
  { icon: <FaTwitter />, href: 'https://twitter.com/search?q=horror+movie&src=typed_query', label: 'Twitter' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/results?search_query=paranormal+stories', label: 'YouTube' }, // Fixed link
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
          Conjured in the Dark by <span className="designer">Yashwant and Chirag</span>
        </p>
        <p className="copyright">© {new Date().getFullYear()}. The Nightmares are Real.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;