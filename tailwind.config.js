/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFFFFF",
        secondary: "#EB3850",
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
        16: "16px",
        18: "18px",
        24: "24px",
        32: "32px",
        88: "88px",
      },
      fontWeight: {
        500: 500,
        700: 700,
      },
      lineHeight: {
        27: "27px",
        32: "32px",
        41: "41px",
        97: "97px",
      },
      letterSpacing: {
        normal: "0em",
        "-0.03": "-0.03em",
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
    },
  },
  plugins: [],
};
