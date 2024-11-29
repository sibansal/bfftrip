/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF7043',  // Vibrant Orange
          light: '#FFAB91',    // Light Orange
          dark: '#F4511E',     // Deep Orange
        },
        secondary: {
          DEFAULT: '#FFB74D',  // Warm Yellow-Orange
          light: '#FFCC80',    // Soft Yellow-Orange
        },
        accent: {
          warm: '#FF8A65',     // Warm Peach
          cool: '#FFD54F',     // Soft Yellow
        },
        background: {
          light: '#FFF3E0',    // Soft Peach Background
        },
        text: {
          DEFAULT: '#6D4C41',  // Brownish Gray for text
          light: '#BDBDBD',    // Light Gray for secondary text
          dark: '#424242',     // Dark Gray for headings
        },
        neutral: {
          100: '#F5F5F5',      // Very light gray for background
          200: '#E0E0E0',      // Light gray for borders
          300: '#BDBDBD',      // Medium gray for text or subtle accents
          400: '#9E9E9E',      // Neutral gray for secondary buttons
          500: '#757575',      // Gray for darker text and primary buttons
          600: '#424242',      // Dark gray for text (headings or important)
          700: '#212121',      // Almost black for high contrast
        },
      },
    },
  },
  plugins: [],
}
