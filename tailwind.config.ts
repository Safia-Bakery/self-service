module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        mainGray: "#f5f5f5",
        textGray: "#00000080",
        borderGray: "#E4E4E4",
        mainBg: "#BEA08733",
        primary: "#DCC38B",
        secondary: "#B4C88C",
        btnGray: "#0000003B",
        mainBrown: "#BEA087",
      },
      boxShadow: {
        selected: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        orderCard: "2px 2px 2px 2px #00000040",
        button: "0px 4px 4px 0px #00000040",
      },
    },
  },

  plugins: [],
};
