// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [
// //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   theme: {
// //     extend: {
// //       colors: {
// //         background: "var(--background)",
// //         foreground: "var(--foreground)",
// //       },
// //     },
// //   },
// //   plugins: [require('daisyui'),],
// // };
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         roboto: ['Roboto', 'sans-serif'],
//       },
//     },
//   },
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
        background: 'var(--bg-light)',
        foreground: 'var(--text-light)',
      },
    },
  },
  darkMode: 'class', // Use class strategy to toggle dark mode
  plugins: [require('daisyui'),],
};
