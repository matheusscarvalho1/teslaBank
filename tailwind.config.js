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
        14: "14px",
        16: "16px",
        18: "18px",
        22: "22px",
        24: "24px",
        32: "32px",
        56: "56px",
        88: "88px",
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
      lineHeight: {
        17: "17px",
        21: "21px",
        24: "24px",
        27: "27px",
        32: "32px",
        35.2: "35.2px",
        41: "41px",
        61: "61px",
        97: "97px",
      },
      letterSpacing: {
        normal: "0em",
        "-0.03": "-0.03em",
        0.252: "-0.252px",
      },
      textAlign: {
        left: "left",
      },

      screen: {
        desktop: "1024px",
        tablet: "768px",
        mobile: "568px",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
        5: "repeat(6, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 2fr))",
      },
      gridColumnGap: {
        30: "30px",
        32: "32px",
      },
      justifyItems: {
        center: "center",
      },
      container: {
        center: true,
        padding: "30px",
      },
      spacing: {
        4: "4px",
        35: "35px",
        54: "54px",
        60: "60px",
        90: "90px",
        120: "120px",
        280: "280px",
        294: "294px",
        384: "384px",
        483: "483px",
        696: "696px",
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
