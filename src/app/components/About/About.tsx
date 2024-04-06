import style from "./About.module.css";

export default function About() {
	return (
		<div>
			<div className={style.section_title}>
				<h3>ABOUT VITTORIO BUSSANO</h3>
				<h3>01</h3>
			</div>

			<div className={style.text_container}>
				<div className={style.about}>
					<div className={style.image_container}>
						<img src="/keyboard-image.jpeg" alt="keyboard" />
					</div>
				</div>
				<div className={style.details}>
					<p>
						Ciao sono una persona che sa scrivere a battitura per
						fare delle cose
					</p>
				</div>
			</div>
		</div>
	);
}
