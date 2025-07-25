import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const StoryDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const storyData: { [key: string]: any } = {
    'zodiac': {
      title: 'Zodiac (2007)',
      image: 'zodiac.jpg',
      content: `In 'Zodiac', the serial killer is a setter of engrossing puzzles, a bit like a crossword compiler, or a certain type of film director. David Fincher's movies have always had this flavour: 'The Game', 'Panic Room', 'Fight Club', 'Alien3' are all cat-and-mouse affairs of one kind or another; 'Se7en' proposed multiple murder as literary pop quiz. 'Zodiac' isn't a puzzle film in quite that way; instead its subject is the compulsion to solve puzzles, and its coup is the creeping recognition, quite contrary to the flow of crime cinema, of how fruitless that compulsion can be.

Stretching from 1969 to 1991, the film is based on the series of killings that petrified San Francisco during the '70s, and more specifically on the book written about them by Robert Graysmith. Played by a typically puppyish Jake Gyllenhaal, Graysmith was a San Francisco Chronicle cartoonist whose fascination with the murders engendered a kind of partnership with foppishly dissolute crime editor Paul Avery (a wrapped gift of a part for Robert Downey Jr), mirrored in the investigations of police detectives Mark Ruffalo and Anthony Edwards.

Portraying the Zodiac's attack on a young couple in a car in a deserted make-out spot, the opening scene – one of several bravura suspense sequences – can't help but recall slasher convention; the investigation that follows seems like a pacey procedural. But the clues don't quite fit together, the solution doesn't come, and as procedure sprawls into obsession the tone shifts from genre picture to something more like curious observation – sometimes sympathetic, sometimes almost mocking – of the refusal to let go. Perhaps some puzzles should be set aside.`
    },
    'amityville': {
      title: 'The Amityville Horror (1979)',
      image: 'amityville.jpg',
      content: `The book describes the house at 112 Ocean Avenue as remaining empty for 13 months after the DeFeo murders. In December 1975, George and Kathleen Lutz bought the house for what was considered to be a bargain price of $80,000. The five-bedroom house was built in Dutch Colonial style, and had a distinctive gambrel roof. It also had a swimming pool and a boathouse, as it was located on a canal.

George and Kathy married in July 1975, and each had their own homes, but they wanted to start fresh with a new property. Kathy had three children from a previous marriage: Daniel, 9, Christopher, 7, and Melissa (Missy), 5. They also owned a crossbreed Malamute/Labrador dog named Harry. During their first inspection of the house, the real estate broker told them about the DeFeo murders and asked if this would affect their decision. After discussing the matter, they decided that it was not a problem.

Lutz family moved in on December 18, 1975. Much of the DeFeo family's furniture was still in the house, because it was included for $400 as part of the deal. A friend of George Lutz learned about the history of the house and insisted on having it blessed. At the time, George was a non-practicing Methodist and had no experience of what this would entail.

Father Mancuso was a lawyer, judge of the Catholic Court and psychotherapist who lived at the local Sacred Heart Rectory. He arrived to perform the blessing while George and Kathy were unpacking their belongings on the afternoon of December 18, 1975, and went into the building to carry out the rites. When he flicked the first holy water and began to pray, he heard a masculine voice demand that he "get out".

By mid-January 1976, after another attempt at a house blessing by George and Kathy, they experienced what would turn out to be their final night in the house. The Lutzes declined to give a full account of the events that took place on this occasion, describing them as "too frightening".

On January 14, 1976, George and Kathy Lutz, with their three children and their dog Harry, left 112 Ocean Avenue, leaving all of their possessions behind. The next day, a mover arrived to remove the possessions to send to the Lutzes. He reported no paranormal phenomena while inside the house.`
    }
  };

  const story = storyData[id || ''];

  if (!story) {
    return (
      <div>
        <VideoBackground videoSrc="https://images.pexels.com/videos/3045163/free-video-3045163.mp4" />
        <header className="header">
          <Navigation />
          <motion.section className="h-text">
            <h1>Story Not Found</h1>
            <button className="scroll-button" onClick={() => navigate('/stories')}>
              Back to Stories
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
          <h1>{story.title}</h1>
          <button className="scroll-button" onClick={() => navigate('/stories')}>
            Back to Stories
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
            src={story.image} 
            alt={story.title} 
            className="content-image"
            style={{ marginBottom: '30px' }}
          />
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
              {story.content}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default StoryDetailPage;