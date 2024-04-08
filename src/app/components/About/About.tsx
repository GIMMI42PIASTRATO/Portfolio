import style from "./about.module.css";
import AboutImg from "./AboutImg/AboutImg";
import TextAbout from "./TextAbout/TextAbout";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Details from "./Details/Details";

export default function About() {
	return (
		<>
			<SectionTitle title="ABOUT VITTORIO BUSSANO" num={"01"} />
			<div className={style.about_container}>
				<div className={style.about}>
					<AboutImg />
					<TextAbout />
				</div>
				<div className={style.details}>
					<Details
						field="Experties"
						value="Web Development, Python Development"
					/>
					<Details field="Born in" value="Turin, Italy" />
					<Details field="Date of birth" value="September 13, 2006" />
					<Details field="Education" value="Attending High School" />
				</div>
			</div>
		</>
	);
}
