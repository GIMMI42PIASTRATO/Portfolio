import style from "./projects.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Projects() {
	return (
		<>
			<SectionTitle title="MY PROJECTS" num="02" />
			<div className={style.project_container}></div>
		</>
	);
}
