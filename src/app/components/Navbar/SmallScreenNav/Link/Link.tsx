import { motion } from "framer-motion";
import { slide } from "../../anim";

export default function Links({
	onLinkClick,
}: {
	onLinkClick: (linkCliked: boolean) => void;
}) {
	const links = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contacts", href: "#contacts" },
	];

	return (
		<>
			<h5 className="text-xs mb-9 text-neutral-400 uppercase">
				Navigation
			</h5>
			<ul className="pt-9 border-t-[1px] border-neutral-400 flex flex-col">
				{links.map((link, index) => (
					<motion.li
						key={index}
						onClick={() => onLinkClick(true)}
						custom={index}
						variants={slide}
						animate="enter"
						exit="exit"
						initial="initial"
						className="flex text-6xl leading-relaxed max-xs:text-5xl max-xs:leading-relaxed max-2xs:text-4xl max-2xs:leading-relaxed"
					>
						<a href={link.href}>{link.name}</a>
					</motion.li>
				))}
			</ul>
		</>
	);
}
