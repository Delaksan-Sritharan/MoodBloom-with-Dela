# MoodBloom with Dela - Mood Tracking Application

## Overview

MoodBloom with Dela is a beautiful, interactive mood tracking application that helps users log their daily emotions and thoughts. The app features:

- A visually appealing splash screen with smooth animations.
- An intuitive mood selection interface with emoji cards.
- Journaling functionality to record thoughts and feelings.
- Local storage to maintain a personal mood journal.
- Consistent, elegant design with gradient backgrounds and smooth transitions.

## Features

### Splash Screen

- Elegant fade-in animations for logo and tagline.
- Animated progress bar.
- Smooth transition to main application.
- Decorative background elements.

### Mood Tracking Interface

- Four mood options (Sad, Scared, Angry, Happy) with visual emoji cards.
- Context-sensitive prompts based on selected mood.
- Text area for journaling thoughts.
- Form validation with user feedback.

### Mood Journal

- Automatically saves entries to local storage.
- Displays 10 most recent entries in a clean table format.
- Shows date/time, mood with emoji, and user's message.
- Empty state display when no entries exist.

### Design Elements

- Consistent purple/blue gradient color scheme.
- Glassmorphism effects with subtle blur and transparency.
- Smooth animations and transitions throughout.
- Fully responsive design for all screen sizes.
- Decorative circular background elements.

## Technical Details

### Files Structure
moodbloom/
├── index.html        # Splash screen
├── mood.html         # Main application
├── css/
│   ├── splash.css    # Splash screen styles
│   └── mood.css      # Main application styles
├── js/
│   ├── splash.js     # Splash screen animations
│   └── mood.js       # Main application logic
└── pics/             # Image assets
├── Dela.png      # Application logo
├── sad.webp      # Sad emoji
├── scared.webp   # Scared emoji
├── angry.webp    # Angry emoji
└── happy.png     # Happy emoji
### Technologies Used

- HTML5
- CSS3 (with modern features like `backdrop-filter` and gradients)
- JavaScript (ES6)
- Web Storage API for local data persistence
- Google Fonts (Poppins)
- Font Awesome icons

### Browser Support

The application should work on all modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

**Note:** Some visual effects like `backdrop-filter` may not work in older browsers.

## Installation

No installation required! Simply open `index.html` in a web browser to use the application.

All data is stored locally in the browser's `localStorage`, so no server or database setup is needed.

## Usage

1.  The application starts with a splash screen that automatically transitions to the main interface after 4 seconds.
2.  In the main interface, select your current mood by clicking one of the emoji cards.
3.  Write about your day in the text area that appears.
4.  Click "Submit" to save your entry.
5.  View your mood history in the "Your Mood Journal" section at the bottom.

## Customization

To customize the application:

-   **Colors:** Modify the CSS variables in `:root` in `mood.css`.
-   **Moods:** Add or remove emoji cards in `mood.html` and update the JavaScript logic in `mood.js`.
-   **Messages:** Edit the prompt messages in the `updateFeedbackLabel` function in `mood.js`.
-   **Logo:** Replace `pics/Dela.png` with your own logo (400×200px recommended).

## License

This project is open-source and available for personal use. For commercial use, please contact the author.

## Credits

-   Design inspired by modern UI trends.
-   Emoji images from open sources.
-   Fonts from Google Fonts and Font Awesome.
