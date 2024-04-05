import style from "./carusel.module.css";
import Image from "next/image";

interface Item {
	logos: string;
	alt: string;
}

interface CarouselProps {
	items: Array<Item>;
}

const createImage = (items: Array<Item>) => {
	return items.map((item, index) => (
		<div key={index} className={style.item}>
			{/* <Image src={item.logos} alt={item.alt} fill={true} sizes="" /> */}
			<img src={item.logos} alt={item.alt} className={style.skil_icon} />
		</div>
	));
};

function Carousel({ items }: CarouselProps) {
	return (
		<div className={style.carusel_container}>
			<div className={style.box}>
				<div className={style.carusel}>{createImage(items)}</div>
				<div className={style.carusel}>{createImage(items)}</div>
			</div>
		</div>
	);
}

export default Carousel;
