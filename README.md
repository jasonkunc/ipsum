# Vegan Ipsum Generator

A custom Lorem Ipsum generator that creates placeholder text using vegetables, fruits, nuts, and other plant-based words instead of traditional Latin. Features a modern neobrutalist design with random background colors and intelligent text generation.

## Features

- **200+ Unique Vegan Words** - Extensive vocabulary organized by categories:
  - Vegetables (kale, spinach, broccoli, carrot, potato, tomato, onion, garlic, and more)
  - Fruits (apple, banana, orange, grape, strawberry, blueberry, raspberry, and more)
  - Nuts & Seeds (almond, walnut, pecan, cashew, chia, flax, sunflower, and more)
  - Legumes (lentil, chickpea, kidney bean, navy bean, pinto bean, split pea, and more)
  - Grains (quinoa, rice, oats, barley, wheat, spelt, kamut, and more)
  - Herbs & Spices (basil, cilantro, parsley, dill, mint, rosemary, thyme, and more)
  - Fungi (mushroom, portobello, shiitake, oyster mushroom, morel, chanterelle, and more)
  - Plant-Based (tofu, tempeh, seitan, plant butter, soy milk, almond milk, and more)

- **Smart Text Generation** - Random word counts per paragraph (10-100 words) for natural variety
- **Customizable Output** - Choose number of paragraphs (1-20), default is 7
- **Random Background Colors** - Each page refresh generates a unique background with automatic text contrast adjustment
- **Neobrutalist Design** - Bold borders, heavy shadows, and high contrast for modern aesthetic
- **Responsive Layout** - Works perfectly on all screen sizes with mobile-optimized interactions
- **Keyboard Shortcuts** - Ctrl/Cmd + Enter to generate, Ctrl/Cmd + C to copy
- **Live Validation** - Real-time input validation with helpful error messages
- **Progressive Disclosure** - Output area only appears after generating text for cleaner UI

## How It Works

1. **Page Load**: Sets a random background color and hides the output section
2. **Input**: User specifies desired number of paragraphs (default: 7)
3. **Generation**: Creates text with random word counts per paragraph for variety
4. **Display**: Shows output section with properly formatted paragraphs
5. **Copy**: One-click copying to clipboard with success notification

## Usage

1. Open the application in your web browser
2. Enter desired number of paragraphs (1-20, default: 7)
3. Click "GENERATE IPSUM" or press Ctrl/Cmd + Enter
4. View your generated vegan-themed placeholder text
5. Copy text with "COPY TEXT" button or Ctrl/Cmd + C
6. Refresh page for a new random background color

## Technical Details

- **Pure Vanilla JavaScript** - No external dependencies or frameworks
- **Modular Architecture** - Separate word database for easy maintenance and expansion
- **Modern Web Standards** - Uses Clipboard API with fallback for older browsers
- **Accessibility Compliant** - Proper ARIA labels, keyboard navigation, and contrast ratios
- **Performance Optimized** - DOM element caching and efficient event handling
- **Cross-Browser Compatible** - Works on all modern browsers with graceful degradation

## File Structure

```
├── index.html              # Main HTML structure with semantic markup
├── style.css               # Neobrutalist styling with responsive design
├── script.js               # Main application logic and user interactions
├── vegan-ipsum-words.js    # Word database organized by categories
└── README.md              # This documentation file
```

## Word Categories Explained

- **Vegetables**: Root vegetables, leafy greens, and common cooking vegetables
- **Fruits**: Berries, citrus fruits, tropical fruits, and melons
- **Nuts**: Tree nuts, seeds, and nut-based products
- **Legumes**: Beans, lentils, peas, and soy products
- **Grains**: Cereal grains, rice varieties, and grain products
- **Seeds**: Edible seeds and spice seeds
- **Herbs**: Culinary herbs and medicinal plants
- **Fungi**: All mushroom varieties (clearly labeled to avoid confusion)
- **Plant-Based**: Modern plant-based products and concepts

## Browser Support

- ✅ Chrome 66+
- ✅ Firefox 63+
- ✅ Safari 13.1+
- ✅ Edge 79+
- ⚠️ Internet Explorer 11 (limited functionality)

## Development

The codebase is thoroughly commented with:
- **JSDoc documentation** for all functions
- **Inline comments** explaining complex logic
- **CSS comments** describing design decisions
- **HTML comments** for semantic structure

Perfect for designers, developers, and content creators who want plant-based placeholder text with a modern, brutalist aesthetic!
