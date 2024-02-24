// Style import
import style from "./cardscontainer.module.css";

// Components import
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

export default function CardsContainer() {
	return (
		<div className={style.main}>
			<div>
				<Subtitle text="What i'm great at" />
				<div className={style.cards_container}>
					<Card icon={<TbCode />} text="Front-end Development" />
					<Card icon={<TbServer2 />} text="Back-end Development" />
					<Card icon={<TbBrandPython />} text="Python development" />
				</div>
			</div>
			<div>
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
		</div>
	);
}
