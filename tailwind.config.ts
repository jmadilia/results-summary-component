import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Primary
        'light-red': '#ff5757',
        'orangey-yellow': '#ffb01f',
        'green-teal': '#00bd91',
        'cobalt-blue': '#1125d4',

        // Gradients
        'light-slate-blue': '#7857ff', // background
        'light-royal-blue': '#2e2be9', // background
        'violet-blue': 'var(--color-violet-blue)', // circle
        'persian-blue': 'var(--color-persian-blue)', // circle

        // Neutral
        'pale-blue': '#ebf1ff',
        'light-lavender': '#c8c7ff',
        'dark-gray-blue': '#303b5a'
      },
      fontFamily: {
        'hanken-grotesk': ['var(--font-hanken-grotesk)'],
      }
    },
  },
  plugins: [],
}
export default config
