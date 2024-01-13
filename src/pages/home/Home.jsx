// Style import
import style from "./home.module.css";

// Components imports
import MainWrapper from "../../components/mainWrapper/MainWrapper";
import Hero from "../../components/hero/Hero";
import Subtitle from "../../components/subtitle/Subtitle";

export default function home() {
    return (
        <MainWrapper>
            <Hero />
            <div className={style.main}>
                <Subtitle text="What i'm great at" />
                <Subtitle text="What I am learning" />
            </div>
        </MainWrapper>
    );
}
