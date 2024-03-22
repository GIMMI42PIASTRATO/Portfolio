"use client";

import { useState } from "react";
import { TbMoon, TbMenu, TbX } from "react-icons/tb";
import { motion } from "framer-motion";
import style from "./ThemeButton.module.css";

export default function ThemeButton() {
	const [menu, setMenu] = useState(false);

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
				onClick={() => setMenu(!menu)}
				variants={menuButtonVariants}
				initial={false}
				animate={menu ? "open" : "closed"}
			>
				{menu ? <TbX /> : <TbMenu />}
			</motion.button>
		</div>
	);
}
