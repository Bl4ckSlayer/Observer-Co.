/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f2cd14",

          secondary: "#ce9c2e",

          accent: "#979da6",

          neutral: "#f5f5f4",

          "base-100": "#f3f4f6",

          info: "#5CA8EB",

          success: "#059669",

          warning: "#db2777",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
