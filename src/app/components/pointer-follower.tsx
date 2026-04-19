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
	const [isCursorOnText, setIsCursorOnText] = useState(false);
	const textCursorOffset = { x: 32, y: 44 };
	const textHoverPadding = 28;
	const heroNameRef = useRef<Element | null>(null);
	const textRef = useRef<NodeListOf<Element> | null>(null);

	useEffect(() => {
		// Check if the user is on a touch device
		const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
		setIsMouseDevice(!isTouchDevice);

		heroNameRef.current = document.querySelector(`.${style.hero_name}`);
		textRef.current = document.querySelectorAll(
			`.text-smol-cursor:not(${style.hero_name})`,
		);

		if (!isTouchDevice) {
			const updpatePosition = throttle((e: MouseEvent) => {
				setPosition({ x: e.clientX, y: e.clientY });
				const cursorIsOnText = Array.from(textRef.current ?? []).some(
					(textEl) => {
						const rect = textEl.getBoundingClientRect();

						return (
							e.clientX >= rect.left - textHoverPadding &&
							e.clientX <= rect.right + textHoverPadding &&
							e.clientY >= rect.top - textHoverPadding &&
							e.clientY <= rect.bottom + textHoverPadding
						);
					},
				);

				setIsCursorOnText(cursorIsOnText);
			}, 20);

			// handler to change pointer follower style on hero
			const handleMouseEnterOnHero = () => setIsCursorOnHero(true);
			const handleMouseLeaveOnHero = () => setIsCursorOnHero(false);

			window.addEventListener("mousemove", updpatePosition);

			if (heroNameRef.current) {
				heroNameRef.current.addEventListener(
					"mouseenter",
					handleMouseEnterOnHero,
				);
				heroNameRef.current.addEventListener(
					"mouseleave",
					handleMouseLeaveOnHero,
				);
			}

			return () => {
				window.removeEventListener("mousemove", updpatePosition);
				updpatePosition.cancel();
				if (heroNameRef.current) {
					heroNameRef.current.removeEventListener(
						"mouseenter",
						handleMouseEnterOnHero,
					);
					heroNameRef.current.removeEventListener(
						"mouseleave",
						handleMouseLeaveOnHero,
					);
				}
			};
		}
	}, []);

	if (!isMouseDevice) {
		return null;
	}

	const followerPosition = isCursorOnText
		? {
				left: `${position.x + textCursorOffset.x}px`,
				top: `${position.y + textCursorOffset.y}px`,
			}
		: {
				left: `${position.x}px`,
				top: `${position.y}px`,
			};

	return (
		<div className="fixed inset-0 pointer-events-none z-50">
			<div
				className={cn(
					"relative w-[91px] h-[91px] rounded-full border border-transparent bg-transparent shadow-none backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 transition-[left,top,width,height,filter,background-color,border-color,box-shadow] duration-[600ms] ease-out overflow-hidden",
					isCursorOnHero
						? "w-[177px] h-[177px] invert backdrop-blur-none"
						: isCursorOnText
							? "w-[24px] h-[24px] border-white/25 bg-[rgba(174,194,207,0.14)] shadow-[0_10px_30px_rgba(6,7,9,0.18)] backdrop-blur-xl"
							: "w-[91px] h-[91px]",
				)}
				style={followerPosition}
				aria-hidden="true"
			>
				<div
					className={cn(
						"flex justify-center items-center w-full h-full transition-all duration-[600ms] ease-out",
						isCursorOnHero || isCursorOnText
							? "opacity-0 scale-50"
							: "opacity-100 scale-100",
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
