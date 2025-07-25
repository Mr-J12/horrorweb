import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <VideoBackground videoSrc="/gen.mp4" />
      
      <header className="header">
        <Navigation />
        
        <motion.section 
          className="h-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1>Don't Look Back</h1>
          <button className="scroll-button" onClick={scrollToContent}>
            Click To Explore
          </button>
        </motion.section>
      </header>

      <div ref={contentRef} className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>What is Paranormal Activity</h2>
          <p>
            Paranormal events are purported phenomena described in popular culture, folk, and other non-scientific bodies of knowledge, whose existence within these contexts is described as being beyond the scope of normal scientific understanding.
            Notable paranormal beliefs include those that pertain to extrasensory perception (for example, telepathy), spiritualism and the pseudosciences of ghost hunting, cryptozoology, and ufology.
            Proposals regarding the paranormal are different from scientific hypotheses or speculations extrapolated from scientific evidence because scientific ideas are grounded in empirical observations and experimental data gained through the scientific method.
            In contrast, those who argue for the existence of the paranormal explicitly do not base their arguments on empirical evidence but rather on anecdote, testimony, and suspicion.
            The standard scientific models give the explanation that what appears to be paranormal phenomena is usually a misinterpretation, misunderstanding, or anomalous variation of natural phenomena.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Paranormal Subjects</h2>
          <p>
            The paranormal can best be thought of as a subset of pseudoscience. What sets the paranormal apart from other pseudosciences is a reliance on explanations for alleged phenomena that are well outside the bounds of established science.
            Thus, paranormal phenomena include extrasensory perception (ESP), telekinesis, ghosts, poltergeists, life after death, reincarnation, faith healing, human auras, and so forth.
            The explanations for these allied phenomena are phrased in vague terms of "psychic forces", "human energy fields", and so on.
            This is in contrast to many pseudoscientific explanations for other nonparanormal phenomena, which, although very bad science, are still couched in acceptable scientific terms.
          </p>
        </motion.div>

        <div className="grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="paranormal.jpg" 
              alt="Ghost Hunting" 
              className="content-image"
            />
            <h3>Ghost Hunting</h3>
            <p>
              Ghost hunting is the investigation of locations that are reportedly haunted by ghosts.
              Typically, a ghost-hunting team will attempt to collect evidence supporting the existence of paranormal activity.
              In traditional ghostlore, and fiction featuring ghosts, a ghost is a manifestation of the spirit or soul of a person.
              Alternative theories expand on that idea and include belief in the ghosts of deceased animals.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="parti.jpg" 
              alt="Ufology" 
              className="content-image"
            />
            <h3>Ufology</h3>
            <p>
              Many scientists are actively engaged in the search for unicellular life within the Solar System, carrying out studies on the surface of Mars and examining meteors that have fallen to Earth.
              Projects such as SETI are conducting an astronomical search for radio activity that would show evidence of intelligent life outside the Solar System.
              The paranormal aspect of extraterrestrial life centers largely around the belief in unidentified flying objects (UFOs).
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="big.jpg" 
              alt="Cryptozoology" 
              className="content-image"
            />
            <h3>Cryptozoology</h3>
            <p>
              Cryptozoology is a pseudoscience and subculture that aims to prove the existence of entities from the folklore record, such as Bigfoot, chupacabras, or Mokele-mbembe.
              Cryptozoologists refer to these entities as cryptids, a term coined by the subculture.
              Cryptids are animals that cryptozoologists believe may exist somewhere in the wild, but whose present existence is disputed or unsubstantiated by science.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Paranormal Investigators</h2>
          <div className="grid">
            <div className="card">
              <img 
                src="warren.jpeg" 
                alt="Ed and Lorraine Warren" 
                className="content-image"
              />
              <h3>Ed and Lorraine Warren</h3>
              <p>
                <strong>Names:</strong> Lorraine Warren and Edward Warren<br />
                <strong>Born:</strong> January 31, 1927 and September 7, 1926 in Bridgeport, Connecticut, U.S<br />
                <strong>Occupation:</strong> Paranormal investigators, authors<br />
                <strong>Notable Investigations:</strong> Annabelle, Perron family (Conjuring), Arne Johnson (Conjuring 3)
              </p>
            </div>
          </div>
                    <div className="grid">
            <div className="card">
              <img 
                src="gt.jpg" 
                alt="Ed and Lorraine Warren" 
                className="content-image"
              />
              <h3>Gaurav Tiwari</h3>
              <p>
                <strong>Names:</strong> Gaurav Tiwari<br />
                <strong>Born:</strong> 2 September 1984 in Patna, Bihar, India<br />
                <strong>Occupation:</strong> Paranormal investigators, Reality Show<br />
                <strong>Notable Investigations:</strong> UFO field researcher and ParaNexus representative in India
              </p>
            </div>
          </div>
                    <div className="grid">
            <div className="card">
              <img 
                src="mg.jpg" 
                alt="Ed and Lorraine Warren" 
                className="content-image"
              />
              <h3>Maurice Grosse</h3>
              <p>
                <strong>Names:</strong> Maurice Grosse<br />
                <strong>Born:</strong> 6 March 1919 in London, England<br />
                <strong>Occupation:</strong> Paranormal investigator, inventor, author<br />
                <strong>Notable Investigations:</strong> Perron family (Conjuring 2)
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;