// tailwind.config.js
module.exports = {
  mode: 'jit', // Enable JIT mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust paths based on your project
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
