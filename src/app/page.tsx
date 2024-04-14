import style from "./page.module.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import GetInTouch from "./components/GetInTouch/GetInTouch";

export default function Home() {
	return (
		<main className="flex flex-col">
			<section className={style.hero_section} id="home">
				<Hero />
			</section>
			<section className={style.about_section} id="about">
				<About />
			</section>
			<section className={style.project_section} id="projects">
				<Projects />
			</section>
			<section id="contacts">
				<GetInTouch />
			</section>
		</main>
	);
}
