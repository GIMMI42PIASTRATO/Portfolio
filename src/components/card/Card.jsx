import style from "./card.module.css";
import PropTypes from "prop-types";

export default function Card({ icon, text, className }) {
	return (
		<div className={`${style.card_container} ${style[className]}`}>
			<div className={style.icon}>{icon}</div>
			<div className={style.text}>{text}</div>
		</div>
	);
}

Card.propTypes = {
	icon: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};
