import style from "./footer.module.css";

import {
	TbBrandGithub,
	TbBrandStackoverflow,
	TbBrandLinkedin,
	TbMailbox,
} from "react-icons/tb";

export default function Footer() {
	return (
		<>
			<footer className={style.footer_container}>
				<div className={style.box}>
					<div className={style.footer_cols}>
						<div className={style.footer_col}>
							<div className={style.logo}>
								<img
									src="GIMMI42PIASTRATO-PRIDE.png"
									alt="Logo"
								/>
								<p className="text-xl font-bold">
									Vittorio Bussano
								</p>
							</div>
							<a
								className={style.buymeacoffee}
								href="https://www.buymeacoffee.com/GIMMI42PIASTRATO"
								target="_blank"
							>
								<img
									src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
									alt="Buy Me A Coffee"
								/>
							</a>
						</div>

						<div className={style.footer_col}>
							<p>
								You can find me as{" "}
								<span className="font-bold">
									Vittorio Bussano
								</span>{" "}
								or{" "}
								<span className="font-bold">
									@GIMMI42PIASTRATO
								</span>
							</p>

							<ul className={style.links}>
								<li>
									<a
										href="https://github.com/GIMMI42PIASTRATO"
										target="_blank"
									>
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
									<a href="#" target="_blank">
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
									<a
										href="https://stackoverflow.com/users/19192281/gimmi42piastrato"
										target="_blank"
									>
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
									<a href="mailto: vittoriobussano@gmail.com">
										<TbMailbox
											stroke="#51b1f5"
											style={{
												fontSize: "1.5rem",
											}}
										/>
										<span>vittoriobussano@gmail.com</span>
									</a>
								</li>
							</ul>
						</div>

						<div className={style.footer_col}>
							<h2 className="text-base font-bold">Sitemap</h2>
							{["Home", "About", "Projects", "Contacts"].map(
								(item, i) => (
									<a
										key={i}
										href={`#${item.toLowerCase()}`}
										className="text-neutral-400 transition duration-200 hover:text-[--text]"
									>
										{item}
									</a>
								)
							)}
						</div>
					</div>

					<div className={style.credits_container}>
						<p>Made with much ❤️ </p>
						<p>
							An indi web ring {"<"}- 🕸️ -{">"}
						</p>
						<small>
							Copyright © 2024 All Rights Reserved. CC BY-NC-ND
							License.
						</small>
					</div>
				</div>
			</footer>
		</>
	);
}
