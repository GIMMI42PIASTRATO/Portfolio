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
			<Image src={item.logos} alt={item.alt} fill={true} />
		</div>
	));
};

function Carousel({ items }: CarouselProps) {
	return (
		<>
			<div className={style.carusel}>{createImage(items)}</div>
			<div className={style.carusel}>{createImage(items)}</div>
		</>
	);
}

export default Carousel;
