import style from "./GetInTouch.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function GetInTouch() {
	return (
		<>
			<SectionTitle title="GET IN TOUCH" num="03" />
			<div className={style.getintouch_container}></div>
		</>
	);
}
