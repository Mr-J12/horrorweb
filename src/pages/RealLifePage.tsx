import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const RealLifePage: React.FC = () => {
  const navigate = useNavigate();

  const incidents = [
    {
      id: 'enfield-monster',
      title: 'The Enfield Monster',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      excerpt: 'In 1973, a man in Enfield, Illinois told reporters that he saw a weird little creature lurking in his yard. Per the Mt. Vernon Register-News, resident Henry McDaniel stated: "It had three legs on it, a short body, two little short arms, and two pink eyes as big as flashlights."'
    },
    {
      id: 'suicide-hotel',
      title: 'The Suicide Hotel',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      excerpt: 'In Colombia, the Hotel Del Salto has more stories as one of the most haunted places on Earth more than it does actual tenants. Turned into a museum, the hotel was designed by architect Carlos Arturo Tapias back in 1923, overlooking the Tequendama Falls.'
    },
    {
      id: 'axe-murder-house',
      title: 'The Axe Murder House',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
      excerpt: 'The Villisca Axe Murder House in Villisca, Iowa is a well-known tourist attraction for ghost hunters and horror lovers alike. The site of a gruesome unsolved 1912 murder, in which six children and two adults had their skulls completely crushed by the axe of an unknown perpetrator.'
    },
    {
      id: 'haunted-doll',
      title: 'The Haunted Doll',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      excerpt: 'When you think of haunted dolls, it\'s likely the creepy old Victorian-looking porcelain kind that springs to mind. Still, don\'t get too comfortable around any kids toys too soon, though: a Disney\'s Frozen Elsa doll that was gifted for Christmas 2013 in the Houston area made headlines.'
    },
    {
      id: 'deadly-exorcism',
      title: 'A Deadly Exorcism',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      excerpt: 'In August 2016 in North London, 26-year-old Kennedy Ife began acting strange and aggressive following a pain in his throat. He reportedly bit his father, threatened to cut off his own penis, and complained of a python or snake inside of him before his family restrained him to a bed.'
    }
  ];

  return (
    <div>
      <VideoBackground videoSrc="https://images.pexels.com/videos/3045163/free-video-3045163.mp4" />
      
      <header className="header">
        <Navigation />
        
        <motion.section 
          className="h-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Real-Life Incidents</h1>
          <button className="scroll-button" onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}>
            Click To Explore
          </button>
        </motion.section>
      </header>

      <div id="content" className="content-section">
        <div className="grid">
          {incidents.map((incident, index) => (
            <motion.div
              key={incident.id}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/incident/${incident.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={incident.image} 
                alt={incident.title} 
                className="content-image"
              />
              <h3>{incident.title}</h3>
              <p>{incident.excerpt}</p>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(`/incident/${incident.id}`); }}>
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RealLifePage;