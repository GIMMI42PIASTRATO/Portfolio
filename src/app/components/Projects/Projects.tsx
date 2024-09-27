"use client";

import style from "./projects.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {
	BentoGrid,
	BentoGridItem,
} from "@/app/components/BentoGrid/bento-grid";
import { items } from "@/data/bento-grid-items";
import React from "react";
import { useState, useEffect } from "react";

export default function Projects() {
	const [windowWidth, setWindowWidth] = useState<number | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);

			const handleResize = () => {
				setWindowWidth(window.innerWidth);
			};

			window.addEventListener("resize", handleResize);

			// Cleanup listener on component unmount
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	const handleClick = (link: string) => {
		window.open(link, "_blank");
	};

	const selectHeaderImg = (data: JSX.Element | JSX.Element[]) => {
		if (!Array.isArray(data)) {
			return data;
		}

		if (windowWidth !== null && windowWidth >= 768) {
			return data[1];
		}

		return data[0];
	};

	return (
		<>
			<SectionTitle title="MY PROJECTS" num="02" />
			<div className={style.project_container}>
				<BentoGrid>
					{items.map((item, i) => (
						<BentoGridItem
							key={i}
							title={item.title}
							description={item.description}
							header={selectHeaderImg(item.header)}
							icon={item.icon}
							className={
								i === 3 || i === 6 || i === 5
									? "md:col-span-2"
									: i === 4
									? "md:row-span-2"
									: ""
							}
							onClick={() => handleClick(item.link)}
						/>
					))}
				</BentoGrid>
			</div>
		</>
	);
}
