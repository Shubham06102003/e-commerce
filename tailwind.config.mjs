// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: 'var(--bg-light)',
//         foreground: 'var(--text-light)',
//       },
//     },
//   },
//   darkMode: 'class', // Use class strategy to toggle dark mode
//   plugins: [require('daisyui'),],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-light)', // Light background
        foreground: 'var(--text-light)', // Light text
      },
    },
  },
  darkMode: 'class', // Use class-based dark mode toggling
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4CAF50',
          secondary: '#03A9F4',
          accent: '#FF9800',
          neutral: '#F5F5F5',
          'base-100': '#FFFFFF',
          'base-content': '#333333',
        },
        dark: {
          primary: '#8BC34A',
          secondary: '#29B6F6',
          accent: '#FFB74D',
          neutral: '#212121',
          'base-100': '#121212',
          'base-content': '#E0E0E0',
        },
        synthwave: {
          primary: '#ff8c00',
          secondary: '#ff00ff',
          accent: '#00ffff',
          neutral: '#2c2c54',
          'base-100': '#1e1e2e',
          'base-content': '#ffffff',
        },
      },
    ],
    base: true, // Use DaisyUI base styles
    utils: true, // Enable utility classes
    logs: false, // Disable logs for cleaner builds
  },
};
