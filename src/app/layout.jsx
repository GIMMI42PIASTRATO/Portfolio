import "../index.css";
import PropTypes from "prop-types";

export const metadata = {
	title: "Vite + React",
	description: "Vite + React + Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Vite + React</title>
			</head>
			<body>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}

RootLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
