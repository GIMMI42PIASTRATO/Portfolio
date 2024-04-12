import style from "./projects.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { BentoGrid, BentoGridItem } from "../BentoGrid/bento-grid";
import { items } from "@/data/bento-grid-items";

export default function Projects() {
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
						/>
					))}
				</BentoGrid>
			</div>
		</>
	);
}
