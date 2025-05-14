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
<img width="1440" alt="Screenshot 2025-05-14 at 11 01 40 AM" src="https://github.com/user-attachments/assets/a85944ec-d7b5-458f-8337-8c3103563e24" />

### Mood Tracking Interface

- Four mood options (Sad, Scared, Angry, Happy) with visual emoji cards.
- Context-sensitive prompts based on selected mood.
- Text area for journaling thoughts.
- Form validation with user feedback.
<img width="1440" alt="Screenshot 2025-05-14 at 11 02 20 AM" src="https://github.com/user-attachments/assets/6be1a0fe-a0ae-4691-8c15-de4e8e9e2cb7" />

### Mood Journal

- Automatically saves entries to local storage.
- Displays 10 most recent entries in a clean table format.
- Shows date/time, mood with emoji, and user's message.
- Empty state display when no entries exist.
<img width="1440" alt="Screenshot 2025-05-14 at 11 02 54 AM" src="https://github.com/user-attachments/assets/f3001f5f-a8f2-4fd2-8ed3-b843ca8d1ed1" />

### Design Elements

- Consistent purple/blue gradient color scheme.
- Glassmorphism effects with subtle blur and transparency.
- Smooth animations and transitions throughout.
- Fully responsive design for all screen sizes.
- Decorative circular background elements.

## Technical Details

### Files Structure
moodbloom/
├── index.html
├── mood.html
├── css/
│   ├── splash.css
│   └── mood.css
├── js/
│   ├── splash.js
│   └── mood.js
└── pics/
    ├── Dela.png
    ├── sad.webp
    ├── scared.webp
    ├── angry.webp
    └── happy.png
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
