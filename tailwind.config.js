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
        'arcade-red': '#FF0000',
        'arcade-blue': '#3490dc',
        'succinct-pink': '#D94AC1',
        'window-menu-bar': '#FDFDFD',
        'window-menu-bar-gradient': '#EAEAEA',
        'button-glare-from': 'rgba(255, 255, 255, 0.8)',
        'button-gradient': '#0087FF',
        'button-gradient-via': '#0065C2',
        'button-gradient-end': '#004A8F',
      },
      fontFamily: {
        'oracle': ['Monaco', 'monospace'],
        'oracle-triple': ['Monaco', 'monospace'],
        'viafont': ['Monaco', 'monospace'],
        'caption': ['Monaco', 'monospace'],
      },
      animation: {
        'grid': 'grid 20s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'x-height': 'xHeight 3s ease-in-out infinite',
        'y-height': 'yHeight 4s ease-in-out infinite',
      },
      keyframes: {
        grid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(var(--cell-size))' },
        },
        xHeight: {
          '0%, 100%': { height: '30%' },
          '50%': { height: '70%' },
        },
        yHeight: {
          '0%, 100%': { height: '50%' },
          '50%': { height: '90%' },
        },
      },
      backgroundImage: {
        'gradient-succinct': 'linear-gradient(to bottom, rgba(140, 1, 108, 0.8), rgba(0, 0, 0, 0.8))',
      },
    },
  },
  plugins: [],
}