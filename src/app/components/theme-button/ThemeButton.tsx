"use client";

// import { useState } from "react";
import { TbMoon, TbMenu, TbX } from "react-icons/tb";
import { motion } from "framer-motion";
import style from "./themebutton.module.css";

export default function ThemeButton({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) {
	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const menuButtonVariants = {
		open: { rotate: 0 },
		closed: { rotate: 180 },
	};

	return (
		<motion.div className={style.button_container}>
			<motion.button
				className={`${style.theme_button} ${style.menu}`}
				onClick={handleClick}
				variants={menuButtonVariants}
				initial={false}
				animate={isOpen ? "open" : "closed"}
			>
				{isOpen ? <TbX /> : <TbMenu />}
			</motion.button>
		</motion.div>
	);
}
