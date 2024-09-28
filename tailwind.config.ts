import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"spin-slow": "spin 5s linear infinite",
			},
		},
		screens: {
			"2xs": "360px", // "2xs" is a new breakpoint
			xs: "460px", // "xs" is a new breakpoint
			...defaultTheme.screens,
		},
	},
	plugins: [],
};
export default config;
