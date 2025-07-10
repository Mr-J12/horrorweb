import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const IncidentDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample incident data
  const incidentData: { [key: string]: any } = {
    'enfield-monster': {
      title: 'The Enfield Monster',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      content: `At about 10:00pm on the night of April 25, 1973, Henry McDaniel heard a scratching sound at his front door. He looked out and saw something that he thought might be a bear. Taking a gun and flashlight, he headed outside into a strong wind and saw a creature between two rosebushes. He later said "It had three legs on it, a short body, two little short arms, and two pink eyes as big as flashlights. It stood four and a half feet tall and was grayish-colored." He added later that it was "almost like a human body".

McDaniel fired four shots at the creature, one shot hitting it and causing it to make a hiss "much like a wildcat's", before fleeing towards a nearby railway embankment, covering 50 feet in three jumps. McDaniel called the local authorities who discovered footprints in the soft earth near the house, which McDaniel described as dog-like in shape, with six toe pads. The police considered McDaniel to be "rational and sober" in his reporting of the incident. In a later press interview, McDaniel said "If they do find it, they will find more than one and they won't be from this planet, I can tell you that."

Investigators interviewing nearby residents were told that Greg Garrett, a 10-year-old neighbor of McDaniel, claimed to have encountered the creature half an hour before McDaniel did, and that the creature had stepped on his feet, tearing his tennis shoes to shreds. The boy later told Western Illinois University researchers that his report was a hoax "to tease Mr. M and have fun with an out of town newsman."

Two weeks later on May 6, McDaniel called the radio station WWKI claiming to have seen the creature again, at 3 a.m. that morning. It was negotiating the trestles of the railroad tracks near his home, and McDaniel said "I saw something moving out on the railroad track and there it stood. I didn't shoot at it or anything. It started on down the railroad track. It wasn't in a hurry or anything." A search party including WWKI's news director Rick Rainbow explored the area later that day, and reported observing an "apelike" creature standing in an abandoned building near McDaniel's house. They claimed to have made a recording of the creature's cries, and fired a shot at it before it fled.

Two days later, a day after McDaniel was interviewed on local radio, the local press reported that police were called to investigate reports of gunfire and arrested five young men from out of town who had come to Enfield in order to photograph the creature, carrying shotguns and rifles "for protection", the men having claimed to have sighted the creature. The White County sheriff dismissed reports of this "monster hunting expedition" as an exaggeration, saying that the men were just "out drinking and raising hell", mentioning the monster only briefly during questioning. The men were charged with hunting violations.`
    },
    'suicide-hotel': {
      title: 'The Suicide Hotel',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      content: `The Cecil was built in 1924 by three hoteliers—William Banks Hanner, Charles L. Dix and Robert H. Schops—as a destination for business travelers and tourists. Designed by Loy Lester Smith in the Beaux Arts (or Art déco) style and constructed by W. W. Paden; the hotel cost $1.5 million to complete and boasted an opulent marble lobby with stained-glass windows, potted palms, and alabaster statuary.

The three hoteliers invested about $2.5 million in the enterprise, with the knowledge that several similar hotels had been established elsewhere downtown, but within five years of its opening, the United States sank into the Great Depression. Although the hotel flourished as a fashionable destination throughout the 1940s, the decades beyond saw the hotel decline, as the nearby area known as Skid Row became increasingly populated with transients.

In 1931 a guest, W. K. Norton, died in his room after taking poison capsules. Throughout the 1940s and 1950s, more suicides at the Cecil occurred. In 2008, two long-time residents referred to the Cecil as "The Suicide", and it became a popular nickname in social media years later.

Cecil became a notorious rendezvous spot for adulterous couples, drug activity, and a common ground for prostitutes.

In 1964, a retired telephone operator named "Pigeon Goldie" Osgood who had been a well-known and well-liked long-term resident at the hotel was found dead in her room. She had been raped, stabbed, beaten and her room ransacked. Jacques B. Ehlinger was charged with Osgood's murder because he was seen covered in blood roaming the streets close to the hotel, but was later cleared as a suspect. Her murder remains unsolved.

In February 2017, the Los Angeles City Council voted to deem the Cecil a Historic-Cultural Monument, because it is representative of an early 20th-century American hotel and because of the historic significance of its architect's body of work.

On December 13, 2021, the Cecil Hotel reopened as an affordable housing complex operated by the Skid Row Housing Trust. The facility will provide affordable living accommodations for 600 low-income residents.`
    }
  };

  const incident = incidentData[id || ''];

  if (!incident) {
    return (
      <div>
        <VideoBackground videoSrc="https://images.pexels.com/videos/3045163/free-video-3045163.mp4" />
        <header className="header">
          <Navigation />
          <motion.section className="h-text">
            <h1>Incident Not Found</h1>
            <button className="scroll-button" onClick={() => navigate('/real-life')}>
              Back to Real Life Incidents
            </button>
          </motion.section>
        </header>
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
          <h1>{incident.title}</h1>
          <button className="scroll-button" onClick={() => navigate('/real-life')}>
            Back to Real Life Incidents
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
            src={incident.image} 
            alt={incident.title} 
            className="content-image"
            style={{ marginBottom: '30px' }}
          />
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
              {incident.content}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default IncidentDetailPage;