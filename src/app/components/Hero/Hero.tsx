import Image from "next/image";
import style from "./hero.module.css";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import { mulish } from "@/utility/font";

export default function Hero() {
	return (
		<div className={style.container}>
			<div className={style.hero_main}>
				<div className={style.hero_text}>
					<div className={style.hero_name}>
						<h1 className={style.name}>Vittorio</h1>
						<h1 className={style.surname}>Bussano</h1>
					</div>
					<p className={`${style.description} ${mulish.className}`}>
						Hi I&apos;m Vittorio Bussano. An aspiring full-stack web
						developer and software engineer based in Turin, Italy.
					</p>
					<span className={style.social}>
						<TbBrandGithub />
						<TbBrandLinkedin />
					</span>
				</div>
				<Image
					src="/GIMMI42PIASTRATO.png"
					alt="Logo"
					width={350}
					height={350}
					quality={100}
					priority={true}
					className={style.hero_image}
				/>
			</div>
			<div>
				<h1>Carusel</h1>
			</div>
		</div>
	);
}
