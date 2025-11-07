#!/usr/bin/env python3
import json
from collections import Counter

# Read current data
with open('/Users/xinzechao/Projects/randomhub/public/data/sentences.json', 'r') as f:
    sentences = json.load(f)

print(f"Starting with {len(sentences)} sentences")

# Science sentences (120 total: 30 each type)
science_sentences = [
    # Declarative (30)
    {"text": "Atoms are the building blocks of matter.", "type": "Declarative", "topic": "Science", "wordCount": 7},
    {"text": "Gravity keeps planets orbiting the sun.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Light travels faster than sound.", "type": "Declarative", "topic": "Science", "wordCount": 5},
    {"text": "DNA contains genetic information for organisms.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "The human brain has billions of neurons.", "type": "Declarative", "topic": "Science", "wordCount": 7},
    {"text": "Photosynthesis converts sunlight into chemical energy.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Water molecules consist of hydrogen and oxygen.", "type": "Declarative", "topic": "Science", "wordCount": 7},
    {"text": "Electrons orbit around the atomic nucleus.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "The periodic table organizes chemical elements.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Evolution occurs through natural selection processes.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Magnetic fields surround electric currents.", "type": "Declarative", "topic": "Science", "wordCount": 5},
    {"text": "Cells divide through mitosis and meiosis.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Sound waves propagate through vibrating particles.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Black holes have immense gravitational pull.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Antibodies fight infections in our bodies.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Chromosomes carry hereditary information in cells.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Energy cannot be created or destroyed.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Fossil fuels formed from ancient organisms.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "The speed of light is constant.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Chemical reactions involve breaking molecular bonds.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Ecosystems maintain delicate ecological balances.", "type": "Declarative", "topic": "Science", "wordCount": 5},
    {"text": "Newton discovered three fundamental motion laws.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Protons and neutrons form atomic nuclei.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Vaccines stimulate immune system responses.", "type": "Declarative", "topic": "Science", "wordCount": 5},
    {"text": "Quantum mechanics describes subatomic particle behavior.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Plate tectonics shape Earth's surface features.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Enzymes catalyze biochemical reactions efficiently.", "type": "Declarative", "topic": "Science", "wordCount": 5},
    {"text": "Stars generate energy through nuclear fusion.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "The universe continues expanding since inception.", "type": "Declarative", "topic": "Science", "wordCount": 6},
    {"text": "Bacteria can develop antibiotic resistance rapidly.", "type": "Declarative", "topic": "Science", "wordCount": 6},

    # Interrogative (30)
    {"text": "How do neurons transmit electrical signals?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "What causes earthquakes to occur?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "Why is the sky blue?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "How does gravity affect time?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "What are stem cells used for?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "Can we travel faster than light?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "How do vaccines prevent diseases?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "What makes elements radioactive?", "type": "Interrogative", "topic": "Science", "wordCount": 4},
    {"text": "Why do objects fall downward?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "How does photosynthesis work exactly?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "What is dark matter composed of?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "How do antibiotics kill bacteria?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "Why do magnets attract metal?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "What determines blood type variations?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "How fast do light waves travel?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "Can quantum computers solve complex problems?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "What creates lightning during thunderstorms?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "How do black holes form?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "Why is carbon essential for life?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "What powers the human heart?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "How do cells produce energy?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "What causes genetic mutations to occur?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "Why do planets orbit stars?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "How does DNA replicate itself?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "What makes water essential for life?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "Can humans colonize other planets?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "How do telescopes magnify distant objects?", "type": "Interrogative", "topic": "Science", "wordCount": 6},
    {"text": "What causes climate change patterns?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "Why do volcanoes erupt violently?", "type": "Interrogative", "topic": "Science", "wordCount": 5},
    {"text": "How do fossils form underground?", "type": "Interrogative", "topic": "Science", "wordCount": 5},

    # Exclamatory (30)
    {"text": "What an incredible scientific discovery!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "How amazing the human brain is!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "That experiment produced fantastic results!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "What a powerful telescope this is!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "The DNA structure is absolutely brilliant!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "How fascinating quantum physics becomes!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "What extraordinary creatures dinosaurs were!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "This microscope reveals amazing details!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "How vast our universe truly is!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "What a remarkable chemical reaction!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "The speed of light is astonishing!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "How complex the ecosystem functions!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "What brilliant minds these scientists have!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "This breakthrough could revolutionize medicine!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "How precisely atoms interact together!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "What incredible adaptations animals develop!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "The galaxy contains billions of stars!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "How powerful natural selection truly is!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "What stunning images the satellite captured!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "This discovery changes everything we knew!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "How intricate cellular processes actually are!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "What a groundbreaking physics theory!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "The fossil record tells amazing stories!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "How wonderfully nature balances itself!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "What perfect symmetry this molecule has!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "The periodic table is beautifully organized!", "type": "Exclamatory", "topic": "Science", "wordCount": 6},
    {"text": "How magnificently the brain operates!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "What astounding energy stars release!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "This experiment exceeded all expectations!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},
    {"text": "How elegantly mathematics explains reality!", "type": "Exclamatory", "topic": "Science", "wordCount": 5},

    # Imperative (30)
    {"text": "Observe the specimen under the microscope.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Record your experimental data carefully.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Calculate the molecular weight accurately.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Wear safety goggles in the laboratory.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Measure the temperature every five minutes.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Study the periodic table thoroughly.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Examine the fossil specimens closely.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Mix the chemical solutions carefully.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Document all observations in your notebook.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Test the hypothesis using controlled experiments.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Analyze the DNA sequence completely.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Follow the scientific method precisely.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Dispose of hazardous materials properly.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Compare the results with previous studies.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Calibrate the instruments before measuring.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Label all test tubes clearly.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Review the research literature extensively.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Maintain sterile conditions during experiments.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Plot the data on a graph.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Verify your calculations multiple times.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Store the samples at proper temperature.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Repeat the experiment for accuracy.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Clean the equipment after each use.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Question the assumptions behind theories.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Prepare the solution using distilled water.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Study the control group data first.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Identify the variables in your experiment.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Present your findings at the conference.", "type": "Imperative", "topic": "Science", "wordCount": 6},
    {"text": "Consider alternative explanations for results.", "type": "Imperative", "topic": "Science", "wordCount": 5},
    {"text": "Publish your research in scientific journals.", "type": "Imperative", "topic": "Science", "wordCount": 6},
]

sentences.extend(science_sentences)

# Save after Science
with open('/Users/xinzechao/Projects/randomhub/public/data/sentences.json', 'w') as f:
    json.dump(sentences, f, indent=2)

print(f"\n✓ Added Science sentences. Total: {len(sentences)}")
print(f"Science count: {sum(1 for s in sentences if s['topic'] == 'Science')}")
