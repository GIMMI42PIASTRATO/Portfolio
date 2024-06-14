import Image from "next/image";
import Link from "next/link";
import Carousel from "../Carusel/Carusel";
import style from "../Hero/hero.module.css";
import { mulish } from "@/utility/font";
import { items } from "@/data/logo";
import Reveal from "@/components/Reveal/Reveal";

export default function NotFoundComponent() {
	return (
		<div className={style.container}>
			<div className={style.hero_main}>
				<Reveal>
					<div className={style.hero_text}>
						<div className={style.hero_name}>
							<h1 className={style.name}>404</h1>
							<h1 className={style.surname}>Not Found</h1>
						</div>
						<p
							className={`${style.description} ${mulish.className}`}
						>
							You are lost in the void of the internet. Click{" "}
							<span className="text-[#51b1f5] underline underline-offset-4 font-bold">
								<Link href="/">here</Link>
							</span>{" "}
							to go back.
						</p>
					</div>
				</Reveal>
				<Image
					src="/not-found-logo-pride.png"
					alt="Logo"
					width={350}
					height={350}
					quality={100}
					priority={true}
					className={style.hero_image}
				/>
			</div>
		</div>
	);
}
