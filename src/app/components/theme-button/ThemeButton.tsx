// import { useState } from "react";
import Button from "./button/Button";

export default function ThemeButton({
	isOpen,
	setIsOpen,
	isInViewport,
}: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	isInViewport: boolean;
}) {
	return (
		<>
			{isOpen ? (
				<Button
					isInViewport={true}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			) : (
				<Button
					isInViewport={isInViewport}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			)}
		</>
	);
}
