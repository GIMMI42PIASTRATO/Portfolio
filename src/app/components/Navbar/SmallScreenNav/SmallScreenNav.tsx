import style from "./smallscreennav.module.css";

export default function SmallScreenNav({
	className,
	onLinkClick,
}: {
	className: string;
	onLinkClick: (linkClicked: boolean) => void;
}) {
	const links = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contacts", href: "#contacts" },
	];

	return (
		<div className={`${style.fixed_nav} ${className}`}>
			<div className={style.nav_container}>
				<h5 className="text-xs mb-9 text-neutral-400 uppercase">
					Navigation
				</h5>
				<ul className="pt-9 border-t-[1px] border-neutral-400 flex flex-col">
					{links.map((link, index) => (
						<li
							key={index}
							onClick={() => onLinkClick(true)}
							className="flex text-6xl leading-relaxed max-xs:text-5xl max-xs:leading-relaxed max-2xs:text-4xl"
						>
							<a href={link.href}>{link.name}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
