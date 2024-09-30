"use client";

import { cn } from "@/utility/cn";
import { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";
import Image from "next/image";

import style from "@/app/components/Hero/hero.module.css";

export default function PointerFollower() {
	const [position, setPosition] = useState({ x: -100, y: -100 });
	const [isMouseDevice, setIsMouseDevice] = useState(true);
	const [isCursorOnHero, setIsCursorOnHero] = useState(false);
	const heroNameRef = useRef<Element | null>(null);

	useEffect(() => {
		// Check if the user is on a touch device
		const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
		setIsMouseDevice(!isTouchDevice);

		heroNameRef.current = document.querySelector(`.${style.hero_name}`);

		if (!isTouchDevice) {
			const updpatePosition = throttle((e: MouseEvent) => {
				setPosition({ x: e.clientX, y: e.clientY });
			}, 20);

			const handleMouseEnter = () => setIsCursorOnHero(true);
			const handleMouseLeave = () => setIsCursorOnHero(false);

			window.addEventListener("mousemove", updpatePosition);

			if (heroNameRef.current) {
				heroNameRef.current.addEventListener(
					"mouseenter",
					handleMouseEnter
				);
				heroNameRef.current.addEventListener(
					"mouseleave",
					handleMouseLeave
				);
			}

			return () => {
				window.removeEventListener("mousemove", updpatePosition);
				if (heroNameRef.current) {
					heroNameRef.current.removeEventListener(
						"mouseenter",
						handleMouseEnter
					);
					heroNameRef.current.removeEventListener(
						"mouseleave",
						handleMouseLeave
					);
				}
			};
		}
	}, []);

	if (!isMouseDevice) {
		return null;
	}

	return (
		<div className="fixed inset-0 pointer-events-none z-50">
			<div
				className={cn(
					"relative w-[91px] h-[91px] bg-transparent backdrop-blur-sm rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-[left,top,width,height,filter] duration-[600ms] ease-out overflow-hidden",
					isCursorOnHero
						? "w-[177px] h-[177px] invert backdrop-blur-0 "
						: "w-[91px] h-[91px]"
				)}
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
				aria-hidden="true"
			>
				<div
					className={cn(
						"flex justify-center items-center w-full h-full transition-all duration-[600ms] ease-out",
						isCursorOnHero
							? "opacity-0 scale-50"
							: "opacity-100 scale-100"
					)}
				>
					<Image
						src="scroll-down.svg"
						alt="SCROLL"
						height={80}
						width={80}
						quality={100}
						className="animate-spin-slow"
					/>
				</div>
			</div>
		</div>
	);
}
