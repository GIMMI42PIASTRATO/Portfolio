import style from "./mainWrapper.module.css";
import PropTypes from "prop-types";

export default function MainWrapper({ children }) {
    return <div className={style.main_wrapper}>{children}</div>;
}

MainWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
