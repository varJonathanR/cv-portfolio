/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'custom-black': '#111',
		'custom-gray': "#444",
		'custom-white': "#eee",
		'custom-green': '#00BC2F',

      },
    },
  },
  plugins: [],
};
