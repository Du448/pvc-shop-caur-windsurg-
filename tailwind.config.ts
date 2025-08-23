import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          light: '#F5F5F5',
          dark: '#333333',
          teal: '#00A6A6',
          blue: '#007ACC'
        }
      }
    }
  },
  plugins: []
} satisfies Config
