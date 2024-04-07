import React from "react";
import style from "./aboutimg.module.css";

export default function AboutImg() {
	return (
		<div className={style.img_container}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				className={style.about_img}
				src="/keyboard-image.jpeg"
				alt="keyboard"
			/>
			<span className={style.circle}>
				<img
					className={style.wrapped_text}
					src="/curved-text.png"
					alt="Curved Text"
				/>
				<img
					className={style.man_technologist}
					src="/man-technologist-ios.png"
					alt="Man Technologist Icon"
				/>
			</span>
		</div>
	);
}
