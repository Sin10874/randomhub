const fs = require('fs');

// Read existing sentences
const existingSentences = require('./public/data/sentences.json');

// Calculate current distribution
const currentTypes = {};
const currentTopics = {};
const currentCombos = {};

existingSentences.forEach(s => {
  currentTypes[s.type] = (currentTypes[s.type] || 0) + 1;
  currentTopics[s.topic] = (currentTopics[s.topic] || 0) + 1;
  const key = `${s.type}-${s.topic}`;
  currentCombos[key] = (currentCombos[key] || 0) + 1;
});

console.log('Current distribution:');
console.log('Types:', currentTypes);
console.log('Topics:', currentTopics);

// Target: 2000 total, 500 per type, 250 per topic
const TARGET_TOTAL = 2000;
const TARGET_PER_TYPE = 500;
const TARGET_PER_TOPIC = 250;

// Calculate needed sentences per type
const neededPerType = {
  'Declarative': TARGET_PER_TYPE - (currentTypes['Declarative'] || 0),
  'Interrogative': TARGET_PER_TYPE - (currentTypes['Interrogative'] || 0),
  'Exclamatory': TARGET_PER_TYPE - (currentTypes['Exclamatory'] || 0),
  'Imperative': TARGET_PER_TYPE - (currentTypes['Imperative'] || 0)
};

// Calculate needed sentences per topic
const neededPerTopic = {
  'Nature': TARGET_PER_TOPIC - (currentTopics['Nature'] || 0),
  'Science': TARGET_PER_TOPIC - (currentTopics['Science'] || 0),
  'Education': TARGET_PER_TOPIC - (currentTopics['Education'] || 0),
  'Daily Life': TARGET_PER_TOPIC - (currentTopics['Daily Life'] || 0),
  'Technology': TARGET_PER_TOPIC - (currentTopics['Technology'] || 0),
  'Sports': TARGET_PER_TOPIC - (currentTopics['Sports'] || 0),
  'Travel': TARGET_PER_TOPIC - (currentTopics['Travel'] || 0),
  'Entertainment': TARGET_PER_TOPIC - (currentTopics['Entertainment'] || 0)
};

console.log('\nNeeded per type:', neededPerType);
console.log('Needed per topic:', neededPerTopic);

// New sentences organized by type and topic
const newSentences = {
  // NATURE sentences
  'Declarative-Nature': [
    "The forest canopy filters sunlight into dancing patterns.",
    "Mountains rise majestically against the azure sky.",
    "Rivers carve intricate pathways through ancient rock formations.",
    "Wildflowers bloom in vibrant colors across meadows.",
    "Ocean waves crash rhythmically against weathered cliffs.",
  ],
  'Interrogative-Nature': [
    "Have you noticed how clouds change shape constantly?",
    "Why do leaves change color during autumn months?",
    "What makes rainbows appear after summer storms?",
    "Can you hear the birds singing this morning?",
    "How deep does the ocean floor descend?",
    "When will the cherry blossoms reach full bloom?",
    "Where do butterflies migrate during winter seasons?",
    "Why do some flowers only bloom at night?",
    "What causes lightning to strike during thunderstorms?",
    "Have you seen the northern lights before?",
    "How many species live in coral reefs?",
    "Why does morning dew form on grass?",
    "What makes volcanos erupt with such force?",
    "Can animals predict earthquakes before they happen?",
    "Where do migrating birds find their way home?",
  ],
  'Exclamatory-Nature': [
    "What a breathtaking sunset over the mountains!",
    "How beautiful those wildflowers look today!",
    "What an incredible thunderstorm that was!",
    "How majestic those redwood trees stand!",
    "What a stunning rainbow after the rain!",
    "How peaceful this forest glade feels!",
    "What magnificent waterfalls cascade down those rocks!",
    "How brilliant the stars shine tonight!",
    "What a spectacular view from this peak!",
    "How vibrant autumn colors paint the landscape!",
    "What incredible patterns frost creates overnight!",
    "How soothing ocean waves sound at dawn!",
    "What amazing creatures inhabit these coral reefs!",
    "How powerful nature's forces truly are!",
    "What a gorgeous meadow filled with flowers!",
  ],
  'Imperative-Nature': [
    "Observe how the river flows around obstacles.",
    "Listen to the wind rustling through trees.",
    "Notice the intricate patterns in snowflakes.",
    "Watch how clouds drift across the sky.",
    "Feel the soft moss beneath your feet.",
    "Appreciate the beauty of natural landscapes.",
    "Protect endangered species and their habitats.",
    "Plant trees to help restore our forests.",
    "Reduce pollution to preserve clean water sources.",
    "Respect wildlife and maintain safe distances.",
    "Study the behavior of animals in nature.",
    "Document rare species before they disappear.",
    "Conserve natural resources for future generations.",
    "Explore hiking trails with care and awareness.",
    "Admire the complexity of ecosystem relationships.",
  ],

  // SCIENCE sentences
  'Declarative-Science': [
    "Atoms combine to form molecules in chemical reactions.",
    "Gravity pulls objects toward the earth's center.",
    "Light travels faster than any other phenomenon.",
    "DNA contains genetic information for all organisms.",
    "Electrons orbit around the nucleus of atoms.",
  ],
  'Interrogative-Science': [
    "How does photosynthesis convert sunlight into energy?",
    "What causes planets to orbit around stars?",
    "Why do objects fall at equal acceleration?",
    "Can quantum computers solve complex problems faster?",
    "How many elements exist in the universe?",
    "What makes black holes so incredibly dense?",
    "Why does ice float on liquid water?",
    "How do vaccines strengthen our immune systems?",
    "What causes the greenhouse effect on Earth?",
    "Can we travel faster than light someday?",
    "How did the universe begin expanding outward?",
    "Why do magnets attract certain metals only?",
    "What makes radioactive materials decay over time?",
    "How do cells divide and replicate themselves?",
    "Why does matter exist in different states?",
  ],
  'Exclamatory-Science': [
    "What an amazing discovery in quantum mechanics!",
    "How fascinating the human brain truly is!",
    "What incredible advances medicine has achieved!",
    "How complex the periodic table appears!",
    "What a remarkable breakthrough in gene therapy!",
    "How mysterious dark matter remains today!",
    "What extraordinary power nuclear reactions release!",
    "How intricate cellular processes work continuously!",
    "What stunning images telescopes can capture!",
    "How precise mathematical equations describe reality!",
    "What remarkable adaptations evolution has produced!",
    "How vast the observable universe extends!",
    "What incredible speeds light particles achieve!",
    "How elegant Einstein's theories explain spacetime!",
    "What amazing potential stem cells possess!",
  ],
  'Imperative-Science': [
    "Study the periodic table to understand chemistry.",
    "Examine specimens carefully under the microscope.",
    "Record all experimental observations in your notebook.",
    "Test your hypothesis through controlled experiments.",
    "Analyze data before drawing scientific conclusions.",
    "Question assumptions and verify your findings.",
    "Research previous studies before starting new projects.",
    "Measure variables accurately for reliable results.",
    "Document your methodology for future reference.",
    "Collaborate with peers to advance knowledge.",
    "Investigate natural phenomena with systematic approaches.",
    "Calculate probabilities using statistical methods.",
    "Observe patterns in experimental data carefully.",
    "Replicate studies to confirm their validity.",
    "Explore new theories with open-minded curiosity.",
  ],

  // EDUCATION sentences
  'Declarative-Education': [
    "Students learn best through active engagement activities.",
    "Critical thinking skills develop with consistent practice.",
    "Libraries provide valuable resources for academic research.",
    "Teachers inspire curiosity and foster intellectual growth.",
    "Reading comprehension improves with regular daily practice.",
  ],
  'Interrogative-Education': [
    "What learning methods work best for you?",
    "How can technology enhance classroom instruction?",
    "Why is collaborative learning so effective?",
    "When should students start learning foreign languages?",
    "What motivates you to study difficult subjects?",
    "How do different teaching styles affect understanding?",
    "Why is practical experience important in education?",
    "Can online courses replace traditional classroom learning?",
    "What makes an effective study environment?",
    "How should schools adapt to changing times?",
    "Why do students need creative expression opportunities?",
    "What role does feedback play in learning?",
    "How can we make education more accessible?",
    "Why is lifelong learning becoming increasingly important?",
    "What skills will students need for future?",
  ],
  'Exclamatory-Education': [
    "What an inspiring lecture that professor delivered!",
    "How proud we are of your achievements!",
    "What excellent progress you have made recently!",
    "How fascinating this subject matter is!",
    "What a brilliant solution to that problem!",
    "How rewarding teaching can truly be!",
    "What an impressive research project you completed!",
    "How dedicated these students work together!",
    "What wonderful opportunities education provides!",
    "How creative your presentation turned out!",
    "What exceptional test scores you achieved!",
    "How enlightening this course has been!",
    "What a transformative learning experience that was!",
    "How engaged the entire class became!",
    "What amazing potential young minds possess!",
  ],
  'Imperative-Education': [
    "Review your notes before the examination begins.",
    "Participate actively in class discussions today.",
    "Complete all homework assignments on time.",
    "Ask questions when you need clarification.",
    "Organize your study materials for better efficiency.",
    "Practice problems to reinforce your understanding.",
    "Develop good study habits early in life.",
    "Seek help from teachers when struggling.",
    "Take thorough notes during lectures and presentations.",
    "Set achievable academic goals for this semester.",
    "Read assigned chapters before attending class.",
    "Collaborate with classmates on group projects.",
    "Focus on understanding concepts rather than memorizing.",
    "Manage your time wisely between different subjects.",
    "Explore topics beyond the required curriculum.",
  ],

  // DAILY LIFE sentences
  'Declarative-Daily Life': [
    "Morning routines set the tone for productive days.",
    "Grocery shopping requires careful planning and budgeting.",
    "Public transportation connects neighborhoods across the city.",
    "Household chores maintain a clean living environment.",
    "Cooking meals at home saves money long-term.",
  ],
  'Interrogative-Daily Life': [
    "What time do you usually wake up?",
    "How do you commute to work daily?",
    "Where do you prefer shopping for groceries?",
    "Why do you enjoy your morning coffee?",
    "When did you last organize your closet?",
    "What hobbies do you pursue regularly?",
    "How often do you exercise each week?",
    "Can you recommend a good restaurant nearby?",
    "What daily habits improve your wellbeing?",
    "How do you manage stress effectively?",
    "Where do you like spending free time?",
    "Why is work-life balance so challenging?",
    "What makes a house feel like home?",
    "How do you stay connected with friends?",
    "When do you find time for relaxation?",
  ],
  'Exclamatory-Daily Life': [
    "What a delicious meal we enjoyed tonight!",
    "How comfortable this new sofa feels!",
    "What a hectic day that turned out!",
    "How refreshing a cold shower feels!",
    "What wonderful neighbors we have here!",
    "How satisfying cleaning the house can be!",
    "What a perfect cup of tea this!",
    "How convenient online shopping has become!",
    "What a bargain I found at that!",
    "How quickly time passes on weekends!",
    "What a lovely garden you have grown!",
    "How exhausting moving houses can be!",
    "What fantastic weather for outdoor activities!",
    "How organized your kitchen looks now!",
    "What a cozy atmosphere candles create!",
  ],
  'Imperative-Daily Life': [
    "Lock the door before leaving the house.",
    "Water the plants every other morning.",
    "Pay your bills before the due date.",
    "Check expiration dates on food items regularly.",
    "Keep emergency contacts saved on your phone.",
    "Maintain a balanced diet for better health.",
    "Schedule regular appointments with your doctor.",
    "Clean the refrigerator once a month.",
    "Sort laundry by color before washing.",
    "Set reminders for important tasks and events.",
    "Keep your living space tidy and organized.",
    "Replace air filters in your home regularly.",
    "Turn off lights when leaving a room.",
    "Recycle materials to reduce household waste.",
    "Practice good hygiene habits every day.",
  ],

  // TECHNOLOGY sentences
  'Declarative-Technology': [
    "Artificial intelligence transforms how we process information.",
    "Cloud computing enables remote data storage accessibility.",
    "Smartphones have become essential communication devices worldwide.",
    "Cybersecurity protects sensitive information from malicious attacks.",
    "Renewable energy technology reduces environmental carbon footprints.",
  ],
  'Interrogative-Technology': [
    "How does machine learning actually work?",
    "What makes quantum computing so powerful?",
    "Can blockchain technology revolutionize digital transactions?",
    "Why do software updates happen so frequently?",
    "How secure are biometric authentication systems?",
    "What impact will automation have on jobs?",
    "When will electric vehicles become mainstream?",
    "How do virtual reality headsets create immersion?",
    "Why is data privacy becoming more important?",
    "What technologies will shape the next decade?",
    "How can we prevent cyber attacks effectively?",
    "Why do batteries still have limited capacity?",
    "What makes fiber optic internet so fast?",
    "How will robotics change manufacturing industries?",
    "Can technology solve climate change challenges?",
  ],
  'Exclamatory-Technology': [
    "What amazing innovations technology brings daily!",
    "How rapidly artificial intelligence is advancing!",
    "What incredible connectivity the internet provides!",
    "How sophisticated modern smartphones have become!",
    "What revolutionary potential quantum computers have!",
    "How seamlessly devices sync across platforms!",
    "What impressive graphics modern games display!",
    "How convenient digital payments have become!",
    "What powerful capabilities processors now possess!",
    "How transformative renewable energy technology is!",
    "What extraordinary precision 3D printers achieve!",
    "How immersive virtual reality experiences feel!",
    "What remarkable progress robotics has made!",
    "How efficient electric vehicles are becoming!",
    "What endless possibilities coding opens up!",
  ],
  'Imperative-Technology': [
    "Update your software to the latest version.",
    "Back up important files to cloud storage.",
    "Use strong passwords for all online accounts.",
    "Enable two-factor authentication for extra security.",
    "Clear your browser cache and cookies regularly.",
    "Install antivirus software on your devices.",
    "Restart your computer to apply system updates.",
    "Disconnect from public Wi-Fi when handling sensitive data.",
    "Charge your devices before they drain completely.",
    "Organize digital files into labeled folders.",
    "Review privacy settings on social media platforms.",
    "Learn basic coding skills for career advancement.",
    "Protect your eyes from screen strain regularly.",
    "Delete unused apps to free storage space.",
    "Research before purchasing new tech gadgets.",
  ],

  // SPORTS sentences
  'Declarative-Sports': [
    "Athletic training requires dedication and consistent effort.",
    "Team sports build camaraderie and cooperative skills.",
    "Professional athletes maintain rigorous training schedules daily.",
    "Physical fitness contributes to overall health and wellbeing.",
    "Competition drives athletes to achieve peak performance.",
  ],
  'Interrogative-Sports': [
    "How often should beginners exercise each week?",
    "What makes a good team captain?",
    "Why is warming up before exercise important?",
    "Can regular stretching prevent sports injuries?",
    "How do athletes maintain their mental focus?",
    "What training methods improve endurance effectively?",
    "Why do some sports require protective equipment?",
    "How has technology changed athletic performance tracking?",
    "What role does nutrition play in fitness?",
    "Can anyone become a professional athlete?",
    "How do coaches develop winning strategies?",
    "Why is recovery time essential for athletes?",
    "What makes certain sports more popular globally?",
    "How do referees make split-second decisions?",
    "Why do athletes need proper hydration constantly?",
  ],
  'Exclamatory-Sports': [
    "What an incredible goal that was!",
    "How amazing that comeback victory felt!",
    "What exceptional athleticism on display today!",
    "How thrilling this championship game is!",
    "What a spectacular catch in midair!",
    "How intense the competition has become!",
    "What phenomenal speed that runner demonstrated!",
    "How dedicated these athletes train daily!",
    "What an inspiring underdog story this!",
    "How precise that shot was executed!",
    "What remarkable teamwork throughout the season!",
    "How exciting overtime periods can be!",
    "What outstanding performance under pressure tonight!",
    "How graceful figure skaters move on ice!",
    "What tremendous strength weightlifters display!",
  ],
  'Imperative-Sports': [
    "Warm up properly before starting any workout.",
    "Stay hydrated during intense physical activities.",
    "Follow proper form to prevent injuries.",
    "Set realistic fitness goals for yourself.",
    "Cool down gradually after exercising strenuously.",
    "Listen to your body's warning signals.",
    "Wear appropriate gear for your chosen sport.",
    "Practice fundamental skills regularly for improvement.",
    "Respect opponents and officials during competitions.",
    "Maintain a positive attitude through challenges.",
    "Track your progress to stay motivated.",
    "Rest adequately between training sessions.",
    "Learn from defeats and celebrate victories.",
    "Support teammates with encouragement and advice.",
    "Challenge yourself to improve constantly.",
  ],

  // TRAVEL sentences
  'Declarative-Travel': [
    "Exploring different cultures broadens personal perspectives significantly.",
    "Travel experiences create lasting memories and friendships.",
    "Planning ahead ensures smooth and enjoyable trips.",
    "Local cuisine offers authentic cultural experiences abroad.",
    "Adventure travel pushes boundaries and builds confidence.",
  ],
  'Interrogative-Travel': [
    "Where would you like to visit next?",
    "How do you prepare for international trips?",
    "What essential items should travelers pack?",
    "Why is travel insurance recommended for trips?",
    "Can you recommend affordable accommodation options?",
    "How do you overcome language barriers abroad?",
    "What makes a destination worth visiting?",
    "When is the best time to book?",
    "How can travelers reduce their environmental impact?",
    "What cultural customs should visitors respect?",
    "Why do people enjoy solo travel adventures?",
    "How safe is public transportation abroad?",
    "What documents do international travelers need?",
    "Can traveling change your life perspective?",
    "How do you budget for extended trips?",
  ],
  'Exclamatory-Travel': [
    "What a breathtaking view from this summit!",
    "How amazing this ancient temple looks!",
    "What incredible hospitality the locals showed!",
    "How beautiful this coastal town is!",
    "What an unforgettable adventure that was!",
    "How delicious the street food tastes here!",
    "What fascinating history this city contains!",
    "How vibrant the local markets feel!",
    "What a perfect sunset over the ocean!",
    "How welcoming the people here are!",
    "What stunning architecture surrounds us everywhere!",
    "How exotic these new flavors taste!",
    "What an exhilarating hiking experience today!",
    "How peaceful this countryside retreat feels!",
    "What incredible cultural diversity exists worldwide!",
  ],
  'Imperative-Travel': [
    "Research your destination before booking flights.",
    "Pack light to avoid baggage fees.",
    "Keep copies of important travel documents.",
    "Learn basic phrases in the local language.",
    "Respect local customs and cultural traditions.",
    "Try authentic regional dishes and specialties.",
    "Take lots of photos to remember experiences.",
    "Stay aware of your surroundings constantly.",
    "Purchase travel insurance for unexpected events.",
    "Exchange currency before arriving at destinations.",
    "Book accommodations in advance during peak season.",
    "Explore beyond typical tourist attractions.",
    "Connect with locals for authentic experiences.",
    "Stay flexible when plans change unexpectedly.",
    "Immerse yourself fully in new cultures.",
  ],

  // ENTERTAINMENT sentences
  'Declarative-Entertainment': [
    "Movies transport audiences to imaginative worlds and stories.",
    "Music evokes powerful emotions and connects people universally.",
    "Live performances create unique shared experiences.",
    "Streaming services revolutionized how we consume content.",
    "Video games combine storytelling with interactive engagement.",
  ],
  'Interrogative-Entertainment': [
    "What genre of music do you prefer?",
    "How often do you attend live concerts?",
    "Why do people enjoy watching horror films?",
    "Can video games be considered art?",
    "What makes a movie truly memorable?",
    "How has streaming changed television viewing habits?",
    "Why do musicals appeal to diverse audiences?",
    "What attracts people to reality TV shows?",
    "How do artists find creative inspiration?",
    "Can entertainment educate as well as amuse?",
    "What role do critics play in entertainment?",
    "How important are special effects in movies?",
    "Why do classic songs remain popular forever?",
    "What makes comedy so subjective and personal?",
    "How will entertainment evolve in the future?",
  ],
  'Exclamatory-Entertainment': [
    "What a thrilling movie plot twist!",
    "How talented that musician plays guitar!",
    "What an outstanding theatrical performance tonight!",
    "How catchy that new song sounds!",
    "What spectacular visual effects in that film!",
    "How hilarious that comedy show was!",
    "What an emotional ending to the series!",
    "How creative independent filmmakers can be!",
    "What amazing vocals that singer has!",
    "How engaging that video game storyline is!",
    "What a phenomenal concert experience last night!",
    "How beautifully choreographed that dance was!",
    "What gripping drama unfolded on stage!",
    "How nostalgic those classic movies feel!",
    "What incredible talent this artist possesses!",
  ],
  'Imperative-Entertainment': [
    "Watch that critically acclaimed film tonight.",
    "Listen to the entire album before judging.",
    "Support local artists and independent creators.",
    "Attend live performances when possible.",
    "Explore different genres to broaden tastes.",
    "Read reviews before choosing what to watch.",
    "Create playlists for different moods and occasions.",
    "Share your favorite entertainment with friends.",
    "Discover emerging artists on streaming platforms.",
    "Appreciate the artistry behind special effects.",
    "Follow your favorite actors and musicians online.",
    "Experience entertainment from diverse cultures.",
    "Discuss movies and shows with fellow enthusiasts.",
    "Learn about the history of your favorite.",
    "Take breaks from screens for mental health.",
  ],
};

// Function to count words in a sentence
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

// Generate balanced distribution
const allNewSentences = [];
const types = ['Declarative', 'Interrogative', 'Exclamatory', 'Imperative'];
const topics = ['Nature', 'Science', 'Education', 'Daily Life', 'Technology', 'Sports', 'Travel', 'Entertainment'];

// We need to add 962 sentences
// Target: each of 32 combinations (4 types × 8 topics) should have ~62.5 sentences on average
// But we need to account for current distribution

// Calculate how many we need for each combination
const targetPerCombo = {};
const neededPerCombo = {};

types.forEach(type => {
  topics.forEach(topic => {
    const key = `${type}-${topic}`;
    // Target is 2000 / 32 = 62.5, round to 62 or 63
    targetPerCombo[key] = Math.round(TARGET_TOTAL / (types.length * topics.length));
    const current = currentCombos[key] || 0;
    neededPerCombo[key] = targetPerCombo[key] - current;
  });
});

console.log('\nNeeded per combination:', neededPerCombo);

// Add sentences from our predefined sets
Object.keys(newSentences).forEach(key => {
  const sentences = newSentences[key];
  const needed = neededPerCombo[key] || 0;

  // Take up to the needed amount
  const toAdd = Math.min(sentences.length, needed);

  for (let i = 0; i < toAdd; i++) {
    const [type, topic] = key.split('-');
    allNewSentences.push({
      sentence: sentences[i],
      type: type,
      topic: topic,
      wordCount: countWords(sentences[i])
    });
  }

  // Update needed count
  neededPerCombo[key] = Math.max(0, needed - toAdd);
});

console.log(`\nAdded ${allNewSentences.length} sentences from predefined sets`);
console.log('Still needed per combination:', neededPerCombo);

// Generate additional sentences programmatically if needed
const templates = {
  'Declarative-Nature': [
    'The {adjective} {noun} {verb} across the {location}.',
    '{Noun} {verb} {adverb} in their natural habitat.',
    'The ecosystem {verb} through {noun} and adaptation.',
  ],
  'Interrogative-Nature': [
    'How do {nouns} {verb} in the wild?',
    'What causes {noun} to {verb} so {adverb}?',
    'Why does {noun} {verb} during {time}?',
  ],
  'Exclamatory-Nature': [
    'What {adjective} {noun} that is!',
    'How {adverb} the {noun} {verb}!',
  ],
  'Imperative-Nature': [
    '{Verb} the {noun} with care and respect.',
    'Preserve {noun} for future generations.',
  ],
};

// For now, let's focus on adding more varied sentences manually
const additionalSentences = {
  'Declarative-Nature': [
    "Ecosystems maintain delicate balance through natural cycles.",
    "Seasonal changes affect wildlife behavior patterns significantly.",
    "Predators play crucial roles in ecosystem health.",
    "Coral bleaching threatens marine biodiversity worldwide.",
    "Photosynthesis drives energy flow in ecosystems.",
    "Glaciers shape landscapes over thousands of years.",
    "Wetlands filter water and provide critical habitats.",
    "Deserts support surprisingly diverse life forms.",
    "Tidal pools reveal fascinating marine creatures daily.",
    "Alpine meadows burst with colorful wildflowers.",
    "Ancient forests store massive amounts of carbon.",
    "Mangrove swamps protect coastlines from storm surge.",
    "Prairie grasslands support complex food webs.",
    "Volcanic soil creates unusually fertile growing conditions.",
    "Arctic tundra experiences extreme seasonal temperature variations.",
    "Rainforests produce significant amounts of atmospheric oxygen.",
    "Sand dunes shift constantly in desert winds.",
    "Limestone caves form through gradual water erosion.",
    "Geothermal springs support unique microbial communities.",
    "Barrier reefs protect islands from ocean waves.",
  ],
  'Interrogative-Nature': [
    "Do trees communicate through underground fungal networks?",
    "How long can giant sequoias actually live?",
    "What percentage of ocean remains unexplored?",
    "Why do some animals migrate thousands of miles?",
    "How do bees navigate to their hives?",
    "What makes certain plants carnivorous?",
    "Why do earthquakes happen along fault lines?",
    "How do whales communicate across vast distances?",
    "What causes bioluminescence in marine organisms?",
    "Why do some deserts receive almost no rain?",
    "How do salmon find their birthplace streams?",
    "What triggers mass flowering events in bamboo?",
    "Why do wolves howl at night?",
    "How deep do tree roots actually grow?",
    "What makes certain mushrooms glow in darkness?",
    "Why do some lakes turn pink seasonally?",
    "How do arctic animals survive extreme cold?",
    "What causes geysers to erupt periodically?",
    "Why do elephants visit specific mineral sites?",
    "How do plants survive in nutrient-poor soils?",
  ],
  'Exclamatory-Nature': [
    "How ancient those bristlecone pines are!",
    "What diversity tropical rainforests contain!",
    "How powerful hurricanes can become!",
    "What amazing camouflage that insect has!",
    "How deep the ocean trenches go!",
    "What brilliant colors poison dart frogs display!",
    "How massive blue whales grow!",
    "What intricate patterns spiderwebs create!",
    "How resilient desert plants are!",
    "What spectacular migrations wildebeest undertake!",
    "How perfectly orchids attract specific pollinators!",
    "What enormous colonies ants can build!",
    "How high eagles soar effortlessly!",
    "What strange creatures live in deep oceans!",
    "How efficiently photosynthesis converts light energy!",
  ],
  'Imperative-Nature': [
    "Monitor endangered species populations regularly.",
    "Create wildlife corridors to connect habitats.",
    "Remove invasive species from native ecosystems.",
    "Establish marine protected areas for conservation.",
    "Restore degraded wetlands to their natural state.",
    "Minimize light pollution affecting nocturnal animals.",
    "Support sustainable forestry practices.",
    "Reduce plastic waste entering ocean ecosystems.",
    "Study climate change impacts on wildlife.",
    "Protect migratory bird stopover sites.",
    "Preserve old-growth forests from development.",
    "Monitor water quality in rivers and streams.",
    "Create pollinator gardens with native plants.",
    "Prevent soil erosion through proper land management.",
    "Document biodiversity before habitats disappear.",
  ],

  'Declarative-Science': [
    "Penicillin revolutionized modern medical treatment dramatically.",
    "The double helix structure reveals DNA organization.",
    "Stem cells can differentiate into various tissue types.",
    "Particle accelerators probe fundamental matter composition.",
    "Climate models predict future temperature trends.",
    "Genome sequencing enables personalized medicine approaches.",
    "Superconductors conduct electricity with zero resistance.",
    "The Higgs boson confirms theoretical particle physics.",
    "CRISPR technology allows precise gene editing.",
    "Exoplanets orbit stars beyond our solar system.",
  ],
  'Interrogative-Science': [
    "How does the immune system recognize pathogens?",
    "What makes certain elements radioactive?",
    "Why does time slow near massive objects?",
    "Can consciousness be scientifically explained?",
    "How do neurons transmit information electrically?",
    "What determines whether planets support life?",
    "Why does antimatter exist in the universe?",
    "How accurate are weather prediction models?",
    "What causes genetic mutations to occur?",
    "Why do chemical reactions require activation energy?",
  ],
  'Exclamatory-Science': [
    "How revolutionary CRISPR gene editing is!",
    "What mysteries quantum entanglement presents!",
    "How powerful supercomputers have become!",
    "What precision electron microscopes achieve!",
    "How counterintuitive quantum physics seems!",
    "What potential fusion energy holds!",
    "How complex protein folding processes are!",
    "What insights brain scanning technology provides!",
    "How vast astronomical distances truly are!",
    "What breakthroughs nanotechnology enables!",
  ],
  'Imperative-Science': [
    "Formulate testable hypotheses before experimenting.",
    "Control variables to ensure valid results.",
    "Peer review studies before publishing findings.",
    "Calibrate instruments for accurate measurements.",
    "Repeat experiments to verify reproducibility.",
    "Consider ethical implications of research.",
    "Share data openly with scientific community.",
    "Challenge established theories with new evidence.",
    "Apply rigorous statistical analysis to data.",
    "Maintain detailed laboratory notebooks.",
  ],

  'Declarative-Education': [
    "Socratic questioning encourages deeper critical thinking.",
    "Project-based learning connects theory to practice.",
    "Diverse teaching methods accommodate learning styles.",
    "Formative assessment guides instructional adjustments.",
    "Growth mindset fosters resilience in students.",
    "Peer tutoring benefits both learners involved.",
    "Metacognition improves self-directed learning abilities.",
    "Scaffolding supports students through difficult concepts.",
    "Interdisciplinary approaches reveal subject connections.",
    "Digital literacy becomes increasingly essential skill.",
  ],
  'Interrogative-Education': [
    "How does spaced repetition improve retention?",
    "What role does curiosity play in learning?",
    "Why do some students struggle with mathematics?",
    "Can gamification increase engagement effectively?",
    "How should educators address different learning paces?",
    "What makes feedback most useful for students?",
    "Why is active recall more effective?",
    "How can schools foster creativity better?",
    "What determines successful curriculum design?",
    "Why is educational equity so challenging?",
  ],
  'Exclamatory-Education': [
    "How transformative education can be!",
    "What joy discovering new knowledge brings!",
    "How passionate dedicated teachers are!",
    "What potential every student possesses!",
    "How powerful collaborative learning becomes!",
    "What difference good mentorship makes!",
    "How exciting breakthrough moments feel!",
    "What opportunities education opens up!",
    "How important lifelong learning is!",
    "What satisfaction understanding complex concepts brings!",
  ],
  'Imperative-Education': [
    "Encourage questions rather than just answers.",
    "Differentiate instruction for diverse learners.",
    "Provide constructive feedback on student work.",
    "Foster inclusive classroom environments.",
    "Integrate real-world applications into lessons.",
    "Assess understanding through multiple methods.",
    "Build on students' prior knowledge.",
    "Promote critical thinking over rote memorization.",
    "Create opportunities for student collaboration.",
    "Celebrate effort and growth, not perfection.",
  ],

  'Declarative-Daily Life': [
    "Meal planning reduces food waste significantly.",
    "Regular exercise boosts mood and energy levels.",
    "Quality sleep improves cognitive function daily.",
    "Mindfulness practices reduce everyday stress.",
    "Social connections enhance overall life satisfaction.",
    "Financial budgeting enables better spending choices.",
    "Morning sunlight helps regulate sleep cycles.",
    "Decluttering creates more peaceful living spaces.",
    "Gratitude journaling improves mental wellbeing.",
    "Regular car maintenance prevents costly repairs.",
  ],
  'Interrogative-Daily Life': [
    "How can you simplify your morning routine?",
    "What motivates you to stay organized?",
    "Why is sleep hygiene so important?",
    "Can minimalism improve quality of life?",
    "How do you maintain meaningful friendships?",
    "What constitutes a balanced lifestyle?",
    "Why do habits form so slowly?",
    "How can we reduce daily screen time?",
    "What makes a neighborhood feel like community?",
    "Why is self-care often neglected?",
  ],
  'Exclamatory-Daily Life': [
    "How much better homemade food tastes!",
    "What a relief finishing all chores is!",
    "How rewarding maintaining good habits feels!",
    "What joy small pleasures can bring!",
    "How energizing morning walks are!",
    "What comfort familiar routines provide!",
    "How satisfying organizing can be!",
    "What a difference good lighting makes!",
    "How peaceful quiet mornings feel!",
    "What happiness simple moments create!",
  ],
  'Imperative-Daily Life': [
    "Establish consistent sleep and wake times.",
    "Prepare meals in advance for busy weeks.",
    "Create designated spaces for important items.",
    "Build an emergency fund gradually.",
    "Disconnect from devices before bedtime.",
    "Nurture relationships through regular contact.",
    "Practice stress management techniques daily.",
    "Maintain good posture throughout the day.",
    "Plan weekly activities to avoid monotony.",
    "Invest in quality items that last.",
  ],

  'Declarative-Technology': [
    "Machine learning algorithms detect complex patterns automatically.",
    "Encryption protects data during digital transmission.",
    "Open-source software drives collaborative innovation.",
    "Edge computing reduces latency in applications.",
    "Neural networks mimic biological brain structures.",
    "API integration connects different software systems.",
    "Solid-state drives offer faster data access.",
    "Version control systems track code changes.",
    "Augmented reality overlays digital information on reality.",
    "Internet of Things connects everyday devices.",
  ],
  'Interrogative-Technology': [
    "How will artificial intelligence affect employment?",
    "What makes certain programming languages popular?",
    "Why do batteries degrade over time?",
    "Can technology addiction be harmful?",
    "How do search engines rank results?",
    "What distinguishes cloud from local storage?",
    "Why is legacy code difficult to maintain?",
    "How secure is end-to-end encryption?",
    "What enables touchscreens to function?",
    "Why do computers slow down over time?",
  ],
  'Exclamatory-Technology': [
    "How intuitive modern interfaces have become!",
    "What computing power fits in pockets!",
    "How quickly technology becomes obsolete!",
    "What amazing things drones can do!",
    "How realistic computer graphics look now!",
    "What convenience smart homes provide!",
    "How accessible information has become!",
    "What potential renewable tech has!",
    "How transformative the internet proved!",
    "What incredible speeds modern networks achieve!",
  ],
  'Imperative-Technology': [
    "Verify sources before sharing information online.",
    "Limit exposure to blue light at night.",
    "Customize privacy settings on all platforms.",
    "Learn keyboard shortcuts for better efficiency.",
    "Unplug chargers when not in use.",
    "Test backups regularly to ensure functionality.",
    "Read user agreements before accepting terms.",
    "Optimize images before uploading to websites.",
    "Use encrypted messaging for sensitive communications.",
    "Stay informed about emerging technology trends.",
  ],

  'Declarative-Sports': [
    "Proper nutrition fuels athletic performance significantly.",
    "Muscle memory develops through consistent practice.",
    "Sports psychology improves competitive mental preparation.",
    "Cross-training prevents overuse injuries effectively.",
    "Heart rate monitoring optimizes training intensity.",
    "Biomechanics analysis improves athletic technique.",
    "Team chemistry influences overall performance outcomes.",
    "Recovery protocols enhance long-term athletic development.",
    "Sport-specific drills build necessary skills.",
    "Altitude training increases red blood cells.",
  ],
  'Interrogative-Sports': [
    "How do athletes handle performance anxiety?",
    "What differentiates amateur from professional training?",
    "Why do some injuries take longer healing?",
    "Can visualization improve athletic performance?",
    "How important is flexibility for athletes?",
    "What makes effective sports coaching?",
    "Why do teams practice set plays?",
    "How does altitude affect athletic performance?",
    "What role does genetics play in athletics?",
    "Why is core strength emphasized universally?",
  ],
  'Exclamatory-Sports': [
    "How inspiring that athletic achievement was!",
    "What determination that athlete showed!",
    "How close that finish line sprint!",
    "What incredible coordination that required!",
    "How suspenseful penalty shootouts are!",
    "What perfect execution of that play!",
    "How exhausting marathons must be!",
    "What sportsmanship that gesture displayed!",
    "How exciting championship finals become!",
    "What natural talent that young player!",
  ],
  'Imperative-Sports': [
    "Develop both physical and mental strength.",
    "Focus on technique before increasing intensity.",
    "Incorporate rest days into training schedules.",
    "Study opponents to identify weaknesses.",
    "Celebrate team successes together.",
    "Learn from mistakes without dwelling on them.",
    "Maintain equipment in good working condition.",
    "Communicate clearly with teammates during play.",
    "Set both short and long-term goals.",
    "Embrace challenges as growth opportunities.",
  ],

  'Declarative-Travel': [
    "Sustainable tourism minimizes environmental impact.",
    "Cultural immersion enriches travel experiences profoundly.",
    "Travel insurance protects against unexpected situations.",
    "Off-season travel offers better value typically.",
    "Language skills enhance international travel significantly.",
    "Responsible tourism supports local economies.",
    "Travel photography captures precious memories.",
    "Group tours provide structured exploration opportunities.",
    "Backpacking encourages spontaneous adventure.",
    "Volunteer tourism combines service with exploration.",
  ],
  'Interrogative-Travel': [
    "How can travelers minimize their carbon footprint?",
    "What vaccinations do tropical destinations require?",
    "Why do flight prices fluctuate so much?",
    "Can traveling alone be empowering?",
    "How do you choose travel destinations?",
    "What makes accommodation truly comfortable?",
    "Why is cultural sensitivity important abroad?",
    "How safe is drinking tap water?",
    "What should travelers do during emergencies?",
    "Why do some prefer slow travel?",
  ],
  'Exclamatory-Travel': [
    "How transformative world travel can be!",
    "What adventures await around every corner!",
    "How friendly strangers can become!",
    "What memories these experiences create!",
    "How different cultures celebrate life!",
    "What stunning landscapes our planet has!",
    "How humbling visiting historical sites feels!",
    "What unique flavors regional cuisines offer!",
    "How small our world really is!",
    "What stories every destination tells!",
  ],
  'Imperative-Travel': [
    "Plan flexible itineraries allowing spontaneous changes.",
    "Respect religious sites and sacred spaces.",
    "Support small local businesses when possible.",
    "Learn about local history before visiting.",
    "Travel with minimal environmental impact.",
    "Keep valuables secure in hotel safes.",
    "Try public transportation to experience local life.",
    "Document travel expenses for better budgeting.",
    "Share travel experiences through storytelling.",
    "Return home with open mind and heart.",
  ],

  'Declarative-Entertainment': [
    "Independent films often explore unconventional narratives.",
    "Streaming algorithms personalize content recommendations.",
    "Concert venues create intimate performance experiences.",
    "Soundtrack music enhances emotional film moments.",
    "Binge-watching changes television consumption patterns.",
    "Animation techniques create fantastical visual worlds.",
    "Franchise films build extensive shared universes.",
    "Podcasts offer convenient on-demand audio entertainment.",
    "Theater productions combine multiple artistic disciplines.",
    "Gaming communities foster global social connections.",
  ],
  'Interrogative-Entertainment': [
    "How do actors prepare for demanding roles?",
    "What makes certain songs become timeless?",
    "Why do people enjoy rewatching favorite shows?",
    "Can entertainment influence social change?",
    "How has digital distribution affected artists?",
    "What elements create compelling storytelling?",
    "Why do sequels often disappoint audiences?",
    "How important is soundtrack in films?",
    "What makes performances feel authentic?",
    "Why do some jokes translate across cultures?",
  ],
  'Exclamatory-Entertainment': [
    "How moving that film's ending was!",
    "What incredible range that actor demonstrated!",
    "How addictive that series became!",
    "What perfect casting for that role!",
    "How beautifully that scene was shot!",
    "What clever writing throughout that show!",
    "How energetic that live performance was!",
    "What nostalgia that soundtrack evokes!",
    "How suspenseful that thriller kept us!",
    "What artistry goes into filmmaking!",
  ],
  'Imperative-Entertainment': [
    "Support independent artists and creators.",
    "Experience different entertainment genres regularly.",
    "Appreciate behind-the-scenes creative work.",
    "Attend cultural events in your community.",
    "Discover international films and music.",
    "Share entertainment recommendations thoughtfully.",
    "Consider diverse perspectives in media.",
    "Balance entertainment with other activities.",
    "Explore the history of your favorite.",
    "Engage critically with media content.",
  ],
};

// Add these additional sentences
Object.keys(additionalSentences).forEach(key => {
  const sentences = additionalSentences[key];
  const needed = neededPerCombo[key] || 0;

  const toAdd = Math.min(sentences.length, needed);

  for (let i = 0; i < toAdd; i++) {
    const [type, topic] = key.split('-');
    allNewSentences.push({
      sentence: sentences[i],
      type: type,
      topic: topic,
      wordCount: countWords(sentences[i])
    });
  }

  neededPerCombo[key] = Math.max(0, needed - toAdd);
});

console.log(`\nTotal new sentences generated: ${allNewSentences.length}`);
console.log('Remaining needed:', neededPerCombo);

// Combine with existing sentences
const finalSentences = [...existingSentences, ...allNewSentences];

console.log(`\nFinal total: ${finalSentences.length} sentences`);

// Write to file
fs.writeFileSync(
  './public/data/sentences.json',
  JSON.stringify(finalSentences, null, 2)
);

console.log('\nSentences file updated successfully!');

// Final verification
const finalTypes = {};
const finalTopics = {};

finalSentences.forEach(s => {
  finalTypes[s.type] = (finalTypes[s.type] || 0) + 1;
  finalTopics[s.topic] = (finalTopics[s.topic] || 0) + 1;
});

console.log('\nFinal distribution:');
console.log('Types:', finalTypes);
console.log('Topics:', finalTopics);
