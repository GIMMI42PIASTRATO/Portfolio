import style from "./smallscreennav.module.css";

export default function SmallScreenNav({ className }: { className: string }) {
	return (
		<div className={`${style.smallnav_container} ${className}`}>
			<ul>
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
		</div>
	);
}
