"use client";

import { useState, useEffect } from "react";
import { throttle } from "lodash";

export default function PointerFollower() {
	const [position, setPosition] = useState({ x: -100, y: -100 });

	useEffect(() => {
		const updpatePosition = throttle((e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		}, 20);

		window.addEventListener("mousemove", updpatePosition);

		return () => {
			window.removeEventListener("mousemove", updpatePosition);
		};
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none z-50">
			<div
				className="absolute w-[91px] h-[91px] bg-transparent backdrop-blur-sm rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-out overflow-hidden"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
				aria-hidden="true"
			/>
		</div>
	);
}
