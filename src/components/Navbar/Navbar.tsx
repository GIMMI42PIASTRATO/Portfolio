"use client";

import { useState } from "react";
import style from "./navbar.module.css";
import { TbMoon, TbMenu, TbX } from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
	const [menu, setMenu] = useState(false);

	const menuButtonVariants = {
		open: { rotate: 0 },
		closed: { rotate: 180 },
	};

	return (
		<nav className={style.nav_container}>
			<div className={style.name_container}>
				<div className={style.img_container}>
					<Image
						src="/GIMMI42PIASTRATO.png"
						alt="Logo"
						width={48}
						height={48}
					/>
				</div>
				<a href="#home">Vittorio Bussano</a>
			</div>
			<span className={style.link_container}>
				<ul className={style.link}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>
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
			</span>
		</nav>
	);
}
