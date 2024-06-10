"use client";

import style from "./navbar.module.css";
import Image from "next/image";
import ThemeButton from "../theme-button/ThemeButton";
import BigScreenNav from "./BigScreenNav/BigScreenNav";
import SmallScreenNav from "./SmallScreenNav/SmallScreenNav";
import { useState, useEffect, useRef, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsInViewport from "@/hooks/useIsInViewport";
import { fadeIn } from "./anim";

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

		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [linkClicked, isOpen]);

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={style.no_scrollable_overlay}
						onClick={() => setIsOpen(false)}
						variants={fadeIn}
						animate="enter"
						exit="exit"
						initial="initial"
					/>
				)}
			</AnimatePresence>
			<nav ref={ref} className={style.nav_container}>
				<div className={style.name_container}>
					<div className={style.img_container}>
						<Image
							src="/GIMMI42PIASTRATO-PRIDE.png"
							alt="Logo"
							width={40}
							height={40}
						/>
					</div>
					<a href="#home">Vittorio Bussano</a>
				</div>
				<span className={style.link_container}>
					<BigScreenNav isOpen={isOpen} setIsOpen={setIsOpen} />
				</span>
			</nav>
			<AnimatePresence>
				<ThemeButton
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isInViewport={!isInViewport}
				/>
			</AnimatePresence>

			<AnimatePresence>
				{isOpen && <SmallScreenNav onLinkClick={setLinkClicked} />}
			</AnimatePresence>
		</>
	);
}
