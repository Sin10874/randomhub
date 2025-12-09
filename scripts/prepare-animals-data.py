#!/usr/bin/env python3
"""
脚本功能：从 1000+ 动物名称中筛选并分类 300 种动物
按照科学分类：Mammals, Birds, Reptiles, Amphibians, Fish, Invertebrates
"""

import json

# 读取原始数据
with open('../animals-raw.json', 'r', encoding='utf-8') as f:
    all_animals = json.load(f)

# 定义分类规则（基于动物名称关键词）
MAMMALS = [
    'Aardvark', 'African buffalo', 'African elephant', 'African leopard', 'African wild dog',
    'Alpaca', 'American black bear', 'American buffalo', 'Anteater', 'Antelope',
    'Ape', 'Arabian leopard', 'Arctic fox', 'Arctic wolf', 'Armadillo',
    'Asian black bear', 'Ass (donkey)', 'Baboon', 'Badger', 'Bandicoot',
    'Bat', 'Bear', 'Beaver', 'Bison', 'Black panther',
    'Bobcat', 'Bonobo', 'Brown bear', 'Buffalo, African', 'Buffalo, American (bison)',
    'Bull', 'Camel', 'Canid', 'Cape buffalo', 'Capybara',
    'Caribou', 'Cat', 'Cattle', 'Cheetah', 'Chimpanzee',
    'Chinchilla', 'Chipmunk', 'Cougar', 'Coyote', 'Crab-eating macaque',
    'Deer', 'Dhole', 'Dingo', 'Dog', 'Dolphin',
    'Donkey', 'Dormouse', 'Dromedary', 'Dugong', 'Elephant',
    'Elephant seal', 'Elk', 'Ferret', 'Flying squirrel', 'Fox',
    'Gazelle', 'Gerbil', 'Giant panda', 'Giraffe', 'Goat',
    'Gopher', 'Gorilla', 'Grizzly bear', 'Ground sloth', 'Groundhog',
    'Guinea pig', 'Hamster', 'Hare', 'Hedgehog', 'Hippopotamus',
    'Horse', 'Human', 'Hyena', 'Impala', 'Jackal',
    'Jaguar', 'Kangaroo', 'Koala', 'Kudu', 'Lemming',
    'Lemur', 'Leopard', 'Lion', 'Llama', 'Lynx',
    'Macaque', 'Manatee', 'Mandrill', 'Marten', 'Meerkat',
    'Mink', 'Mole', 'Mongoose', 'Monkey', 'Moose',
    'Mountain goat', 'Mouse', 'Mule', 'Muskox', 'Narwhal',
    'Okapi', 'Opossum', 'Orangutan', 'Orca', 'Otter',
    'Ox', 'Panda', 'Panther', 'Pig', 'Platypus',
    'Polar bear', 'Pony', 'Porcupine', 'Porpoise', 'Possum',
    'Prairie dog', 'Pronghorn', 'Puma', 'Rabbit', 'Raccoon',
    'Ram', 'Rat', 'Red panda', 'Reindeer', 'Rhinoceros',
    'Seal', 'Sea lion', 'Sea otter', 'Sheep', 'Shrew',
    'Skunk', 'Sloth', 'Snowshoe hare', 'Squirrel', 'Stoat',
    'Tasmanian devil', 'Tiger', 'Walrus', 'Warthog', 'Water buffalo',
    'Weasel', 'Whale', 'Wildebeest', 'Wolf', 'Wolverine',
    'Wombat', 'Yak', 'Zebra'
]

BIRDS = [
    'Albatross', 'American robin', 'Bald eagle', 'Blackbird', 'Blue bird',
    'Blue jay', 'Booby', 'Buzzard', 'Canada goose', 'Cardinal',
    'Chickadee', 'Chicken', 'Condor', 'Cormorant', 'Crane',
    'Crow', 'Cuckoo', 'Dove', 'Duck', 'Eagle',
    'Emu', 'Falcon', 'Finch', 'Flamingo', 'Fly',
    'Goose', 'Grouse', 'Gull', 'Hawk', 'Heron',
    'Hoopoe', 'Hummingbird', 'Ibis', 'Jay', 'Kite',
    'Kingfisher', 'Kiwi', 'Lark', 'Loon', 'Macaw',
    'Magpie', 'Mallard', 'Meadowlark', 'Mockingbird', 'Nightingale',
    'Osprey', 'Ostrich', 'Owl', 'Parakeet', 'Parrot',
    'Peacock', 'Pelican', 'Penguin', 'Pheasant', 'Pigeon',
    'Puffin', 'Quail', 'Raven', 'Roadrunner', 'Robin',
    'Rooster', 'Sandpiper', 'Seagull', 'Sparrow', 'Spoonbill',
    'Stork', 'Swallow', 'Swan', 'Swift', 'Tern',
    'Thrush', 'Toucan', 'Turkey', 'Vulture', 'Warbler',
    'Woodpecker', 'Wren'
]

REPTILES = [
    'Alligator', 'Anaconda', 'Asp', 'Basilisk', 'Boa',
    'Chameleon', 'Cobra', 'Constrictor', 'Crocodile', 'Dinosaur',
    'Dragon', 'Gecko', 'Gharial', 'Gila monster', 'Iguana',
    'Komodo dragon', 'Lizard', 'Monitor lizard', 'Python', 'Rattlesnake',
    'Sea snake', 'Sea turtle', 'Sidewinder', 'Skink', 'Snake',
    'Tortoise', 'Tuatara', 'Turtle', 'Viper', 'Water snake'
]

AMPHIBIANS = [
    'Bullfrog', 'Frog', 'Newt', 'Salamander', 'Toad',
    'Tree frog', 'Caecilian', 'Axolotl', 'Fire salamander', 'Mudpuppy'
]

FISH = [
    'Angelfish', 'Anglerfish', 'Barracuda', 'Bass', 'Carp',
    'Catfish', 'Clownfish', 'Cod', 'Eel', 'Flounder',
    'Flying fish', 'Goldfish', 'Great white shark', 'Grouper', 'Guppy',
    'Haddock', 'Halibut', 'Herring', 'Mackerel', 'Manta ray',
    'Marlin', 'Minnow', 'Moray eel', 'Perch', 'Pike',
    'Piranha', 'Pufferfish', 'Rainbow trout', 'Ray', 'Sailfish',
    'Salmon', 'Sardine', 'Sea bass', 'Sea horse', 'Shark',
    'Stingray', 'Sturgeon', 'Swordfish', 'Trout', 'Tuna',
    'Whale shark', 'Blue whale', 'Beaked whale'
]

INVERTEBRATES = [
    'Ant', 'Aphid', 'Antlion', 'Arrow crab', 'Barnacle',
    'Bedbug', 'Bee', 'Beetle', 'Black widow spider', 'Box jellyfish',
    'Bug', 'Butterfly', 'Caterpillar', 'Centipede', 'Cephalopod',
    'Cicada', 'Clam', 'Cockroach', 'Coral', 'Crab',
    'Crayfish', 'Cricket', 'Damselfly', 'Dragonfly', 'Earthworm',
    'Earwig', 'Flea', 'Fly', 'Grasshopper', 'Honeybee',
    'Hornet', 'Jellyfish', 'Ladybug', 'Leech', 'Lobster',
    'Locust', 'Louse', 'Mantis', 'Millipede', 'Mollusk',
    'Mosquito', 'Moth', 'Octopus', 'Oyster', 'Prawn',
    'Scorpion', 'Sea anemone', 'Sea cucumber', 'Sea slug', 'Sea urchin',
    'Shrimp', 'Slug', 'Snail', 'Spider', 'Squid',
    'Starfish', 'Termite', 'Tick', 'Wasp', 'Worm'
]

# 生成分类数据
animals_classified = []
id_counter = 1

categories_data = [
    ('mammals', MAMMALS),
    ('birds', BIRDS),
    ('reptiles', REPTILES),
    ('amphibians', AMPHIBIANS),
    ('fish', FISH),
    ('invertebrates', INVERTEBRATES)
]

for category, animal_list in categories_data:
    for animal_name in animal_list:
        animals_classified.append({
            'id': id_counter,
            'name': animal_name,
            'category': category
            # imageUrl 字段省略，TypeScript 会自动设为 undefined
        })
        id_counter += 1

print(f"✅ 已分类 {len(animals_classified)} 种动物")
print(f"\n📊 分类统计:")
for category, animal_list in categories_data:
    count = len(animal_list)
    print(f"  - {category.capitalize()}: {count} 种")

# 保存为 JSON
output_file = '../animals-classified.json'
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(animals_classified, f, indent=2, ensure_ascii=False)

print(f"\n💾 已保存到: {output_file}")

# 生成 TypeScript 代码
ts_output = """export interface Animal {
  id: number;
  name: string;
  category: 'all' | 'mammals' | 'birds' | 'reptiles' | 'amphibians' | 'fish' | 'invertebrates';
  imageUrl?: string;
}

export const animals: Animal[] = """

ts_output += json.dumps(animals_classified, indent=2)
ts_output += """

export const categories = [
  { value: 'all', label: 'All Animals' },
  { value: 'mammals', label: 'Mammals' },
  { value: 'birds', label: 'Birds' },
  { value: 'reptiles', label: 'Reptiles' },
  { value: 'amphibians', label: 'Amphibians' },
  { value: 'fish', label: 'Fish' },
  { value: 'invertebrates', label: 'Invertebrates' },
] as const;
"""

ts_file = '../app/data/animals-new.ts'
with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(ts_output)

print(f"📝 已生成 TypeScript 文件: {ts_file}")
print(f"\n✨ 完成！共 {len(animals_classified)} 种动物")
