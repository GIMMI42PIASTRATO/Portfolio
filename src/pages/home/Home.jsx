// Style import
import style from "./home.module.css";

// Components imports
import MainWrapper from "../../components/mainWrapper/MainWrapper";
import Hero from "../../components/hero/Hero";
import Subtitle from "../../components/subtitle/Subtitle";
import Card from "../../components/card/Card";

// Icons import
import {
	TbCode,
	TbServer2,
	TbBrandPython,
	TbDeviceMobileCode,
	TbMathFunction,
	TbBrandMysql,
} from "react-icons/tb";

export default function home() {
	return (
		<MainWrapper>
			<Hero />
			<div className={style.main}>
				<Subtitle text="What i'm great at" />
				<div className={style.cards_container}>
					<Card icon={<TbCode />} text="Front-end Development" />
					<Card icon={<TbServer2 />} text="Back-end Development" />
					<Card icon={<TbBrandPython />} text="Python development" />
				</div>
				<Subtitle text="What I am learning" />
				<div className={style.cards_container}>
					<Card
						icon={<TbDeviceMobileCode />}
						text="Mobile development"
						className="learning"
					/>
					<Card
						icon={<TbMathFunction />}
						text="Machine learning / Deep learning"
						className="learning"
					/>
					<Card
						icon={<TbBrandMysql />}
						text="MySQL"
						className="learning"
					/>
				</div>
			</div>
		</MainWrapper>
	);
}
