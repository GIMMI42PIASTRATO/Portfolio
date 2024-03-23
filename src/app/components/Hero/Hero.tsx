import Image from "next/image";
import style from "./hero.module.css";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";

export default function Hero() {
	return (
		<div className={style.container}>
			<div className={style.hero_main}>
				<div className={style.hero_text}>
					<div className={style.hero_name}>
						<h1 className={style.name}>Vittorio</h1>
						<h1 className={style.surname}>Bussano</h1>
					</div>
					<p>
						Hi I&apos;m Vittorio Bussano. An aspiring full-stack web
						developer and software engineer based in Turin, Italy.
					</p>
					<span>
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
				/>
			</div>
			<div>
				<h1>Carusel</h1>
			</div>
		</div>
	);
}
