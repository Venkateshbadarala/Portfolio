import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
      'xsm': '320px',
    },
    extend: {
      backgroundImage: {
        "background-dark": "linear-gradient(139deg, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)",
        "background": "linear-gradient(139deg, rgba(0,0,0,1) 15%, rgba(0,27,124,10) 100%, rgba(0,27,124,10) 100%)",
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
