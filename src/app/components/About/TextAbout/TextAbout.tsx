import { mulish } from "@/utility/font";
import style from "./textAbout.module.css";

export default function TextAbout() {
	return (
		<div className={style.about_text}>
			<h2>
				Embracing the digital frontier as a full-stack web developer and
				software engineer hailing from the vibrant city of Turin,
				Italy📍
			</h2>

			<p className={mulish.className}>
				With a fervent enthusiasm for both front-end and back-end
				development, I strive to weave seamless user experiences through
				my mastery of React/Next.js, Node.js, Express.js, and Python.
			</p>

			<p className={mulish.className}>
				Expanding my expertise, I&apos;m currently delving into Android
				application development with Kotlin.
			</p>
		</div>
	);
}
