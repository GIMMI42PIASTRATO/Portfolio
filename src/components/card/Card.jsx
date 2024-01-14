import style from "./card.module.css";
import PropTypes from "prop-types";

export default function Card({ icon, text }) {
    return (
        <div className={style.card_container}>
            <div className={style.icon}>{icon}</div>
            <div className={style.text}>{text}</div>
        </div>
    );
}

Card.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};
