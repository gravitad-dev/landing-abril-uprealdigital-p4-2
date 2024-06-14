/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-neutral': '#0E121B',
        'custom-white': '#FEFDF5',
        'custom-yellow': '#FFE500',
        'custom-cream': '#FBF8E1',
      },
      gridTemplateColumns: {
        services: 'repeat(auto-fit, minmax(300px, 1fr))',
        projects: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [require('daisyui')],
};
