import style from "./hero.module.css";
import image from "../../../public/mcpfp - GIMMI42PIASTRATO.png";

export default function Hero() {
	return (
		<div className={style.hero_container}>
			<div className={style.intro_container}>
				<p className={`${style.text} ${style.text1}`}>
					Hello! I&apos;m <span>Vittorio Bussano</span>.
				</p>
				<p className={`${style.text} ${style.text2}`}>
					I am an aspiring software engineer and full stack web
					developer.
				</p>
				<p className={`${style.text} ${style.text3}`}>
					Passionate about tech blogging:{" "}
					<span>
						I love sharing insights and experiences through engaging
						articles in the tech realm.
					</span>
				</p>
			</div>
			<div className={style.img_container}>
				<img src={image.src} alt="Logo" />
			</div>
		</div>
	);
}
