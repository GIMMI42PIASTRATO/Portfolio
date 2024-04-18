"use client";

import style from "./navbar.module.css";
import Image from "next/image";
import ThemeButton from "../theme-button/ThemeButton";
import BigScreenNav from "./BigScreenNav/BigScreenNav";
import SmallScreenNav from "./SmallScreenNav/SmallScreenNav";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import useIsInViewport from "@/hooks/useIsInViewport";

export default function Navbar() {
	const ref = useRef<HTMLDivElement>(null);
	const isInViewport = useIsInViewport(ref, "200px");

	const [isOpen, setIsOpen] = useState(false);
	const [linkClicked, setLinkClicked] = useState(false);

	useEffect(() => {
		if (linkClicked) {
			setIsOpen(false);
			setLinkClicked(false);
		}
	}, [linkClicked]);

	return (
		<>
			<nav ref={ref} className={style.nav_container}>
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
			<ThemeButton
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				isInViewport={!isInViewport}
			/>
			<AnimatePresence>
				{isOpen && <SmallScreenNav onLinkClick={setLinkClicked} />}
			</AnimatePresence>
		</>
	);
}
