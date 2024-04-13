import style from "./bentoimg.module.css";

export default function BentoImg({ img }: { img: string }) {
	return (
		<div className={style.img_container}>
			<img src={img} alt="bento" />
		</div>
	);
}

// flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100
