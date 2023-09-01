/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
		colors: {
			bgcolor: "#eafaf1",
			primgreen: "#00ad6a",
			darktxt: "#080c16",
		},
		fontFamily: {
			body: ["Work Sans", "sans-serif"],
		},
	},
	plugins: [],
};
