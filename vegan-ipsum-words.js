// Vegan Ipsum Word Database
// This file contains all the vegan-themed words used for generating placeholder text
// Words are organized by categories for variety and better text generation

// Main word database object containing all categories
const veganWords = {
    // Root vegetables and common vegetables
    vegetables: [
        'kale', 'spinach', 'broccoli', 'carrot', 'potato', 'tomato', 'onion', 'garlic', 'pepper', 'cucumber', 'zucchini',
        'squash', 'pumpkin', 'celery', 'asparagus', 'eggplant', 'lettuce', 'cabbage', 'cauliflower', 'brussels',
        'beets', 'radish', 'turnip', 'parsnip', 'rutabaga', 'artichoke', 'chard', 'collard', 'mustard', 'arugula', 'endive',
        'watercress', 'bokchoy', 'kohlrabi', 'fennel', 'leek', 'shallot', 'scallion', 'chive', 'dill', 'parsley', 'cilantro',
        'basil', 'thyme', 'rosemary', 'sage', 'oregano', 'tarragon', 'marjoram', 'lavender'
    ],
    
    // All types of fruits including berries, citrus, and tropical fruits
    fruits: [
        'apple', 'banana', 'orange', 'grape', 'strawberry', 'blueberry', 'raspberry', 'blackberry', 'cranberry', 'gooseberry',
        'elderberry', 'mulberry', 'boysenberry', 'loganberry', 'cherry', 'plum', 'peach', 'nectarine', 'apricot', 'fig', 'date',
        'raisin', 'currant', 'gooseberry', 'kiwi', 'mango', 'papaya', 'pineapple', 'coconut', 'avocado', 'olive', 'persimmon',
        'pomegranate', 'starfruit', 'passionfruit', 'guava', 'lychee', 'dragonfruit', 'durian', 'jackfruit', 'breadfruit', 'plantain',
        'watermelon', 'cantaloupe', 'honeydew', 'cantaloupe', 'casaba', 'galia', 'canary', 'crenshaw', 'hami', 'muskmelon',
        'lemon', 'lime', 'grapefruit', 'tangerine', 'mandarin', 'clementine', 'satsuma', 'kumquat', 'pomelo', 'ugli', 'yuzu'
    ],
    
    // Tree nuts and seeds used in plant-based cooking
    nuts: [
        'almond', 'walnut', 'pecan', 'cashew', 'pistachio', 'hazelnut', 'macadamia', 'brazil', 'pine', 'chestnut', 'acorn',
        'beechnut', 'hickory', 'filbert', 'ginkgo', 'kola', 'coconut', 'shea', 'moringa', 'argan', 'jojoba', 'cupuacu',
        'babassu', 'buriti', 'murumuru', 'tucuma', 'pequi', 'pracaxi', 'inchi', 'pili', 'kukui', 'mongongo', 'canola', 'flax',
        'hemp', 'chia', 'perilla', 'poppy', 'safflower', 'sunflower', 'sesame', 'pumpkin', 'squash'
    ],
    
    // Beans, lentils, peas, and soy products
    legumes: [
        'lentil', 'chickpea', 'bean', 'pea', 'soy', 'tofu', 'tempeh', 'edamame', 'fava', 'mung', 'adzuki', 'black',
        'kidney bean', 'navy bean', 'pinto bean', 'garbanzo', 'split pea', 'green pea', 'lima bean', 'butter bean', 'cannellini bean', 
        'great northern bean','white bean', 'red lentil', 'pink lentil', 'cranberry bean', 'blackeyed pea', 'cowpea', 'pigeon pea', 'crowder pea', 'purplehull pea', 'yardlong bean'
    ],
    
    // Cereal grains and grain products
    grains: [
        'quinoa', 'rice', 'oats', 'barley', 'wheat', 'spelt', 'kamut', 'farro', 'millet', 'sorghum', 'teff', 'amaranth',
        'buckwheat', 'rye', 'corn', 'maize', 'wildrice', 'brownrice', 'jasmine', 'basmati', 'arborio', 'carnaroli',
        'sushi rice', 'risotto', 'pilaf', 'porridge', 'cereal', 'granola', 'muesli'
    ],
    
    // Seeds and spices for flavor and nutrition
    seeds: [
        'chia', 'flax', 'hemp', 'pumpkin', 'sunflower', 'sesame', 'poppy', 'quinoa', 'amaranth', 'buckwheat', 'millet',
        'sorghum', 'teff', 'basil', 'coriander', 'cumin', 'fenugreek', 'mustard', 'paprika', 'turmeric', 'ginger', 'cinnamon',
        'nutmeg', 'clove', 'cardamom', 'pepper', 'vanilla', 'saffron', 'rosemary', 'thyme', 'oregano', 'sage', 'marjoram'
    ],
    
    // Fresh and dried herbs for cooking
    herbs: [
        'basil', 'cilantro', 'parsley', 'dill', 'mint', 'rosemary', 'thyme', 'oregano', 'sage', 'lavender', 'chives',
        'tarragon', 'marjoram', 'savory', 'hyssop', 'lemonbalm', 'bee balm', 'catnip', 'chamomile', 'echinacea', 'ginseng',
        'stjohnswort', 'valerian', 'passionflower', 'kava', 'turmeric', 'ginger', 'cinnamon', 'nutmeg', 'clove', 'cardamom',
        'pepper', 'paprika', 'cayenne', 'chili', 'paprika', 'wasabi', 'horseradish', 'mustard', 'vinegar'
    ],
    
    // Mushrooms and fungal varieties (all vegan)
    fungi: [
        'mushroom', 'portobello', 'cremini', 'shiitake', 'oyster mushroom', 'morel', 'chanterelle', 'truffle', 'enoki', 'shimeji', 'matsutake',
        'porcini', 'king', 'lions mane mushroom', 'hen of the woods mushroom', 'chicken of the woods mushroom', 'turkey tail mushroom', 
        'oyster mushroom', 'beech', 'birch', 'polypore',
        'reishi', 'cordyceps', 'chaga', 'maitake', 'wood ear mushroom', 'fungi', 'yeast', 'mold', 'spore', 'button mushroom'
    ],
    
    // Plant-based products and concepts
    plantbased: [
        'tofu', 'tempeh', 'seitan', 'jackfruit', 'hearts of palm', 'coconut', 'almond', 'soy', 'rice', 'oats', 'quinoa',
        'lentil', 'chickpea', 'bean', 'pea', 'nut', 'seed', 'grain', 'herb', 'spice', 'oil', 'plant butter', 'soy milk', 'almond milk', 'oat milk', 'cashew milk', 'hempmilk', 'nutmilk', 'ricemilk',
        'vitamin', 'mineral', 'antioxidant', 'nutrient', 'superfood', 'organic', 'natural', 'whole', 'fresh', 'raw',
    ]
};

// Combine all words from all categories into a single array
// This provides the full vocabulary pool for random selection
function getAllWords() {
    return [
        ...veganWords.vegetables,
        ...veganWords.fruits,
        ...veganWords.nuts,
        ...veganWords.legumes,
        ...veganWords.grains,
        ...veganWords.seeds,
        ...veganWords.herbs,
        ...veganWords.fungi,
        ...veganWords.plantbased
    ];
}

// Get a single random word from a specific category or from all categories
// @param {string|null} category - The category to pull from, or null for any category
// @returns {string} A random word from the specified category
function getRandomWord(category = null) {
    let words;
    if (category && veganWords[category]) {
        words = veganWords[category];
    } else {
        words = getAllWords();
    }
    return words[Math.floor(Math.random() * words.length)];
}

// Get multiple random words (may include duplicates)
// @param {number} count - How many words to generate
// @param {string|null} category - The category to pull from, or null for any category
// @returns {string[]} Array of random words
function getRandomWords(count, category = null) {
    const words = [];
    for (let i = 0; i < count; i++) {
        words.push(getRandomWord(category));
    }
    return words;
}
