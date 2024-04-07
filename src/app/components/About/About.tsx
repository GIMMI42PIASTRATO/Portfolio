import style from "./about.module.css";
import { mulish } from "@/utility/font";
import AboutImg from "./AboutImg/AboutImg";
import TextAbout from "./TextAbout/TextAbout";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function About() {
	return (
		<>
			<SectionTitle title="ABOUT VITTORIO BUSSANO" num={"01"} />
			<div className={style.about_container}>
				<div className={style.about}>
					<AboutImg />
					<TextAbout />
				</div>
				<div className={style.details}>Ciao</div>
			</div>
		</>
	);
}
