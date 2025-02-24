export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        notoSans: "var(--noto-sans)"
      },
      keyframes:{
        spin_scale_up:{
          '30%': {  transform: 'scale(0.5) rotate(-180deg)' },
        '60%': {  transform: 'scale(1) rotate(0deg)' },
        '100%': {transform: 'scale(2)'}
        }
      },
      animation: {
        spinScale: 'spin_scale_up 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
