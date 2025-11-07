#!/usr/bin/env python3
import json

# Read current sentences
with open('public/data/sentences.json', 'r') as f:
    sentences = json.load(f)

current_count = len(sentences)
print(f"Current count: {current_count}")

target = 2000
to_add = target - current_count
print(f"Need to add: {to_add} sentences")

# Comprehensive new sentences across all topics and types
new_sentences = [
    # Nature - Declarative (30)
    {"sentence": "Coral reefs support incredible marine biodiversity worldwide.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Ancient forests store vast carbon reserves naturally.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Migratory birds navigate using Earth's magnetic fields.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Desert ecosystems demonstrate remarkable survival adaptations constantly.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Ocean currents regulate global climate patterns significantly.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Alpine meadows burst into colorful wildflower displays.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Mangrove forests protect coastlines from erosion effectively.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Symbiotic relationships maintain ecological balance in nature.", "type": "Declarative", "topic": "Nature", "wordCount": 8},
    {"sentence": "Seasonal changes trigger remarkable animal migration patterns.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Rainforest canopies create unique vertical ecosystem layers.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Pollinator populations directly affect agricultural productivity worldwide.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Tidal pools showcase fascinating microcosms of ocean life.", "type": "Declarative", "topic": "Nature", "wordCount": 8},
    {"sentence": "Volcanic soil enriches agricultural lands with essential minerals.", "type": "Declarative", "topic": "Nature", "wordCount": 9},
    {"sentence": "Glacier movements shape dramatic mountain valley landscapes.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Bioluminescent organisms illuminate deep ocean environments mysteriously.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Prairie grasslands sustain diverse wildlife populations effectively.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Wetland ecosystems filter water and prevent flooding.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Cloud forests exist in perpetual misty conditions.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Tundra regions support specially adapted plant species.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Kelp forests provide shelter for numerous marine creatures.", "type": "Declarative", "topic": "Nature", "wordCount": 8},
    {"sentence": "Geothermal springs host unique thermophilic bacterial communities.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Savanna ecosystems balance grassland and scattered trees.", "type": "Declarative", "topic": "Nature", "wordCount": 8},
    {"sentence": "Arctic ice formations create breathtaking crystalline landscapes.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Estuary habitats blend freshwater and saltwater environments.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Canyon formations reveal millions of years geological history.", "type": "Declarative", "topic": "Nature", "wordCount": 8},
    {"sentence": "Firefly synchronization demonstrates remarkable collective behavior patterns.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Moss ecosystems indicate air quality levels accurately.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Limestone caves develop over countless millennia slowly.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Dune formations shift constantly with prevailing winds.", "type": "Declarative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Old-growth forests support irreplaceable ecosystem complexity.", "type": "Declarative", "topic": "Nature", "wordCount": 6},

    # Nature - Interrogative (30)
    {"sentence": "How do predator-prey dynamics maintain ecosystem stability?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "What mechanisms trigger seasonal leaf color changes?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Why do certain species exhibit territorial behaviors?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "How do plants communicate through underground fungal networks?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "What adaptations enable survival in extreme cold climates?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "Why do some animals hibernate during winter months?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "How do ecosystems recover after natural disasters?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "What factors influence biodiversity distribution patterns globally?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Why are wetlands considered environmental kidneys effectively?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "How do coral polyps build massive reef structures?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "What role do decomposers play in nutrient cycling?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "How does camouflage provide survival advantages precisely?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Why do certain flowers bloom only at night?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "What processes drive volcanic eruption occurrences?", "type": "Interrogative", "topic": "Nature", "wordCount": 6},
    {"sentence": "How do tides affect coastal ecosystem dynamics?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Why do monarch butterflies migrate such vast distances?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "What causes bioluminescence in marine organisms specifically?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "How do seeds disperse across different environments?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Why are rainforests called the planet's lungs?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "What enables chameleons to change their colors?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "How do earthquakes reshape landscape features dramatically?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Why do some species exhibit mutualistic relationships?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "What determines an ecosystem's carrying capacity limits?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "How does erosion shape mountain formations over time?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "Why are apex predators crucial for ecosystems?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "What makes certain habitats biodiversity hotspots globally?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "How do animals navigate during long migrations?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Why do some plants develop carnivorous adaptations?", "type": "Interrogative", "topic": "Nature", "wordCount": 8},
    {"sentence": "What causes northern lights to appear mysteriously?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},
    {"sentence": "How do invasive species disrupt native ecosystems?", "type": "Interrogative", "topic": "Nature", "wordCount": 7},

    # Nature - Exclamatory (30)
    {"sentence": "The aurora borealis creates spectacular celestial light shows!", "type": "Exclamatory", "topic": "Nature", "wordCount": 8},
    {"sentence": "That waterfall cascades with tremendous powerful force!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "These ancient redwoods tower magnificently overhead!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "What incredible biodiversity exists in rainforests!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "How beautifully the morning mist settles!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "What amazing colors these butterflies display vibrantly!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "How majestic that snow-capped mountain appears!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "These mountains stand so majestically tall!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "What pristine beauty this wilderness preserves!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "How crystal clear this mountain stream flows!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "What a spectacular sunset paints the sky!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "How powerfully that volcano erupts dramatically tonight!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "These wildflowers bloom in stunning brilliant colors!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "What extraordinary migration patterns birds demonstrate annually!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "How gracefully dolphins leap through ocean waves!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "That lightning storm illuminates everything magnificently!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "What diverse life thrives in coral reefs!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "How peacefully this forest glen rests undisturbed!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "These tide pools teem with fascinating creatures!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "What powerful waves crash against rocky shores!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "How melodiously the songbirds greet each dawn!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "That rainbow arches brilliantly across the valley!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "What immense biodiversity jungles harbor naturally!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "How fiercely that storm approaches from offshore!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "These giant sequoias inspire such tremendous awe!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "What delicate balance ecosystems maintain constantly!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "How brilliantly fireflies glow throughout summer nights!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "That glacier sparkles with ethereal blue ice!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},
    {"sentence": "What remarkable adaptations desert creatures possess!", "type": "Exclamatory", "topic": "Nature", "wordCount": 6},
    {"sentence": "How tranquilly the lake reflects surrounding mountains!", "type": "Exclamatory", "topic": "Nature", "wordCount": 7},

    # Nature - Imperative (32)
    {"sentence": "Observe wildlife behavior patterns without disturbing habitats.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Document seasonal environmental changes through careful photography.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Protect endangered species through conservation efforts actively.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Study ecosystem interactions to understand environmental complexity.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Monitor climate indicators to track environmental changes.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Preserve natural habitats for future generations responsibly.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Reduce carbon footprint through sustainable lifestyle choices.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Plant native species to support local ecosystems.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Minimize plastic waste to protect ocean environments.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Participate in community cleanup initiatives regularly always.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Respect wildlife boundaries during outdoor excursions carefully.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Learn about local flora and fauna thoroughly.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Support rewilding projects in degraded landscapes actively.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Practice leave-no-trace principles while hiking outdoors.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Report environmental violations to appropriate authorities promptly.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Educate others about ecosystem conservation importance regularly.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Volunteer for habitat restoration programs in communities.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Avoid using harmful pesticides in garden spaces.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Create wildlife corridors between fragmented habitat patches.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Advocate for stronger environmental protection policies loudly.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Compost organic waste to enrich soil naturally.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Choose sustainable products to reduce environmental impact.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Install bird feeders to support local avian populations.", "type": "Imperative", "topic": "Nature", "wordCount": 8},
    {"sentence": "Conserve water resources through mindful daily usage.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Record phenological changes to track climate impacts.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Prevent soil erosion by planting ground cover.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Promote biodiversity through diverse native plantings carefully.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Limit artificial lighting to protect nocturnal wildlife.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Support marine protected areas through responsible tourism.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Remove invasive plant species from natural areas.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Build rain gardens to manage stormwater runoff.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
    {"sentence": "Foster appreciation for nature through outdoor education.", "type": "Imperative", "topic": "Nature", "wordCount": 7},
]

# Calculate total being added
print(f"Adding {len(new_sentences)} sentences in this batch")

# Add to existing sentences
sentences.extend(new_sentences)

print(f"New total: {len(sentences)}")

# Write back to file
with open('public/data/sentences.json', 'w') as f:
    json.dump(sentences, f, indent=2, ensure_ascii=False)

print("✓ Batch complete! File updated successfully.")
