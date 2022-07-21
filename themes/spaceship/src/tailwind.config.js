module.exports = {
    content: ["../**/*.html"],
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
      extend: {
        fontFamily: {
          dejavu: ["DejaVu"]
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }