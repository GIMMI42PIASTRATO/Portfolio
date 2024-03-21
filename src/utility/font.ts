import { Poppins, Mulish } from "next/font/google";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	fallback: ["sans-serif"],
});

export const mulish = Mulish({
	subsets: ["latin"],
	weight: ["300", "500", "700"],
	style: ["normal"],
	fallback: ["sans-serif"],
});
