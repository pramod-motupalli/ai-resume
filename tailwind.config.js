/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),   // ← add this line :contentReference[oaicite:3]{index=3}
      // …other plugins
    ],
  };
  