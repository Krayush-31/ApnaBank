/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        88: "22rem",
        92: "23rem",
        112: "28rem",
        128: "32rem",
        180: "40rem",
        185: "43.5rem",

        190: "47rem",
        200: "50rem",
        240: "60rem",
        280: "70rem",
      },
      height: {
        88: "22rem",
        92: "23rem",
        112: "28rem",
        128: "32rem",
        180: "40rem",
        185: "43.5rem",

        190: "47rem",
        200: "50rem",
        240: "60rem",
        280: "70rem",
      },
      colors: {
        "custom-dark": "#431b2c",
        "custom-red": "#532638",
        "custom-purple": "#673549",
        "custom-blue1": "#116d9b",
        "custom-blue2": "#287dae",
        "custom-blue3": "#448fc3",
        "custom-brown1": "#7a5d48",
        "custom-brown2": "#92735c",
        "custom-brown3": "#ad8b72",
        "custom-red1": "#861d24",
        "custom-red2": "#b13449",
        "custom-red3": "#a72339",
        "custom-orange1": "#8c3c2a",
        "custom-orange2": "#c95f41",
        "custom-orange3": "#da6f4b",
        "custom-violet1": "#333351",
        "custom-violet2": "#353553",
        "custom-violet3": "#3c3c5a",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
      spacing: {
        104: "26rem", // 416px
        120: "30rem", // 480px
        136: "34rem", // 544px
        152: "38rem", // 608px
        160: "40rem", // 640px
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        fadeOut: "fadeOut 1s ease-out",
        shadowPulse: "shadowPulse 1s ease-out infinite",
        rotate: "rotate 2s linear infinite",
        moveupdown: "moveUpDown 2s ease-in-out infinite",
        slidefade: "slideInFadeIn 1s ease-out forwards", // Your custom animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        shadowPulse: {
          "0%": { boxShadow: "0 0 5px rgba(0,0,0,0.5)" },
          "50%": { boxShadow: "0 0 15px rgba(0,0,0,0.75)" },
          "100%": { boxShadow: "0 0 5px rgba(0,0,0,0.5)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40px)" },
        },
        slideInFadeIn: {
          '0%': {
            transform: 'translateX(-100%)',  // Off-screen to the left
            opacity: '0',                    // Invisible
          },
          '100%': {
            transform: 'translateX(0)',      // Normal position
            opacity: '1',                    // Fully visible
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
