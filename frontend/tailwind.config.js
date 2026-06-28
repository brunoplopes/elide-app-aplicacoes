module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        elide: {
          orange: '#FF6B00',
          ink: '#1E1E1E',
          mist: '#F5F5F5'
        }
      },
      boxShadow: {
        soft: '0 12px 34px rgba(30, 30, 30, 0.10)'
      }
    }
  },
  plugins: []
};

