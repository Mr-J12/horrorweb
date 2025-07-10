import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const DemonologyPage: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const demonCategories = [
    { id: 'war-conflict', name: 'War and Conflict', description: 'Demons of battle and strife' },
    { id: 'destruction-chaos', name: 'Destruction and Chaos', description: 'Entities of ruin and disorder' },
    { id: 'knowledge-divination', name: 'Knowledge and Divination', description: 'Seekers of forbidden wisdom' },
    { id: 'wealth-prosperity', name: 'Wealth and Prosperity', description: 'Masters of material desires' },
    { id: 'magic-transformation', name: 'Magic and Transformation', description: 'Weavers of arcane arts' },
    { id: 'lust-passion', name: 'Lust and Passion', description: 'Tempters of the heart' }
  ];

  const demons = {
    'war-conflict': [
      { id: 'amon', name: 'Amon, Aamon, Nahum (Marquis)', description: 'Guardian of forbidden knowledge and ancient secrets' },
      { id: 'eligos', name: 'Eligos, Abigor, Eligor (Duke)', description: 'Knight of secrets and war strategies' },
      { id: 'focalor', name: 'Focalor, Forcalor, Furcalor (Duke)', description: 'Master of storms and naval warfare' },
      { id: 'halphas', name: 'Halphas, Malthus, Malthas, Malthous (Count)', description: 'Builder of towers and fortifications' },
      { id: 'leraje', name: 'Leraje, Leraikha, Leraie, Leraye, Loray, Oray (Marquis)', description: 'Archer of conflict and discord' }
    ],
    'destruction-chaos': [
      { id: 'aim', name: 'Aim, Aym, Haborym (Duke)', description: 'Master of fire and destruction' },
      { id: 'andras', name: 'Andras (Marquis)', description: 'Sower of discord and enmity' },
      { id: 'andrealphus', name: 'Andrealphus, Androalphus (Marquis)', description: 'Teacher of geometry and astronomy' },
      { id: 'flauros', name: 'Flauros, Haures, Hauras, Havres, Flavros (Duke)', description: 'Revealer of truth and deception' },
      { id: 'furfur', name: 'Furfur, Furtur (Count)', description: 'Controller of storms and emotions' }
    ],
    'knowledge-divination': [
      { id: 'lucifer', name: 'Lucifer, Satan, Satanás, Satán, el Diablo (King)', description: 'The fallen angel, prince of darkness' },
      { id: 'agares', name: 'Agares, Agreas, Aguarès (Duke)', description: 'Master of languages and communication' },
      { id: 'alloces', name: 'Alloces, Alocas, Allocer, Alocer (Duke)', description: 'Teacher of astronomy and sciences' },
      { id: 'asmoday', name: 'Asmoday, Asmodai, Ashmodai, Asmodeus, Asmody, Asmodèe (King)', description: 'Guardian of hidden treasures and knowledge' },
      { id: 'astaroth', name: 'Astaroth, Ashtaroth, Astarot, Asteroth (Duke)', description: 'Revealer of past, present, and future' }
    ],
    'wealth-prosperity': [
      { id: 'amdusias', name: 'Amdusias, Amduscias, Amdukias, Ambduscias (Duke)', description: 'Master of music and nature' },
      { id: 'andromalius', name: 'Andromalius (Count)', description: 'Punisher of thieves and revealer of hidden treasures' },
      { id: 'bael', name: 'Bael, Baal, Baël (King)', description: 'First king of Hell, master of invisibility' },
      { id: 'barbatos', name: 'Barbatos (Duke)', description: 'Speaker with animals and revealer of treasures' },
      { id: 'belial', name: 'Belial, Baalial, Belhor, Beliar, Beliall, Beliel (King)', description: 'Distributor of senatorships and dignities' }
    ],
    'magic-transformation': [
      { id: 'amy', name: 'Amy, Avnas (President)', description: 'Teacher of astrology and liberal sciences' },
      { id: 'bathin', name: 'Bathin, Bathym, Mathim, Marthim (Duke)', description: 'Knower of herbs and precious stones' },
      { id: 'buer', name: 'Buer (President)', description: 'Teacher of philosophy and healing' },
      { id: 'decarabia', name: 'Decarabia, Carabia (Marquis)', description: 'Discoverer of virtues of birds and stones' },
      { id: 'foras', name: 'Foras (President)', description: 'Teacher of logic and ethics' }
    ],
    'lust-passion': [
      { id: 'beleth', name: 'Beleth, Byleth, Bilet, Bileth (King)', description: 'King of love and passion' },
      { id: 'dantalion', name: 'Dantalion, Dantalian (Duke)', description: 'Knower of thoughts and changer of minds' },
      { id: 'gaap', name: 'Gaap, Tap, Goap (Prince)', description: 'Guide of the four kings and teacher of philosophy' },
      { id: 'gremory', name: 'Gremory, Gomory, Gamori, Gamory, Gemory (Duke)', description: 'Revealer of hidden treasures and procurer of love' },
      { id: 'sallos', name: 'Sallos, Saleos, Zaleos (Duke)', description: 'Promoter of love between men and women' }
    ]
  };

  if (category && demons[category as keyof typeof demons]) {
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
            <h1>{demonCategories.find(cat => cat.id === category)?.name}</h1>
            <button className="scroll-button" onClick={() => navigate('/demonology')}>
              Back to Categories
            </button>
          </motion.section>
        </header>

        <div className="content-section">
          <div className="grid">
            {demons[category as keyof typeof demons].map((demon, index) => (
              <motion.div
                key={demon.id}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/demon/${demon.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{demon.name}</h3>
                <p>{demon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

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
          <h1>Demonology</h1>
          <button className="scroll-button" onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}>
            Click To Explore
          </button>
        </motion.section>
      </header>

      <div id="content" className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Pseudomonarchia Daemonum</h2>
          <p>
            Pseudomonarchia Daemonum, or False Monarchy of Demons, first appears as an Appendix to De praestigiis daemonum (1577) by Johann Weyer. An abridgment of a grimoire similar in nature to the Ars Goetia (first book of The Lesser Key of Solomon), it contains a list of demons, and the appropriate hours and rituals to conjure them.
          </p>
          <p>
            The Pseudomonarchia predates, and differs somewhat from, Ars Goetia. The Pseudomonarchia lists sixty-nine demons in contrast to the later seventy-two, and their sequence varies, along with some of their characteristics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Types of Demon Under their Monarchy</h2>
          <div className="demon-grid">
            {demonCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="demon-category"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/demonology/${category.id}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default DemonologyPage;