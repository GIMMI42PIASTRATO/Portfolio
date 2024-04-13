"use client";

import style from "./projects.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {
	BentoGrid,
	BentoGridItem,
} from "@/app/components/BentoGrid/bento-grid";
import { items } from "@/data/bento-grid-items";
import Link from "next/link";

export default function Projects() {
	const handleClick = (link: string) => {
		window.open(link, "_blank");
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
							header={item.header}
							icon={item.icon}
							className={
								i === 3 || i === 6 ? "md:col-span-2" : ""
							}
							onClick={() => handleClick(item.link)}
						/>
					))}
				</BentoGrid>
			</div>
		</>
	);
}
