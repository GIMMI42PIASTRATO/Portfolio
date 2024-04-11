import style from "./page.module.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

export default function Home() {
	return (
		<main className="flex flex-col">
			<section className={style.hero_section}>
				<Hero />
			</section>
			<section className={style.about_section}>
				<About />
			</section>
			<section>
				<Projects />
			</section>
		</main>
	);
}
