import style from "./footer.module.css";

import {
	TbBrandGithub,
	TbBrandStackoverflow,
	TbBrandLinkedin,
	TbMailbox,
} from "react-icons/tb";

export default function Footer() {
	return (
		<div className={style.footer_container}>
			<div className={style.box}>
				<div className={style.footer_cols}>
					<div className={style.footer_col}>
						<div className={style.logo}>
							<img
								src="mcpfp - GIMMI42PIASTRATO.png"
								alt="Logo"
							/>
							<p>Vittorio Bussano</p>
						</div>
						<a
							className={style.buymeacoffee}
							href="https://www.buymeacoffee.com/GIMMI42PIASTRATO"
						>
							<img
								src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
								alt="Buy Me A Coffee"
							/>
						</a>
					</div>

					<div className={style.footer_col}>
						<h2>Get in touch</h2>
						<p>
							You can find me as Vittorio Bussano or
							@GIMMI42PIASTRATO
						</p>

						<ul className={style.links}>
							<li>
								<a href="https://github.com/GIMMI42PIASTRATO">
									<TbBrandGithub
										stroke="#51b1f5"
										style={{
											fontSize: "1.5rem",
										}}
									/>
									<span>GitHub</span>
								</a>
							</li>
							<li>
								<a href="#">
									<TbBrandLinkedin
										stroke="#51b1f5"
										style={{
											fontSize: "1.5rem",
										}}
									/>
									<span>LinkedIn</span>
								</a>
							</li>
							<li>
								<a href="https://stackoverflow.com/users/19192281/gimmi42piastrato">
									<TbBrandStackoverflow
										stroke="#51b1f5"
										style={{
											fontSize: "1.5rem",
										}}
									/>
									<span>StackOverflow</span>
								</a>
							</li>
						</ul>

						<p>Email</p>
						<ul className={style.links}>
							<li>
								<a href="#">
									<TbMailbox
										stroke="#51b1f5"
										style={{
											fontSize: "1.5rem",
										}}
									/>
									<span>bussanovittorio@gmail.com</span>
								</a>
							</li>
						</ul>
					</div>

					<div className={style.footer_col}>
						<h2>Sitemap</h2>
						<p>Home</p>
						<p>Blog</p>
						<p>Projects</p>
						<p>About</p>
					</div>
				</div>

				<hr className={style.horizontal_line} />

				<div className={style.credits_container}>
					<p>Made with much ❤️ </p>
					<p>
						An indi web ring {"<"}- 🕸️ -{">"}
					</p>
					<small>
						Copyright © 2023 All Rights Reserved. CC BY-NC-ND
						License.
					</small>
				</div>
			</div>
		</div>
	);
}
