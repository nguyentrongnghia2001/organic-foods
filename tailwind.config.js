/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-primary)',
      'danger': 'var(--color-danger)',
      'success': 'var(--color-success)',
      'dark': 'var(--color-dark)',
      'gray': 'var(--color-gray)',
    }
  },
}