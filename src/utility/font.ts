import { Poppins, Mulish } from "next/font/google";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	fallback: ["system-ui", "arial"],
});

export const mulish = Mulish({
	subsets: ["latin"],
	weight: ["300", "500", "700"],
	style: ["normal"],
	fallback: ["system-ui", "arial"],
});
