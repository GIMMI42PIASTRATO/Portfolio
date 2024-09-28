"use client";

import { useState, useEffect } from "react";
import { throttle } from "lodash";
import Image from "next/image";

export default function PointerFollower() {
	const [position, setPosition] = useState({ x: -100, y: -100 });
	const [isMouseDevice, setIsMouseDevice] = useState(true);

	useEffect(() => {
		// Check if the user is on a touch device
		const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
		setIsMouseDevice(!isTouchDevice);

		if (!isTouchDevice) {
			const updpatePosition = throttle((e: MouseEvent) => {
				setPosition({ x: e.clientX, y: e.clientY });
			}, 20);

			window.addEventListener("mousemove", updpatePosition);

			return () => {
				window.removeEventListener("mousemove", updpatePosition);
			};
		}
	}, []);

	if (!isMouseDevice) {
		return null;
	}

	return (
		<div className="fixed inset-0 pointer-events-none z-50">
			<div
				className="relative w-[91px] h-[91px] bg-transparent backdrop-blur-sm rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-out overflow-hidden"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
				aria-hidden="true"
			>
				<div className="flex justify-center items-center w-full h-full ">
					<Image
						src="scroll-down.svg"
						alt="SCROLL"
						height={80}
						width={80}
						quality={100}
						className="animate-spin-slow "
					/>
				</div>
			</div>
		</div>
	);
}
