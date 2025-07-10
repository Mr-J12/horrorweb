import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const DemonDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample demon data - in a real app, this would come from your database
  const demonData: { [key: string]: any } = {
    'amon': {
      name: 'Amon',
      title: 'Marquis of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Before time was written, Amon was a high priest who defied the gods, seeking the power of forbidden knowledge. His audacity came at a great cost, and he was transformed into a demon, marked to be an eternal marquis of the underworld, punished for his ambition and disdain for boundaries.',
      characteristics: 'Amon can appear as a wolf with a serpent\'s tail, spewing voracious flames. However, if commanded, he takes on the form of a man with a grotesque blend of animal features: prominent canine teeth and the head of a crow. This appearance, besides being terrifying, serves as a reminder of the price of unwanted knowledge.',
      dominion: 'Amon, with his ability to know the past and the future, toys with human life, creating conflicts and resolving them at his whim. He has the power to influence minds, causing old friends to become sworn enemies and the deepest enmities to reconcile unexpectedly.',
      legions: 'With 40 Legions of Spirits under his command, Amon reigns over those who seek forbidden knowledge and hidden powers. While he does not have a defined realm, his influence is palpable in dark libraries and forgotten corners where ancient secrets are kept.',
      prophecies: 'There are rumors that, in a future era, Amon will unleash all his knowledge upon the world, flooding it with forgotten truths and dark secrets, leading humanity to its zenith or ruin, depending on how it chooses to use that information.',
      invocation: 'Those seeking Amon\'s counsel seek answers to mysteries of the past or visions of the future. By drawing his special symbol and reciting: "Amon, guardian of secrets, reveal the hidden and guide my path," he may grant an audience. However, the price is high: a valuable memory or an untold secret.',
      protection: 'Those who deal with Amon may find themselves ensnared in a web of intrigues and betrayals. Protection against him comes in the form of unwavering truth and the avoidance of secrets. It is said that wearing an obsidian amulet and reciting daily protection mantras can keep his influence at bay.'
    },
    'lucifer': {
      name: 'Lucifer',
      title: 'King of Hell',
      image: '/ll.jpg',
      origin: 'In the annals of heaven, Lucifer was distinguished not only by his resplendent beauty but also by his keen intellect and ambition. Hailing from the brightest reaches of creation, he was the jewel of the celestial crown. However, his unyielding pride and growing resentment toward God\'s new creations, specifically humans, clouded his judgment.',
      characteristics: 'Lucifer is a master of metamorphosis. While his true form reflects an ethereal and majestic beauty, with flickering wings of radiant light, when he seeks to terrorize, he appears as a crimson entity, with sharp horns and burning eyes that consume everything in his path.',
      dominion: 'Lucifer has a particular interest in human vices and weaknesses. He unleashes envy, greed, and lust in the hearts of men, seizing any opportunity to lead them astray. His ability to manipulate fire and air, as well as his influence over the human mind, makes him a formidable and dangerous force.',
      legions: 'Lucifer commands countless legions, composed of those angels who followed him in his rebellion and infernal entities who have sworn loyalty. These beings, some grotesque and others deceptively beautiful, exist to serve and spread Lucifer\'s influence in the earthly realm and other planes.',
      prophecies: 'Whispers in the shadows suggest that there will come a time when Lucifer will attempt to reclaim his place in heaven and, in doing so, bring eternal darkness to Earth. Many believe that this conflict will be the last great battle, where the destiny of all creation hangs by a thread.',
      invocation: 'Those bold or desperate enough to seek to invoke Lucifer will find power, influence, or wealth. To summon him, one must trace his seal surrounded by a circle of fire. At midnight, with the symbol ablaze, recite: "Lucifer, Prince of Darkness, I call upon you. I offer my soul in exchange for your power."',
      protection: 'Entering into a pact with Lucifer is never without consequences. The price often outweighs the reward, and many find their lives plagued by misfortune and despair. To protect oneself, it is essential to wear a blessed silver amulet and recite daily purification prayers.'
    }
  };

  const demon = demonData[id || ''];

  if (!demon) {
    return (
      <div>
        <VideoBackground videoSrc="" />
        <header className="header">
          <Navigation />
          <motion.section className="h-text">
            <h1>Demon Not Found</h1>
            <button className="scroll-button" onClick={() => navigate('/demonology')}>
              Back to Demonology
            </button>
          </motion.section>
        </header>
      </div>
    );
  }

  return (
    <div>
      <VideoBackground videoSrc="" />
      
      <header className="header">
        <Navigation />
        
        <motion.section 
          className="h-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{demon.name}</h1>
          <p style={{ fontSize: '24px', marginTop: '10px' }}>{demon.title}</p>
          <button className="scroll-button" onClick={() => navigate('/demonology')}>
            Back to Demonology
          </button>
        </motion.section>
      </header>

      <div className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={demon.image} 
            alt={demon.name} 
            className="content-image"
            style={{ marginBottom: '30px' }}
          />
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ color: '#ff0000', fontSize: '28px', marginBottom: '15px' }}>Origin:</h3>
            <p style={{ marginBottom: '30px' }}>{demon.origin}</p>
            
            <h3 style={{ color: '#ff0000', fontSize: '28px', marginBottom: '15px' }}>Characteristics:</h3>
            <p style={{ marginBottom: '30px' }}>{demon.characteristics}</p>
            
            <h3 style={{ color: '#ff0000', fontSize: '28px', marginBottom: '15px' }}>Dominion:</h3>
            <p style={{ marginBottom: '30px' }}>{demon.dominion}</p>
            
            <h3 style={{ color: '#ff0000', fontSize: '28px', marginBottom: '15px' }}>Legions:</h3>
            <p style={{ marginBottom: '30px' }}>{demon.legions}</p>
            
            <h3 style={{ color: '#ff0000', fontSize: '28px', marginBottom: '15px' }}>Prophecies:</h3>
            <p style={{ marginBottom: '30px' }}>{demon.prophecies}</p>
            
            <h3 style={{ color: '#ff0000', fontSize: '28px', marginBottom: '15px' }}>Invocation:</h3>
            <p style={{ marginBottom: '30px' }}>{demon.invocation}</p>
            
            <h3 style={{ color: '#ff0000', fontSize: '28px', marginBottom: '15px' }}>Protection:</h3>
            <p style={{ marginBottom: '30px' }}>{demon.protection}</p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default DemonDetailPage;