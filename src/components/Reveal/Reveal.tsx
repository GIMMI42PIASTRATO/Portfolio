"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/utility/cn";

export default function Reveal({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const animationControls = useAnimation();

	useEffect(() => {
		console.log(isInView);
		// If the element is in view, start the animation
		if (isInView) {
			animationControls.start("visible");
		}
	}, [isInView, animationControls]);

	return (
		<div ref={ref} className={cn("relative overflow-hidden", className)}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={animationControls}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
			>
				{children}
			</motion.div>
		</div>
	);
}
