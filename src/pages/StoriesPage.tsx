import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const StoriesPage: React.FC = () => {
  const navigate = useNavigate();

  const stories = [
    {
      id: 'zodiac',
      title: 'Zodiac (2007)',
      image: 'zodiac.jpg',
      excerpt: 'Anyone with a passing interest in true crime is familiar with the Zodiac Killer, who terrorised San Francisco with a string of still-unsolved murders in the 1960s. But David Fincher\'s chilling masterpiece is less about the slayings...'
    },
    {
      id: 'amityville',
      title: 'The Amityville Horror (1979)',
      image: 'amityville.jpg',
      excerpt: 'Driven by a marketing campaign playing up its supposedly truthful bona fides, this haunted house tale became a significant leftfield success during the post-The Exorcist horror boom of the late \'70s...'
    },
    {
      id: 'poltergeist',
      title: 'Poltergeist (1982)',
      image: 'poltergeist.jpeg',
      excerpt: 'Three years after The Amityville Horror, director Tobe Hooper effectively \'Spielbergised\' the modern haunted house movie – with an assist from Steven Spielberg himself...'
    },
    {
      id: 'compliance',
      title: 'Compliance (2012)',
      image: 'compliance.jpeg',
      excerpt: 'The incident that inspired this indie thriller didn\'t end in death or involve any sort of bloodshed, but it is nonetheless deeply disturbing – and not without torture...'
    }
  ];

  return (
    <div>
      <VideoBackground videoSrc="hrr.mp4" />
      
      <header className="header">
        <Navigation />
        
        <motion.section 
          className="h-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Stories</h1>
          <button className="scroll-button" onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}>
            Click To Explore
          </button>
        </motion.section>
      </header>

      <div id="content" className="content-section">
        <div className="grid">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/story/${story.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={story.image} 
                alt={story.title} 
                className="content-image"
              />
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate(`/story/${story.id}`); }}>
                Read More
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <h3>Share Your Own Story</h3>
          <p>Had a paranormal experience you'd like to share? We'd love to hear from you.</p>
          <button 
            className="btn" 
            onClick={() => navigate('/share-story')}
            style={{ marginTop: '20px', maxWidth: '200px' }}
          >
            Share Your Story
          </button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default StoriesPage;