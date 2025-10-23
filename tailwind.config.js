/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // ← ts/tsx 반드시 포함
  ],
  theme: { extend: {} },
  plugins: [],
};
