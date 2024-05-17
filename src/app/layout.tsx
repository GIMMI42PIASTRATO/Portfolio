import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../utility/font";

// Importing componets
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
	title: "Vittorio Bussano • Full Stack Web Developer",
	description:
		"Vittorio Bussano is a Full Stack Web Developer based in Italy.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.className}>
			<body>
				<Navbar />
				<div className="max-w-5xl mx-auto px-5 xs:px-10">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
