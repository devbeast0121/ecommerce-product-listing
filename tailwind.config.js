/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': 'var(--header-bg)',
        'text': 'var(--text-color)',
        'background': 'var(--background-color)',
        'card-bg': 'var(--card-bg)',
        'accent': 'var(--accent-color)',
        'price': 'var(--price-color)',
      },
    },
  },
  plugins: [],
}