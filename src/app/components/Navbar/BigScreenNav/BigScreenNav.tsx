import style from "./bigscreennav.module.css";

export default function BigScreenNav() {
	return (
		<ul className={style.link}>
			<li>
				<a href="#home">Home</a>
			</li>
			<li>
				<a href="#about">About</a>
			</li>
			<li>
				<a href="#projects">Projects</a>
			</li>
			<li>
				<a href="#contacts">Contacts</a>
			</li>
		</ul>
	);
}
