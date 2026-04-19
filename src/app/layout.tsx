import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../utility/font";

// Importing componets
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PointerFollower from "./components/pointer-follower";

export const metadata: Metadata = {
	title: "Vittorio Bussano • Full Stack Web Developer",
	description:
		"Vittorio Bussano is a Full Stack Web Developer based in Italy.",
	verification: {
		google: "0jYFYURNbHa2Xo9fbkJ8N_0Na_eGjKJwQtMvTKlMU1Q",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.className}>
			<body>
				<PointerFollower />
				<Navbar />
				<div className="max-w-5xl mx-auto px-5 xs:px-10">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
