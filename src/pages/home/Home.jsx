import MainWrapper from "../../components/mainWrapper/MainWrapper";
import Hero from "../../components/hero/Hero";
import Subtitle from "../../components/subtitle/Subtitle";

export default function home() {
    return (
        <MainWrapper>
            <Hero />
            <Subtitle text="What i'm great at" />
            <Subtitle text="What I am learning" />
        </MainWrapper>
    );
}
