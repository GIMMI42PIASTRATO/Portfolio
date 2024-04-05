import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

export default function Home() {
	return (
		<main className="flex flex-col">
			<section className="h-screen">
				<Hero />
			</section>
			<section>
				<About />
			</section>
		</main>
	);
}
