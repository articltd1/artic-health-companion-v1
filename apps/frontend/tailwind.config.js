/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        artic: {
          blue: '#0F4BB4',
          sky: '#36D7F1',
          green: '#16A085',
          jade: '#55C9A3',
          surface: '#F5F7FB',
          surfaceDark: '#0F172A',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        xl: '24px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
