"use client";

import { useState } from "react";
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
	const [menu, setMenu] = useState(false);

	const handleClick = () => {
		setMenu(!menu);
		setIsOpen(!isOpen);
		console.log("click");
	};

	const menuButtonVariants = {
		open: { rotate: 0 },
		closed: { rotate: 180 },
	};

	return (
		<div className={style.button_container}>
			<button className={style.theme_button}>
				<TbMoon />
			</button>

			<motion.button
				className={`${style.theme_button} ${style.menu}`}
				onClick={handleClick}
				variants={menuButtonVariants}
				initial={false}
				animate={menu ? "open" : "closed"}
			>
				{menu ? <TbX /> : <TbMenu />}
			</motion.button>
		</div>
	);
}
