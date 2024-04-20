// import { useState } from "react";
import { TbMenu, TbX } from "react-icons/tb";
import { motion } from "framer-motion";
import style from "./themebutton.module.css";

export default function ThemeButton({
	isOpen,
	setIsOpen,
	isInViewport,
}: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	isInViewport: boolean;
}) {
	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const menuButtonVariants = {
		open: { rotate: 0 },
		closed: { rotate: 180 },
	};

	return (
		<motion.div
			className={style.button_container}
			initial="hidden"
			animate={isInViewport ? "visible" : "exit"}
			exit="exit"
			variants={{
				// hidden: {
				// 	opacity: 0,
				// 	scale: 0,
				// 	transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
				// },
				visible: {
					opacity: 1,
					scale: 1,
					transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
				},
				exit: {
					opacity: 0,
					scale: 0,
					transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
				},
			}}
		>
			<motion.button
				className={`${style.theme_button} ${style.menu}`}
				onClick={handleClick}
				whileHover={{
					scale: 1.1,
					backgroundColor: "var(--secondary)",
				}}
				variants={menuButtonVariants}
				initial={false}
				animate={isOpen ? "open" : "closed"}
			>
				{isOpen ? <TbX /> : <TbMenu />}
			</motion.button>
		</motion.div>
	);
}
