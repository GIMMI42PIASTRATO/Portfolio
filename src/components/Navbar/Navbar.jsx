import style from "./navbar.module.css";
import { TbMoon } from "react-icons/tb";

export default function Navbar() {
    return (
        <nav className={style.nav_container}>
            <div className={style.name_container}>
                <div className={style.img_container}>
                    <img src="mcpfp - GIMMI42PIASTRATO.png" alt="Logo" />
                </div>
                <a href="#home">Vittorio Bussano</a>
            </div>
            <span className={style.link_container}>
                <ul className={style.link}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
                <div className={style.button_container}>
                    <button className={style.theme_button}>
                        <TbMoon />
                    </button>
                </div>
            </span>
        </nav>
    );
}
