// Components imports
import MainWrapper from "../../components/mainWrapper/MainWrapper";
import Hero from "../../components/hero/Hero";
import CardsContainer from "../../components/cardsContainer/CardsContainer";

export default function home() {
	return (
		<MainWrapper>
			<Hero />
			<CardsContainer />
		</MainWrapper>
	);
}
