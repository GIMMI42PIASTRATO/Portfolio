import { mulish } from "@/utility/font";
import style from "./details.module.css";

export default function Details({
	field,
	value,
}: {
	field: string;
	value: string;
}) {
	return (
		<div className={style.container}>
			<h3>{field}</h3>
			<p className={mulish.className}>{value}</p>
		</div>
	);
}
