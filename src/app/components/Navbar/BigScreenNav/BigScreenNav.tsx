import style from "./bigscreennav.module.css";

export default function BigScreenNav({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) {
	return (
		<>
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

			<ul className={`${style.link} ${style.menu}`}>
				<li onClick={() => setIsOpen(!isOpen)}>Menu</li>
			</ul>
		</>
	);
}
