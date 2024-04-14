import style from "./navbar.module.css";
import Image from "next/image";
import ThemeButton from "../theme-button/ThemeButton";

export default function Navbar() {
	return (
		<nav className={style.nav_container}>
			<div className={style.name_container}>
				<div className={style.img_container}>
					<Image
						src="/GIMMI42PIASTRATO.png"
						alt="Logo"
						width={40}
						height={40}
					/>
				</div>
				<a href="#home">Vittorio Bussano</a>
			</div>
			<span className={style.link_container}>
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
				<ThemeButton />
			</span>
		</nav>
	);
}
