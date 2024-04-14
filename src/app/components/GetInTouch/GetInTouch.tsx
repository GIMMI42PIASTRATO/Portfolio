import style from "./getintouch.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { TbMail } from "react-icons/tb";
import { mulish } from "@/utility/font";

export default function GetInTouch() {
	return (
		<>
			<SectionTitle title="GET IN TOUCH" num="03" />
			<div className={style.getintouch_container}>
				<h1>Create something great.</h1>
				<div className={style.email_container}>
					<span>
						<TbMail />
					</span>
					<h2 className={mulish.className}>
						<a href="mailto: vittoriobussano@gmail.com">
							vittoriobussano@gmail.com
						</a>
					</h2>
				</div>
			</div>
		</>
	);
}
