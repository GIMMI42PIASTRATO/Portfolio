"use client";

import style from "./navbar.module.css";
import Image from "next/image";
import ThemeButton from "../theme-button/ThemeButton";
import BigScreenNav from "./BigScreenNav/BigScreenNav";
import SmallScreenNav from "./SmallScreenNav/SmallScreenNav";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className={style.nav_container}>
				<div className={style.name_container}>
					<div className={style.img_container}>
						<Image
							src="/GIMMI42PIASTRATO.png"
							alt="Logo"
							width={40}
							height={40}
						/>
					</div>
					<a href="#home">Vittorio Bussano</a>
				</div>
				<span className={style.link_container}>
					<BigScreenNav />
				</span>
			</nav>
			<ThemeButton isOpen={isOpen} setIsOpen={setIsOpen} />
			<SmallScreenNav className={isOpen ? "flex" : "hidden"} />
		</>
	);
}
