import style from "./subtitle.module.css";
import PropTypes from "prop-types";

export default function Subtitle({ text }) {
    return (
        <div className={style.text_container}>
            <h2 className={style.text}>{text}</h2>
        </div>
    );
}

Subtitle.propTypes = {
    text: PropTypes.string.isRequired,
};
