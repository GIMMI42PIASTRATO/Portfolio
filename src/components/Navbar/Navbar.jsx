import style from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav className={style.nav_container}>
            <div className={style.name_container}>
                <a href="#">Logo</a>
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
                <div>L/D</div>
            </span>
        </nav>
    );
}
