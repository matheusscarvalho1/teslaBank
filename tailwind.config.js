/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFFFFF",
        secondary: "#EB3850",
        terciary: "#FFF8F9",
      },
      colors: {
        brandColor: "#EB3850",
        gradientColorRed: "#EB3850, #A93E4C",
        gradientColorYellow: "#E3C79E, #D6AE7B",
        gradientColorDark: "#485563, #29323C",
        darkScale10: "#1A191E",
        darkScale20: "#47464A",
        colorSystemMessage: "#2962FF",
        colorSystemSuccess: "#0BB07B",
        colorSystemWarning: "#FFCE52",
        colorSystemError: "#F03D3D",
        colorSystemInformation: "#E0E0E0",
      },
      fontFamily: {
        dmSans: ["DM Sans", "Inter", "Helvetica", "Arial", "sans-serif"],
        inter: ["Inter", "DM Sans", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        3: "0.1875rem",
        4: "0.25rem",
        10: "0.625rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        56: "3.5rem",
        64: "4rem",
        72: "4.5rem",
        88: "5.5rem",
      },
      fontWeight: {
        200: 200,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
      lineHeight: {
        17: "1.0625rem",
        20: "1.25rem",
        21: "1.3125rem",
        24: "1.5rem",
        27: "1.6875rem",
        26: "1.625rem",
        29: "1.8125rem",
        32: "2rem",
        34: "2.125rem",
        35.2: "2.2rem",
        38.5: "2.4062rem",
        41: "2.563rem",
        61: "3.8125rem",
        71: "4.4375rem",
        73: "4.5625rem",
        79: "4.9375rem",
        97: "6.0625rem",
      },
      letterSpacing: {
        normal: "0rem",
        "-0.03": "-0.001872rem",
        0.252: "-0.01575rem",
        "-1.68": "-10.5rem",
      },
      textAlign: {
        left: "left",
      },
      borderRadius: {
        16: "1rem",
        85: "5.3125rem",
      },

      screens: {
        desktop: { max: "64rem" },
        tablet: { max: "48rem" },
        mobile: { max: "40rem" },
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
        5: "repeat(6, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 2fr))",
      },
      gridColumnGap: {
        30: "1.875rem",
        32: "2rem",
      },
      justifyItems: {
        center: "center",
      },
      container: {
        center: true,
        padding: "1.875rem",
      },
      spacing: {
        3: "0.185rem",
        4: "0.25rem",
        15: "0.9375rem",
        20: "1.25rem",
        24: "1.5rem",
        25: "1.57rem",
        30: "1.875rem",
        35: "2.1875rem",
        40: "2.5rem",
        45: "2.8125rem",
        50: "3.125rem",
        54: "3.38rem",
        55: "3.44rem",
        60: "3.75rem",
        65: "4.0625rem",
        70: "4.375rem",
        "80p": "5rem",
        "90p": "5.62rem",
        120: "7.5rem",
        133: "8.31rem",
        160: "10rem",
        163: "10.31rem",
        191: "11.94rem",
        200: "12.5rem",
        280: "17.5rem",
        294: "18.375rem",
        300: "18.75rem",
        318: "19.875rem",
        324: "20.25rem",
        350: "21.875rem",
        378: "23.63rem",
        380: "23.75rem",
        384: "24rem",
        400: "25rem",
        483: "30.1875rem",
        500: "31.25rem",
        600: "37.5rem",
        650: "40.625rem",
        686: "42.875rem",
        696: "43.5rem",
        800: "50rem",
        858: "53.625rem",
        1440: "90rem",
      },
    },
  },
  plugins: [],
};
