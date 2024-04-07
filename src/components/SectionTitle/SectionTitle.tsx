import style from "./sectiontitle.module.css";

export default function SectionTitle({
	title,
	num,
}: {
	title: string;
	num: string;
}) {
	return (
		<div className={style.section_title}>
			<h3>{title}</h3>
			<h3>{num}</h3>
		</div>
	);
}
