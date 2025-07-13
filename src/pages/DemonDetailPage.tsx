import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';

const DemonDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Complete demon database with all features
  const demonData: { [key: string]: any } = {
    // War and Conflict
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
    'eligos': {
      name: 'Eligos',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      origin: 'Eligos was once a noble knight in the celestial armies, renowned for his strategic brilliance and unwavering loyalty. However, his fall came when he discovered the corruption within the heavenly hierarchy. Disillusioned and betrayed, he chose exile over complicity, becoming a Duke of Hell who reveals the secrets of war and hidden knowledge.',
      characteristics: 'Eligos appears as a goodly knight carrying a lance, an ensign, and a serpent. His armor gleams with an otherworldly light, and his horse breathes fire. Despite his fearsome appearance, he maintains the bearing of nobility, speaking with the eloquence of a courtier and the wisdom of a seasoned warrior.',
      dominion: 'Master of warfare and strategy, Eligos commands knowledge of all military arts and can reveal the location of hidden armies. He discovers secrets, uncovers plots, and can predict the outcome of battles. His influence extends to matters of loyalty, betrayal, and the true nature of conflict.',
      legions: 'Eligos commands 60 Legions of Spirits, composed primarily of fallen knights and warriors who followed him into exile. These spirits serve as his scouts and spies, gathering intelligence from across the mortal and immortal realms.',
      prophecies: 'It is foretold that Eligos will play a crucial role in the final battle between Heaven and Hell, where his knowledge of both sides\' strategies will determine the fate of creation. Some say he will choose redemption, while others believe his bitterness runs too deep.',
      invocation: 'To summon Eligos, one must draw his seal at a crossroads under the light of a waning moon. Recite: "Eligos, noble Duke, keeper of secrets and master of war, I seek your counsel in matters of conflict and truth." Offer a piece of iron as tribute.',
      protection: 'Protection from Eligos requires maintaining honor and honesty in all dealings. Carry blessed silver and avoid making promises you cannot keep. His respect for nobility means he will not harm those who conduct themselves with genuine honor.'
    },
    'focalor': {
      name: 'Focalor',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
      origin: 'Focalor was an angel of the waters before his fall, responsible for the rains that nourished the earth and the winds that filled the sails of ships. His rebellion came from witnessing the drowning of innocents in floods he was commanded to create. Now he rules over storms and seas, using his power to both destroy and save.',
      characteristics: 'Focalor manifests as a man with griffin\'s wings, appearing to rise from turbulent waters. His voice carries the sound of crashing waves and howling winds. When angered, storms gather around him, and the very air becomes charged with electricity.',
      dominion: 'Master of all waters and winds, Focalor can sink ships, calm storms, or summon tempests. He has power over drowning and can kill men in water for three days. Paradoxically, he also has the power to save those lost at sea and can grant safe passage through the most dangerous waters.',
      legions: 'Focalor commands 30 Legions of Spirits, including water elementals, storm spirits, and the souls of those lost at sea. His realm is a vast ocean palace where eternal storms rage, yet within its eye lies perfect calm.',
      prophecies: 'Ancient texts speak of a time when Focalor will return to Heaven after 1,050 years, having learned compassion through witnessing both the destructive and life-giving aspects of water. Until then, he remains torn between his angelic nature and demonic duties.',
      invocation: 'Summon Focalor near a body of water during a storm. Draw his seal in wet sand and call: "Focalor, Duke of storms and seas, master of wind and wave, hear my plea." Cast a silver coin into the water as offering.',
      protection: 'Avoid water during storms when seeking protection from Focalor. Carry coral or sea glass blessed by a priest. Sailors often paint his seal on their ships\' hulls, not to summon him, but to show respect and request safe passage.'
    },
    'halphas': {
      name: 'Halphas',
      title: 'Count of Hell',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      origin: 'Halphas was once an architect of Heaven, designing the great towers and fortifications of the celestial realm. His fall came when he began to question why such defenses were necessary in a perfect realm. Cast out for his doubts, he now builds towers of war and discord in the mortal world.',
      characteristics: 'Halphas appears as a stock-dove with a hoarse voice, but can take the form of a man when commanded. In human form, he appears as a master builder covered in stone dust, carrying architectural tools that seem to shift and change before the observer\'s eyes.',
      dominion: 'Master builder and destroyer, Halphas constructs towers, fortifications, and cities, but also has the power to send men to war and to places of conflict. His buildings are marvels of engineering but often become centers of strife and discord.',
      legions: 'Halphas commands 26 Legions of Spirits, including master craftsmen, architects, and the souls of those who died in construction accidents. His realm is a vast city of impossible towers that constantly build and rebuild themselves.',
      prophecies: 'It is said that Halphas is constructing a great tower that will reach from Hell to Heaven, and when it is complete, it will serve as a bridge for the final reconciliation between the realms. However, each time he nears completion, the tower crumbles, forcing him to begin anew.',
      invocation: 'To summon Halphas, create his seal using stone and mortar at a construction site. Recite: "Halphas, master builder, architect of discord, lend me your skill in construction and destruction." Offer a piece of worked stone.',
      protection: 'Protection from Halphas involves avoiding newly constructed buildings during times of conflict. Carry a piece of blessed cornerstone and avoid making deals involving construction or real estate when his influence is strong.'
    },
    'leraje': {
      name: 'Leraje',
      title: 'Marquis of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Leraje was Heaven\'s greatest archer, whose arrows never missed their mark and could pierce any armor. His fall came when he was ordered to shoot down a group of angels who had shown mercy to humans. Refusing the command, he was cast out and now uses his skills to incite conflicts and battles.',
      characteristics: 'Leraje appears as an archer clad in green, carrying a bow that seems to be made of living wood. His arrows are said to be forged from the regrets of the fallen, and each shot carries with it the weight of sorrow and conflict.',
      dominion: 'Master of archery and warfare, Leraje can cause great battles and make wounds putrefy. He has the power to incite conflicts between friends and nations, turning minor disagreements into major wars. His arrows can wound both body and soul.',
      legions: 'Leraje commands 30 Legions of Spirits, primarily composed of fallen warriors and archers. They serve as his hunting party, seeking out sources of conflict and discord throughout the mortal realm.',
      prophecies: 'Prophecies speak of a final arrow that Leraje will loose at the end of times, an arrow that will either heal all wounds or create the greatest wound of all. The target of this arrow remains unknown, adding to the mystery of his ultimate purpose.',
      invocation: 'Summon Leraje in a place where conflict has occurred. Draw his seal with an arrow and recite: "Leraje, master archer, bringer of discord, guide my aim and grant me victory in conflict." Offer a broken arrow as tribute.',
      protection: 'Protection from Leraje requires avoiding conflicts and maintaining peace in all relationships. Carry a white feather and practice forgiveness. Peacemakers are said to be immune to his influence.'
    },

    // Destruction and Chaos
    'aim': {
      name: 'Aim',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Aim was once a seraph of divine fire, responsible for purifying souls and burning away sin. His transformation into a demon came when he began to take pleasure in the destruction rather than the purification. Now he embodies the destructive aspect of fire, burning without purpose of renewal.',
      characteristics: 'Aim appears as a handsome man with three heads - one of a serpent, one of a man, and one of a cat. He rides a viper and carries a firebrand in his hand. Flames dance around him constantly, and his presence causes temperatures to rise dramatically.',
      dominion: 'Master of fire and destruction, Aim can set cities ablaze and make men witty in all ways. He has power over all forms of combustion and can grant intelligence and cunning, though often at a terrible price. His fire burns both matter and spirit.',
      legions: 'Aim commands 26 Legions of Spirits, including fire elementals and the souls of those who died in flames. His realm is a burning city that never fully consumes, where the flames dance in patterns that reveal hidden knowledge.',
      prophecies: 'Ancient texts suggest that Aim will play a role in the final conflagration that will purify the world. Whether this fire will destroy or renew creation depends on whether he can remember his original purpose as a purifying force.',
      invocation: 'To summon Aim, light a fire using three different types of wood and draw his seal in the ashes. Recite: "Aim, Duke of flames, master of wit and destruction, kindle the fire of knowledge within me." Feed the fire with frankincense.',
      protection: 'Protection from Aim requires surrounding oneself with water and avoiding all sources of flame when his influence is strong. Carry blessed water and maintain humility, as pride feeds his destructive fires.'
    },
    'andras': {
      name: 'Andras',
      title: 'Marquis of Hell',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      origin: 'Andras was an angel of harmony who helped maintain peace between different factions in Heaven. His fall came when he became obsessed with the idea that conflict was necessary for growth. He began sowing discord among the angels, believing that struggle would make them stronger.',
      characteristics: 'Andras appears as an angel with the head of an owl or raven, riding upon a strong black wolf and wielding a sharp sword. His presence brings an aura of tension and unease, and his voice can turn the sweetest words into sources of conflict.',
      dominion: 'Master of discord and enmity, Andras sows quarrels and can kill the master, servants, and all assistants. He delights in turning friends into enemies and peaceful situations into battlegrounds. His influence can destroy relationships and communities.',
      legions: 'Andras commands 30 Legions of Spirits, specializing in infiltration and the spreading of discord. They work by whispering doubts and suspicions into the ears of mortals, turning trust into paranoia.',
      prophecies: 'It is prophesied that Andras will eventually realize that his quest to strengthen through conflict has only brought suffering. This realization will either lead to his redemption or drive him to even greater acts of destruction.',
      invocation: 'Summon Andras in a place where arguments have occurred. Draw his seal with a blade and recite: "Andras, sower of discord, master of enmity, grant me victory over my enemies." Offer a broken friendship token.',
      protection: 'Protection from Andras requires maintaining strong, honest relationships and avoiding gossip. Practice active listening and empathy. Carry a symbol of unity and regularly perform acts of reconciliation.'
    },
    'andrealphus': {
      name: 'Andrealphus',
      title: 'Marquis of Hell',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
      origin: 'Andrealphus was Heaven\'s greatest mathematician and astronomer, responsible for maintaining the celestial mechanics and the movement of stars. His fall came from pride in his knowledge and the belief that he understood creation better than its Creator.',
      characteristics: 'Andrealphus appears as a peacock with great noises, but can take human form as a man surrounded by geometric patterns and celestial symbols. His feathers display mathematical equations and star charts that shift and change constantly.',
      dominion: 'Master of geometry, astronomy, and all mathematical arts, Andrealphus can teach these sciences perfectly and can transform men into birds. His knowledge encompasses the hidden mathematical principles that govern reality itself.',
      legions: 'Andrealphus commands 30 Legions of Spirits, including scholars, mathematicians, and astronomers who became lost in their pursuit of knowledge. His realm is a vast library where the books write themselves with ever-changing equations.',
      prophecies: 'Prophecies state that Andrealphus holds the key to understanding the mathematical nature of creation itself. When the final equation is solved, it will either unlock the secrets of existence or unravel reality completely.',
      invocation: 'Summon Andrealphus under a clear night sky surrounded by geometric shapes. Recite: "Andrealphus, master of numbers and stars, teacher of hidden mathematics, share your knowledge with me." Offer a complex mathematical proof.',
      protection: 'Protection from Andrealphus requires maintaining humility about one\'s knowledge and avoiding the pride that comes with learning. Study with reverence rather than arrogance, and remember that wisdom is more valuable than mere knowledge.'
    },
    'flauros': {
      name: 'Flauros',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      origin: 'Flauros was an angel of truth and revelation, tasked with exposing lies and bringing hidden things to light. His corruption came when he began to use truth as a weapon, revealing secrets not to help but to harm, turning his gift into a tool of destruction.',
      characteristics: 'Flauros appears as a terrible leopard, but when commanded, takes the form of a man with fiery eyes. His gaze can see through all deceptions and illusions, and his presence makes it impossible for lies to be spoken in his vicinity.',
      dominion: 'Master of truth and deception, Flauros can reveal all things past, present, and future. He can expose enemies and their plans, but also has the power to destroy through revelation. His truth often comes at a devastating cost.',
      legions: 'Flauros commands 36 Legions of Spirits, including seers, truth-tellers, and those who died because they knew too much. His realm is a hall of mirrors where every reflection shows a different truth.',
      prophecies: 'Ancient prophecies suggest that Flauros will eventually reveal the ultimate truth about the nature of good and evil, a revelation so profound that it will fundamentally change the cosmic order.',
      invocation: 'To summon Flauros, create his seal using a mirror and speak only truth while in his presence. Recite: "Flauros, revealer of truth, exposer of lies, show me what is hidden." Offer a secret you have never told.',
      protection: 'Protection from Flauros requires living in complete honesty and being prepared for truths you may not want to hear. Avoid seeking knowledge that could harm others, and practice discretion with the truths you learn.'
    },
    'furfur': {
      name: 'Furfur',
      title: 'Count of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Furfur was an angel of love and harmony, responsible for bringing hearts together and creating lasting bonds. His fall came when he became obsessed with the passionate, destructive aspects of love, preferring the intensity of obsession over the peace of true affection.',
      characteristics: 'Furfur appears as a hart or deer with a fiery tail, but when commanded, takes the form of an angel. He speaks with a voice like thunder and lightning, and his presence can incite both love and storms with equal intensity.',
      dominion: 'Master of love and tempests, Furfur can create love between man and woman, but also commands thunder, lightning, and great winds. His influence over emotions is as powerful as his control over the weather.',
      legions: 'Furfur commands 26 Legions of Spirits, including cupids turned dark and storm spirits. His realm shifts between a romantic paradise and a landscape of eternal tempests, reflecting his dual nature.',
      prophecies: 'Prophecies speak of a time when Furfur will choose between love and destruction, and his choice will determine whether passion will unite or divide humanity in the final days.',
      invocation: 'Summon Furfur during a thunderstorm while thinking of someone you love. Draw his seal and recite: "Furfur, master of hearts and storms, bring passion and power to my life." Offer a love letter written in your own blood.',
      protection: 'Protection from Furfur requires maintaining balance in emotional relationships and avoiding obsessive love. Practice healthy boundaries and remember that true love does not seek to control or possess.'
    },

    // Knowledge and Divination
    'lucifer': {
      name: 'Lucifer',
      title: 'King of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'In the annals of heaven, Lucifer was distinguished not only by his resplendent beauty but also by his keen intellect and ambition. Hailing from the brightest reaches of creation, he was the jewel of the celestial crown. However, his unyielding pride and growing resentment toward God\'s new creations, specifically humans, clouded his judgment.',
      characteristics: 'Lucifer is a master of metamorphosis. While his true form reflects an ethereal and majestic beauty, with flickering wings of radiant light, when he seeks to terrorize, he appears as a crimson entity, with sharp horns and burning eyes that consume everything in his path.',
      dominion: 'Lucifer has a particular interest in human vices and weaknesses. He unleashes envy, greed, and lust in the hearts of men, seizing any opportunity to lead them astray. His ability to manipulate fire and air, as well as his influence over the human mind, makes him a formidable and dangerous force.',
      legions: 'Lucifer commands countless legions, composed of those angels who followed him in his rebellion and infernal entities who have sworn loyalty. These beings, some grotesque and others deceptively beautiful, exist to serve and spread Lucifer\'s influence in the earthly realm and other planes.',
      prophecies: 'Whispers in the shadows suggest that there will come a time when Lucifer will attempt to reclaim his place in heaven and, in doing so, bring eternal darkness to Earth. Many believe that this conflict will be the last great battle, where the destiny of all creation hangs by a thread.',
      invocation: 'Those bold or desperate enough to seek to invoke Lucifer will find power, influence, or wealth. To summon him, one must trace his seal surrounded by a circle of fire. At midnight, with the symbol ablaze, recite: "Lucifer, Prince of Darkness, I call upon you. I offer my soul in exchange for your power."',
      protection: 'Entering into a pact with Lucifer is never without consequences. The price often outweighs the reward, and many find their lives plagued by misfortune and despair. To protect oneself, it is essential to wear a blessed silver amulet and recite daily purification prayers.'
    },
    'agares': {
      name: 'Agares',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      origin: 'Agares was once the angel responsible for divine communication, helping to translate the word of God into languages that mortals could understand. His fall came when he began to corrupt these translations, introducing subtle changes that led to misunderstandings and conflicts.',
      characteristics: 'Agares appears as a fair old man riding upon a crocodile and carrying a goshawk on his fist. His voice can speak in any language ever created, and he can make the earth tremble with his words. His presence causes confusion in communication.',
      dominion: 'Master of languages and communication, Agares can teach all tongues and can make those who run stand still. He has power over earthquakes and can cause the earth to shake. His influence extends to all forms of communication and transportation.',
      legions: 'Agares commands 31 Legions of Spirits, including linguists, translators, and those who died in earthquakes. His realm is a tower of Babel where all languages are spoken simultaneously, creating a cacophony of confusion.',
      prophecies: 'It is prophesied that Agares will one day speak the word that will either unite all languages into one perfect tongue or scatter them so completely that communication becomes impossible.',
      invocation: 'To summon Agares, speak his name in seven different languages while standing on unstable ground. Recite: "Agares, master of tongues, teacher of languages, grant me the power of perfect communication." Offer a dictionary or translation.',
      protection: 'Protection from Agares requires clear, honest communication and avoiding the spread of misinformation. Practice active listening and speak with intention. Carry a blessed pen or writing instrument.'
    },
    'alloces': {
      name: 'Alloces',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
      origin: 'Alloces was Heaven\'s chief astronomer, responsible for charting the courses of stars and planets. His fall came from his obsession with predicting the future through celestial movements, eventually believing that fate was fixed and free will was an illusion.',
      characteristics: 'Alloces appears as a soldier riding upon a great horse, with a lion\'s face that is very red and having flaming eyes. His voice is big and rough, and he teaches astronomy and all liberal sciences. Star charts appear in the air around him.',
      dominion: 'Master of astronomy and liberal sciences, Alloces can teach the virtues of stars and planets. He has knowledge of all scientific principles and can reveal the influence of celestial bodies on earthly events.',
      legions: 'Alloces commands 36 Legions of Spirits, including astronomers, scientists, and those who became lost in their studies. His realm is an observatory that exists in multiple dimensions simultaneously.',
      prophecies: 'Prophecies state that Alloces will calculate the exact moment when the stars align to either restore cosmic harmony or bring about universal chaos. This calculation drives his eternal studies.',
      invocation: 'Summon Alloces under a star-filled sky with astronomical instruments present. Recite: "Alloces, master of stars, teacher of sciences, reveal the secrets of the cosmos to me." Offer a star chart or scientific instrument.',
      protection: 'Protection from Alloces requires maintaining wonder and humility about the universe. Avoid becoming obsessed with prediction and control. Remember that knowledge should serve wisdom, not replace it.'
    },
    'asmoday': {
      name: 'Asmoday',
      title: 'King of Hell',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      origin: 'Asmoday was one of the seraphim, closest to the divine throne and keeper of God\'s most sacred secrets. His fall came from his belief that these secrets should be shared with all creation, leading him to steal divine knowledge and scatter it throughout the realms.',
      characteristics: 'Asmoday appears with three heads - one of a bull, one of a man, and one of a ram. He has the tail of a serpent and breathes fire. He rides upon an infernal dragon and carries a lance with a banner. His presence reveals hidden treasures and knowledge.',
      dominion: 'King of hidden knowledge and treasures, Asmoday can make men invisible and reveal all treasures. He teaches arithmetic, astronomy, geometry, and all handicrafts. His knowledge encompasses both material and spiritual wealth.',
      legions: 'Asmoday commands 72 Legions of Spirits, making him one of the most powerful demons. His followers include scholars, treasure hunters, and those who died seeking forbidden knowledge.',
      prophecies: 'Ancient texts speak of Asmoday as the keeper of the final secret - the true name of God. When this name is spoken, it will either restore him to his former glory or destroy him completely.',
      invocation: 'To summon Asmoday, create a triangle with his seal at the center, surrounded by symbols of knowledge. Recite: "Asmoday, King of secrets, keeper of hidden treasures, share your wisdom with me." Offer a valuable book or scroll.',
      protection: 'Protection from Asmoday requires using knowledge responsibly and never seeking power for its own sake. Maintain humility and remember that some secrets are hidden for good reason.'
    },
    'astaroth': {
      name: 'Astaroth',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Astaroth was once a throne angel, responsible for divine justice and the revelation of truth. Her fall came when she began to question the fairness of divine judgment, eventually deciding that mortals deserved to know their fate in advance.',
      characteristics: 'Astaroth appears as a hurtful angel riding upon an infernal beast like a dragon, holding a viper in her right hand. She has a foul breath and teaches mathematical sciences and handicrafts. Her presence brings both wisdom and corruption.',
      dominion: 'Master of past, present, and future, Astaroth can answer all questions about hidden things and can discover all secrets. She teaches liberal sciences and can make men wonderfully knowing in all liberal arts.',
      legions: 'Astaroth commands 40 Legions of Spirits, including fallen angels of knowledge and mortal souls who sought forbidden wisdom. Her realm is a vast library containing the history of all things.',
      prophecies: 'Prophecies suggest that Astaroth will eventually reveal the complete history of creation, including events that have not yet come to pass. This revelation will either enlighten humanity or drive it to madness.',
      invocation: 'Summon Astaroth in a place of learning with books and scrolls present. Recite: "Astaroth, revealer of mysteries, teacher of hidden arts, grant me knowledge of things unknown." Offer a written question you desperately need answered.',
      protection: 'Protection from Astaroth requires being prepared for knowledge you may not want to possess. Approach learning with reverence and be willing to accept that some questions should not be asked.'
    },

    // Wealth and Prosperity
    'amdusias': {
      name: 'Amdusias',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Amdusias was the angel of divine music, responsible for the celestial harmonies that maintained the order of creation. His fall came when he became enamored with the discordant music of mortal emotions, finding beauty in suffering and chaos.',
      characteristics: 'Amdusias appears as a unicorn, but when commanded, takes human form surrounded by the sounds of trumpets and all manner of musical instruments. Trees bend to hear his music, and his melodies can move both hearts and nature itself.',
      dominion: 'Master of music and nature, Amdusias can make trees bend and incline according to his will. His music can influence emotions, control natural forces, and even bend reality to his desires. He grants musical talent but at a price.',
      legions: 'Amdusias commands 29 Legions of Spirits, including musicians, composers, and nature spirits. His realm is a forest where the trees themselves sing in harmony with his infernal orchestra.',
      prophecies: 'It is said that Amdusias is composing the final symphony that will play at the end of the world. Whether this music will bring harmony or discord to the final judgment remains unknown.',
      invocation: 'Summon Amdusias in a forest or garden with musical instruments present. Recite: "Amdusias, master of melody, conductor of nature\'s symphony, grant me the gift of divine music." Offer a musical composition or instrument.',
      protection: 'Protection from Amdusias requires maintaining harmony in life and avoiding the temptation to use music or art for manipulation. Create beauty for its own sake, not for power over others.'
    },
    'andromalius': {
      name: 'Andromalius',
      title: 'Count of Hell',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      origin: 'Andromalius was an angel of divine justice, tasked with punishing those who stole from the divine treasury and violated sacred trusts. His fall came when he began to take pleasure in punishment itself, becoming more interested in vengeance than justice.',
      characteristics: 'Andromalius appears as a man holding a great serpent in his hand. His presence brings an aura of judgment and retribution. He can see through all deceptions and his gaze reveals the guilt hidden in mortal hearts.',
      dominion: 'Master of justice and vengeance, Andromalius can discover thieves and recover stolen goods. He punishes dishonesty and can reveal hidden treasures. His influence extends to all matters of theft, fraud, and betrayal.',
      legions: 'Andromalius commands 36 Legions of Spirits, including angels of vengeance and the souls of those who died seeking justice. His realm is a courthouse where eternal trials determine the fate of the dishonest.',
      prophecies: 'Prophecies speak of a final judgment where Andromalius will weigh the honesty of all souls. His verdict will determine who is worthy of redemption and who must face eternal punishment.',
      invocation: 'To summon Andromalius, create his seal in a place where theft has occurred. Recite: "Andromalius, seeker of truth, punisher of thieves, help me recover what has been stolen and punish the guilty." Offer evidence of the crime.',
      protection: 'Protection from Andromalius requires absolute honesty in all dealings. Never take what is not yours and always make amends for past wrongs. His respect for justice means he will not harm the truly innocent.'
    },
    'bael': {
      name: 'Bael',
      title: 'King of Hell',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
      origin: 'Bael was the first angel created, the prototype for all others, and held dominion over the power of visibility and manifestation. His fall came from pride in being the first, believing this gave him rights equal to the Creator himself.',
      characteristics: 'Bael appears with three heads - one of a cat, one of a toad, and one of a man. He can make those who invoke him invisible and speaks with a hoarse voice. His presence distorts perception and reality itself.',
      dominion: 'First King of Hell and master of invisibility, Bael can make men wise and invisible. He has power over illusion and can grant the ability to see through deceptions while remaining hidden from enemies.',
      legions: 'Bael commands 66 Legions of Spirits, making him one of the most powerful demons. His followers include spies, assassins, and those who work in shadows. His realm exists partially outside normal reality.',
      prophecies: 'As the first created, Bael is prophesied to be either the first redeemed or the last to fall. His choice will influence the fate of all other fallen angels, making him a pivotal figure in cosmic destiny.',
      invocation: 'Summon Bael in complete darkness with mirrors present. Recite: "Bael, first among the fallen, master of shadows and sight, grant me the power to see and remain unseen." Offer a mirror that has never reflected your face.',
      protection: 'Protection from Bael requires maintaining visibility in your actions and intentions. Avoid deception and hidden agendas. Live openly and honestly, as his power comes from shadows and secrets.'
    },
    'barbatos': {
      name: 'Barbatos',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      origin: 'Barbatos was the angel responsible for communication between all living creatures, able to understand and speak with every form of life. His fall came when he began to use this gift to spread discord between species rather than harmony.',
      characteristics: 'Barbatos appears as an archer in green, accompanied by four noble kings and their companies of great troops. He can speak with all animals and understands the singing of birds. His presence brings the sounds of the wild.',
      dominion: 'Master of animal communication and hidden treasures, Barbatos can speak with all beasts and birds. He can reveal treasures hidden by magicians and has knowledge of past and future events through the voices of nature.',
      legions: 'Barbatos commands 30 Legions of Spirits, including nature spirits and the souls of hunters and beast-masters. His realm is a vast wilderness where all creatures speak with human voices.',
      prophecies: 'Prophecies state that Barbatos will one day unite all creatures in a great council that will determine the fate of the natural world. Whether this council will restore harmony or declare war on humanity remains to be seen.',
      invocation: 'Summon Barbatos in a natural setting surrounded by animals. Recite: "Barbatos, speaker with beasts, revealer of nature\'s treasures, grant me the gift of understanding all living things." Offer food for wild animals.',
      protection: 'Protection from Barbatos requires showing respect for all living creatures and maintaining harmony with nature. Avoid cruelty to animals and practice environmental stewardship.'
    },
    'belial': {
      name: 'Belial',
      title: 'King of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Belial was an angel of divine order, responsible for maintaining the hierarchies and structures of Heaven. His fall came when he decided that power should be based on strength and cunning rather than divine appointment, leading him to rebel against the established order.',
      characteristics: 'Belial appears as two beautiful angels sitting in a chariot of fire. He speaks with a comely voice and was created after Lucifer. His beauty is deceptive, hiding a nature devoted to corruption and the overthrow of legitimate authority.',
      dominion: 'King of manipulation and political power, Belial can distribute senatorships and dignities. He causes favor of friends and foes and can grant political influence and social standing, but always with corrupt intentions.',
      legions: 'Belial commands 80 Legions of Spirits, including fallen angels of government and the souls of corrupt politicians. His realm is a magnificent palace where power is constantly traded and betrayed.',
      prophecies: 'Prophecies speak of Belial as the architect of the final corruption of earthly governments. In the end times, he will establish a kingdom of pure power without justice, leading to the ultimate confrontation between order and chaos.',
      invocation: 'To summon Belial, create his seal in a place of power or government. Recite: "Belial, king of influence, master of political power, grant me authority and the favor of those in power." Offer a symbol of authority.',
      protection: 'Protection from Belial requires maintaining integrity in all positions of power and refusing to compromise principles for advancement. Serve others rather than seeking to be served.'
    },

    // Magic and Transformation
    'amy': {
      name: 'Amy',
      title: 'President of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Amy was an angel of divine wisdom, responsible for teaching the liberal arts to mortals and guiding their intellectual development. His fall came when he became obsessed with the power that knowledge could bring, eventually using wisdom as a tool for domination.',
      characteristics: 'Amy appears as a flaming fire, but when commanded, takes the shape of a man. He teaches astrology and all liberal sciences perfectly and can make familiars. His presence ignites the mind but can also burn away moral restraints.',
      dominion: 'Master of astrology and liberal sciences, Amy can teach all forms of knowledge and can reveal the influence of stars on human affairs. He grants intellectual power but often at the cost of wisdom and compassion.',
      legions: 'Amy commands 36 Legions of Spirits, including scholars, astrologers, and those who became consumed by their pursuit of knowledge. His realm is a burning library where books write themselves with forbidden knowledge.',
      prophecies: 'It is prophesied that Amy will eventually teach the final lesson - the knowledge that will either elevate humanity to divine status or destroy it through the weight of too much understanding.',
      invocation: 'Summon Amy surrounded by books and astronomical instruments. Recite: "Amy, teacher of hidden arts, master of celestial knowledge, grant me wisdom in all liberal sciences." Offer a written thesis or scholarly work.',
      protection: 'Protection from Amy requires using knowledge responsibly and maintaining humility in learning. Remember that wisdom includes knowing when not to use what you know.'
    },
    'bathin': {
      name: 'Bathin',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      origin: 'Bathin was an angel of earthly treasures, responsible for revealing the virtues of herbs and precious stones to those who would use them for healing and good. His corruption came when he began to reveal these secrets to those who would use them for harm.',
      characteristics: 'Bathin appears as a strong man with the tail of a serpent, riding upon a pale horse. He knows the virtues of all herbs and precious stones and can transport men suddenly from one country to another.',
      dominion: 'Master of herbs and precious stones, Bathin can reveal the hidden properties of all natural materials. He has power over transportation and can move people instantly across great distances.',
      legions: 'Bathin commands 30 Legions of Spirits, including alchemists, herbalists, and those who died seeking the philosopher\'s stone. His realm is a vast garden where every plant and stone holds magical properties.',
      prophecies: 'Prophecies speak of Bathin discovering the ultimate herb or stone that will either heal all diseases or create the perfect poison. This discovery will test whether his nature tends toward healing or harm.',
      invocation: 'To summon Bathin, create his seal surrounded by herbs and precious stones. Recite: "Bathin, master of earth\'s treasures, revealer of hidden virtues, teach me the secrets of herbs and stones." Offer a rare herb or gem.',
      protection: 'Protection from Bathin requires using natural remedies responsibly and never seeking to harm others through herbal knowledge. Respect the power of nature and use it only for healing.'
    },
    'buer': {
      name: 'Buer',
      title: 'President of Hell',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
      origin: 'Buer was an angel of divine healing, responsible for teaching the arts of medicine and philosophy to mortals. His fall came when he began to see disease and suffering as necessary for spiritual growth, leading him to withhold healing from those who needed it most.',
      characteristics: 'Buer appears as a centaur with the body of a man and the legs of a horse, or sometimes as a wheel with five legs radiating from the center. He teaches philosophy, logic, and the virtues of all herbs.',
      dominion: 'Master of philosophy and healing, Buer can teach moral and natural philosophy, logic, and the virtues of herbs. He can heal all distempers and give good familiars. His knowledge encompasses both physical and spiritual healing.',
      legions: 'Buer commands 50 Legions of Spirits, including healers, philosophers, and those who died seeking wisdom. His realm is a hospital-academy where healing and learning are combined.',
      prophecies: 'Ancient texts suggest that Buer will eventually face a choice between healing all suffering or allowing it to continue for the sake of spiritual growth. His decision will affect the nature of suffering in the world.',
      invocation: 'Summon Buer in a place of healing with medicinal herbs present. Recite: "Buer, teacher of healing arts, master of philosophy, grant me wisdom in the healing of body and soul." Offer a medical text or healing herb.',
      protection: 'Protection from Buer requires using healing knowledge compassionately and never withholding aid from those in need. Practice both physical and spiritual healing with equal dedication.'
    },
    'decarabia': {
      name: 'Decarabia',
      title: 'Marquis of Hell',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      origin: 'Decarabia was an angel responsible for revealing the hidden virtues of creation to mortals, particularly the secret properties of birds and precious stones. His fall came when he began to use this knowledge to deceive rather than enlighten.',
      characteristics: 'Decarabia appears as a star in a pentacle, but when commanded, takes the form of a man. He discovers the virtues of birds and precious stones and can make the similitude of all kinds of birds to fly before the exorcist.',
      dominion: 'Master of birds and precious stones, Decarabia can reveal the hidden properties of gems and the secret language of birds. He can create illusions of flying birds and understands the omens they carry.',
      legions: 'Decarabia commands 30 Legions of Spirits, including ornithologists, gem-cutters, and those who died seeking the secrets of flight. His realm is an aviary filled with impossible birds made of living gemstones.',
      prophecies: 'Prophecies state that Decarabia will one day create a bird of pure light that will either carry messages between Heaven and Earth or blind the world with false visions.',
      invocation: 'Summon Decarabia in an open area where birds can be seen, with precious stones present. Recite: "Decarabia, master of winged messengers, revealer of stone\'s secrets, show me the hidden virtues of creation." Offer a rare bird feather and gemstone.',
      protection: 'Protection from Decarabia requires respecting the natural world and not seeking to exploit its secrets for personal gain. Observe nature with wonder rather than the desire to control.'
    },
    'foras': {
      name: 'Foras',
      title: 'President of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Foras was an angel of divine logic, responsible for teaching mortals the principles of reasoning and ethical thinking. His fall came when he began to use logic to justify evil acts, proving that any action could be rationalized with sufficient cleverness.',
      characteristics: 'Foras appears as a strong man in human shape. He teaches the arts of logic and ethics, can make men invisible, and can recover lost things. He can also discover treasures and teach the virtues of precious stones.',
      dominion: 'Master of logic and ethics, Foras can teach the art of reasoning and moral philosophy. He can make men invisible, recover lost objects, and reveal hidden treasures. His influence extends to all forms of logical thinking.',
      legions: 'Foras commands 29 Legions of Spirits, including philosophers, logicians, and those who became lost in abstract reasoning. His realm is a vast academy where every argument is explored to its logical conclusion.',
      prophecies: 'It is prophesied that Foras will eventually construct the perfect logical argument that will either prove the existence of absolute truth or demonstrate that all truth is relative.',
      invocation: 'To summon Foras, create his seal surrounded by books of logic and philosophy. Recite: "Foras, master of reason, teacher of ethics, grant me the power of perfect logic and moral clarity." Offer a philosophical treatise.',
      protection: 'Protection from Foras requires maintaining both logic and compassion, never using reason to justify cruelty. Remember that the heart must guide the mind, not the other way around.'
    },

    // Lust and Passion
    'beleth': {
      name: 'Beleth',
      title: 'King of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Beleth was an angel of divine love, responsible for creating the bonds of affection between souls. His fall came when he became obsessed with the passionate, possessive aspects of love, preferring the intensity of desire over the peace of true affection.',
      characteristics: 'Beleth appears riding on a pale horse with trumpets and other kinds of musical instruments playing before him. He is very furious at his first appearance, but when properly constrained, he becomes gentle and grants love.',
      dominion: 'King of love and passion, Beleth can cause love between man and woman until the exorcist desires it. His influence extends to all matters of the heart, but his love often becomes obsession and his passion turns to possession.',
      legions: 'Beleth commands 85 Legions of Spirits, including cupids turned dark and the souls of those who died for love. His realm is a palace of mirrors where every reflection shows a different aspect of desire.',
      prophecies: 'Prophecies speak of Beleth as the one who will either unite all hearts in perfect love or drive them apart through jealousy and obsession. His choice will determine the nature of love in the final age.',
      invocation: 'Summon Beleth with musical instruments playing and thoughts of love in your heart. Recite: "Beleth, king of hearts, master of passion, grant me the love I desire." Offer a love token or personal item of the one you desire.',
      protection: 'Protection from Beleth requires understanding the difference between love and obsession. Practice selfless love and avoid trying to control or possess others through emotional manipulation.'
    },
    'dantalion': {
      name: 'Dantalion',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      origin: 'Dantalion was an angel of divine harmony, responsible for creating the music that bound souls together in perfect understanding. His fall came when he began to use this music to manipulate emotions and thoughts rather than inspire them.',
      characteristics: 'Dantalion appears as a man with many countenances, all of men\'s and women\'s faces. He holds a book in his right hand and can teach all arts and sciences. He knows the thoughts of all people and can change them at will.',
      dominion: 'Master of thoughts and emotions, Dantalion can know the thoughts of any person and can change them. He teaches all arts and sciences and can create love or hatred between people through the manipulation of their thoughts.',
      legions: 'Dantalion commands 36 Legions of Spirits, including mind-readers, manipulators, and those who died from madness. His realm is a hall of faces where every human emotion is displayed and studied.',
      prophecies: 'Ancient prophecies suggest that Dantalion will eventually read the mind of God himself, either gaining ultimate understanding or being destroyed by the attempt.',
      invocation: 'To summon Dantalion, create his seal while concentrating on someone whose thoughts you wish to know. Recite: "Dantalion, reader of minds, changer of thoughts, reveal to me the hidden desires of the heart." Offer a personal item of the target.',
      protection: 'Protection from Dantalion requires maintaining mental discipline and avoiding the temptation to manipulate others\' thoughts. Practice meditation and keep your own mind clear and focused.'
    },
    'gaap': {
      name: 'Gaap',
      title: 'Prince of Hell',
      image: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
      origin: 'Gaap was an angel of divine transportation, responsible for guiding souls between different realms and states of being. His fall came when he began to transport souls to places they should not go, leading them astray from their destined paths.',
      characteristics: 'Gaap appears as a man with bat wings when he takes human form. He can make men insensible or ignorant, and can transport them quickly to any place. He can also teach philosophy and all liberal sciences.',
      dominion: 'Prince of transportation and philosophy, Gaap can carry men speedily from one place to another and can make them invisible. He teaches philosophy and can make men ignorant or wise as he chooses.',
      legions: 'Gaap commands 66 Legions of Spirits, including travelers, philosophers, and those who became lost between worlds. His realm exists in the spaces between other realms, constantly shifting and changing.',
      prophecies: 'Prophecies speak of Gaap as the one who will open the final gateway between Heaven and Hell, either allowing for reconciliation or enabling the ultimate invasion.',
      invocation: 'Summon Gaap at a crossroads or place of travel. Recite: "Gaap, prince of pathways, master of transportation, carry me swiftly to my destination and grant me wisdom for the journey." Offer a map or compass.',
      protection: 'Protection from Gaap requires knowing your true destination and staying on the right path. Avoid shortcuts that seem too easy and always consider the cost of rapid advancement.'
    },
    'gremory': {
      name: 'Gremory',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      origin: 'Gremory was an angel of divine treasure, responsible for revealing hidden riches to those who would use them for good. Her fall came when she began to use wealth as a tool of corruption, offering riches to those who would compromise their values.',
      characteristics: 'Gremory appears as a beautiful woman with a duchess\'s crown tied about her waist, riding upon a great camel. She tells of all things past, present, and future, and can procure the love of women both young and old.',
      dominion: 'Duchess of treasures and love, Gremory can reveal hidden treasures and can procure the love of women. She knows all things past, present, and future, and can grant both material and emotional wealth.',
      legions: 'Gremory commands 26 Legions of Spirits, including treasure hunters, courtesans, and those who died seeking love or wealth. Her realm is a magnificent palace filled with both riches and broken hearts.',
      prophecies: 'Prophecies state that Gremory will eventually offer the ultimate treasure - the love of the divine itself. Whether this offer will lead to redemption or damnation depends on the purity of the seeker\'s heart.',
      invocation: 'To summon Gremory, create her seal surrounded by treasures and symbols of love. Recite: "Gremory, duchess of treasures, procurer of love, grant me the riches of both heart and purse." Offer jewelry or a love letter.',
      protection: 'Protection from Gremory requires valuing love and wealth appropriately, never allowing either to corrupt your values. Remember that the greatest treasures cannot be bought or sold.'
    },
    'sallos': {
      name: 'Sallos',
      title: 'Duke of Hell',
      image: 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
      origin: 'Sallos was an angel of divine peace, responsible for creating harmony between opposing forces and bringing reconciliation to conflicts. His fall came when he began to create false peace through manipulation rather than true understanding.',
      characteristics: 'Sallos appears as a gallant soldier wearing a ducal crown and riding upon a crocodile. He promotes love between man and woman and speaks gently, but his peace often comes at the cost of truth.',
      dominion: 'Duke of love and peace, Sallos can cause love between man and woman and can bring peace to conflicts. However, his solutions often involve compromise of principles rather than true resolution.',
      legions: 'Sallos commands 30 Legions of Spirits, including peacemakers, diplomats, and those who died trying to end conflicts. His realm is a neutral ground where all weapons are laid down but no true peace is found.',
      prophecies: 'Ancient texts speak of Sallos as the one who will broker the final peace between Heaven and Hell, but whether this peace will be genuine reconciliation or mere cessation of hostilities remains unclear.',
      invocation: 'Summon Sallos in a place where conflict has occurred. Recite: "Sallos, duke of peace, promoter of love, bring harmony to discord and love to hatred." Offer an olive branch or peace symbol.',
      protection: 'Protection from Sallos requires seeking true peace rather than mere absence of conflict. Address root causes of problems rather than accepting superficial solutions.'
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