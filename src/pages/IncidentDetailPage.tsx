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
    'suicide-hotel': {
      title: 'The Suicide Hotel',
      image: 'sucidal_hotel.jpg',
      content: `The Cecil was built in 1924 by three hoteliers—William Banks Hanner, Charles L. Dix and Robert H. Schops—as a destination for business travelers and tourists. Designed by Loy Lester Smith in the Beaux Arts (or Art déco) style and constructed by W. W. Paden; the hotel cost $1.5 million to complete and boasted an opulent marble lobby with stained-glass windows, potted palms, and alabaster statuary.

The three hoteliers invested about $2.5 million in the enterprise, with the knowledge that several similar hotels had been established elsewhere downtown, but within five years of its opening, the United States sank into the Great Depression. Although the hotel flourished as a fashionable destination throughout the 1940s, the decades beyond saw the hotel decline, as the nearby area known as Skid Row became increasingly populated with transients.

In 1931 a guest, W. K. Norton, died in his room after taking poison capsules. Throughout the 1940s and 1950s, more suicides at the Cecil occurred. In 2008, two long-time residents referred to the Cecil as "The Suicide", and it became a popular nickname in social media years later.

Cecil became a notorious rendezvous spot for adulterous couples, drug activity, and a common ground for prostitutes.

In 1964, a retired telephone operator named "Pigeon Goldie" Osgood who had been a well-known and well-liked long-term resident at the hotel was found dead in her room. She had been raped, stabbed, beaten and her room ransacked. Jacques B. Ehlinger was charged with Osgood's murder because he was seen covered in blood roaming the streets close to the hotel, but was later cleared as a suspect. Her murder remains unsolved.

In February 2017, the Los Angeles City Council voted to deem the Cecil a Historic-Cultural Monument, because it is representative of an early 20th-century American hotel and because of the historic significance of its architect's body of work.

On December 13, 2021, the Cecil Hotel reopened as an affordable housing complex operated by the Skid Row Housing Trust. The facility will provide affordable living accommodations for 600 low-income residents.`
    },
     'axe-murder-house':{
      title: 'The Axe Murder House',
      image: 'axe.jpeg',
      content: `The Moore family consisted of parents Josiah B. (aged 43), Sarah (née Montgomery) (39), and their four children: Herman Montgomery (11), Mary Katherine (10), Arthur Boyd (7), and Paul Vernon (5). An affluent family, the Moores were well known and well liked in their community. On June 9, 1912, Mary Katherine Moore invited Ina Mae (8) and Lena Gertrude Stillinger (12) to spend the night at the Moore residence. That evening, the visiting girls and the Moore family attended the Presbyterian church where they participated in the Children's Day Program, which Sarah had coordinated. After the program ended at 9:30 p.m., the Moores and the Stillinger sisters walked to the Moores' house, arriving between 9:45 and 10 p.m.

        Discovery of the crime
        At 7 A.M. the next day, June 10, Mary Peckham, the Moores' neighbor, became concerned after she noticed that the family had not come out to do their morning chores. Peckham knocked on the Moores' door. When nobody answered, she tried to open the door and discovered that it was locked. Peckham let the Moores' chickens out and called Ross Moore, Josiah's brother. Like Peckham, Moore received no response when he knocked on the door and shouted. 
        
        Ross unlocked the front door with his copy of the house key. While Peckham stood on the porch, Ross went into the parlor and opened the guest bedroom door, where he found Ina and Lena Stillinger's bodies on the bed. Moore immediately told Peckham to call Henry "Hank" Horton, Villisca's primary peace officer, who arrived shortly thereafter. 
        
        Horton's search of the house revealed that the entire Moore family and the two Stillinger girls had been bludgeoned to death. The murder weapon, an axe belonging to Josiah, was found in the guest room where the Stillinger sisters were found.
        
        Doctors concluded that the murders had taken place between midnight and 5 a.m. Two spent cigarettes in the attic suggested that the killer or killers patiently waited (according to the official tour, there were no cigarettes found) in the attic until the Moore family and the Stillinger guests were asleep. The killer(s) began in the master bedroom, where Josiah and Sarah Moore were sleeping. 
        
        Josiah received more blows from the axe than any other victim; his face had been cut to such an extent that his eyes were missing. The ceiling in his room also had a gouge mark from when the murderer lifted the axe to murder him.[4]
        
        The killer or killers used the blade of the axe on Sarah, while using the blunt end on the rest of the victims. Herman, Mary Katherine, Arthur, and Paul were next bludgeoned in the head in the same manner as their parents. 
        
        Afterwards, the murderer returned to the master bedroom to inflict more blows on the elder Moores, knocking over a shoe that had filled with blood, before moving downstairs to the guest bedroom and killing Ina and Lena. Seemingly afterwards, a 4lb slab of bacon was taken out of the icebox and laid next to the axe. Investigators also found untouched food and bloody water during the search. After the search, people were let in to see if they could have committed the crime, completely contaminating the weapon.
        
        Investigators believed that all of the victims except for Lena Stillinger had been asleep when murdered. They thought that she was awake and tried to fight back, as she was found lying crosswise on the bed, and with a defensive wound on her arm. 
        
        Lena's nightgown was pushed up to her waist and she was wearing no undergarments, leading to law enforcement speculation that the killer(s) sexually molested her or attempted to do so. This was later proven false.`
     },
      'haunted-doll':{
      title: 'The Haunted Doll',
      image: 'doll.jpg',
      content: `Though she doesn’t share the same porcelain skin and lifelike features as her cinematic counterpart, the Annabelle doll that lives in the Occult Museum of famed paranormal investigators Ed and Lorraine Warren, the pair that worked on the case, is made all the more creepy by how ordinary she appears.

        Annabelle’s stitched features, including her half-smile and bright orange triangular nose, evoke memories of childhood toys and simpler times.
        
        If you could ask Ed and Lorraine Warren (though Ed died in 2006 and Lorraine died in early 2019), they would tell you that the stark warnings scrawled across Annabelle’s glass case are more than necessary.

        According to the well-known paranormal investigators, the doll is responsible for two near-death experiences, one fatal accident, and a string of demonic activities that lasted some 30 years.
        
        The first of these infamous hauntings can allegedly be traced back to 1970, when Annabelle was brand new. The story was told to the Warrens by two young women and was retold for years after by the Warrens themselves.
    
        As the story goes, the Annabelle doll had been a gift to a young nurse named Donna (or Deirdre, depending on the source) from her mother for her 28th birthday. Donna, apparently thrilled with the gift, brought it back to her apartment that she shared with another young nurse named Angie.

        At first, the doll was an adorable accessory, sitting on a sofa in the living room and greeting visitors with her colorful visage. But before long, the two women began to notice that Annabelle seemed to move about the room of her own accord.
        
        Donna would sit her on the living room sofa before leaving for work only to come home in the afternoon and find her in the bedroom, with the door shut.
    
        Donna and Angie then started finding notes left throughout the apartment reading “Help Me.” According to the women, the notes were written on parchment paper, which they did not even keep in their home.
    
        Furthermore, Angie’s boyfriend, known only as Lou, was in the apartment one afternoon while Donna was out and heard rustling in her room as if someone had broken in. Upon inspection, he found no sign of forced entry but found the Annabelle doll lying face down on the ground (other versions of the story say he was attacked upon waking up from a nap).
    
        Suddenly, he felt a searing pain on his chest and looked down to find bloody claw marks running across it. Two days later, they had vanished without a trace.

        Following Lou’s traumatic experience, the women invited a medium over to help solve their seemingly paranormal problem. The medium held a seance and told the women that the doll was inhabited by the spirit of a deceased seven-year-old named Annabelle Higgins, whose body had been found years earlier on the site where their apartment building had been built.
        
        The medium claimed that the spirit was benevolent and simply wanted to be loved and cared for. The two young nurses reportedly felt bad for the spirit and consented to allow her to take up permanent residence in the doll.`
      },
      'deadly-exorcism': {
      title: 'A Deadly Exorcism',
      image: 'exorcism.jpg',
      content: `Seven members of a family who were accused of imprisoning and killing a man during a three-day "exorcism" have been cleared of all charges.

      Kennedy Ife, 26, died after he was allegedly restrained at a house in Enfield, north London, in August 2016.
        
      The Old Bailey heard his parents and brothers mistakenly believed he was "possessed by evil spirits" so they set about "curing" him.
        
      All seven accused were found not guilty of manslaughter.
        
      Mr Ife's parents, Kenneth, 64, and Josephine, 56, along with his brothers Roy, 33, Harry, 32, Colin, 26, Samuel, 20, and Daniel, 20, were also cleared of false imprisonment and causing or allowing the death of a vulnerable adult.
        
      'Domestic issue'
      Jurors heard the family held deep religious beliefs and were connected with the Jesus Sanctuary Ministries in south-east London.

      On 19 August, Kennedy became aggressive, bit his father and threatened to cut off his own penis so his mother sought advice from a minister rather than seeking medical help.
        
      The family then set about attempting to "cure" Kennedy through restraint and prayer over the next three days, the court was told.

      Roy Ife said his brother's actions were "shocking to hear" but he did not consider calling professional help because it was a "domestic issue".

      Kenneth Ife told jurors he ordered his sons to take shifts and use "overwhelming force" but denied that an "association with cults, occults and secret societies" played any part in the death.

      The 26-year-old was pronounced dead after Harry Ife called emergency services saying his brother had been complaining of dehydration.`
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