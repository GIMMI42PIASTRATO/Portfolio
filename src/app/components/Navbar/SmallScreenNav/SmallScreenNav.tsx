import style from "./smallscreennav.module.css";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import Links from "./Link/Link";

export default function SmallScreenNav({
	onLinkClick,
}: {
	onLinkClick: (linkClicked: boolean) => void;
}) {
	return (
		<motion.div
			variants={menuSlide}
			animate="enter"
			exit="exit"
			initial="initial"
			className={style.fixed_nav}
		>
			<div className={style.nav_container}>
				<Links onLinkClick={onLinkClick} />
			</div>
		</motion.div>
	);
}
