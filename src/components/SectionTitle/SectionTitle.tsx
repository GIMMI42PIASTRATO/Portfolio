import style from "./sectiontitle.module.css";
import Reveal from "../Reveal/Reveal";

export default function SectionTitle({
	title,
	num,
}: {
	title: string;
	num: string;
}) {
	return (
		<Reveal className="border-b-2 border-[--secondary]">
			<div className={style.section_title}>
				<h3>{title}</h3>
				<h3>{num}</h3>
			</div>
		</Reveal>
	);
}
