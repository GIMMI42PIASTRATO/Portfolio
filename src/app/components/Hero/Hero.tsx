import Image from "next/image";
import Carousel from "../Carusel/Carusel";
import style from "./hero.module.css";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import { mulish } from "@/utility/font";
import { items } from "@/data/logo";
import Reveal from "@/components/Reveal/Reveal";

export default function Hero() {
	return (
		<div className={style.container}>
			<div className={style.hero_main}>
				<Reveal>
					<div className={style.hero_text}>
						<div className={style.hero_name}>
							<h1 className={style.name}>Vittorio</h1>
							<h1 className={style.surname}>Bussano</h1>
						</div>
						<p
							className={`${style.description} ${mulish.className}`}
						>
							Hi I&apos;m Vittorio Bussano. An aspiring full-stack
							web developer and software engineer based in Turin,
							Italy.
						</p>
						<span className={style.social}>
							<a
								href="https://github.com/GIMMI42PIASTRATO"
								target="_blank"
							>
								<TbBrandGithub />
							</a>
							<a href="#" target="_blank">
								<TbBrandLinkedin />
							</a>
						</span>
					</div>
				</Reveal>
				<Image
					src="/GIMMI42PIASTRATO-PRIDE.png"
					alt="Logo"
					width={350}
					height={350}
					quality={100}
					priority={true}
					className={style.hero_image}
				/>
			</div>
			<div className={style.skils_container}>
				<p className={mulish.className}>Skils</p>
				<Carousel items={items} />
			</div>
		</div>
	);
}
