import style from "./footer.module.css";

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
						<span>bottone</span>
						<span>bottone</span>
						<span>bottone</span>
						<span>bottone</span>
						<p>Email</p>
						<span>bussanovittorio@gmail.com</span>
					</div>

					<div className={style.footer_col}>
						<h2>Sitemap</h2>
						<p>Home</p>
						<p>Blog</p>
						<p>Projects</p>
						<p>About</p>
					</div>
				</div>

				<hr />

				<div className={style.credits_container}>
					<p>Made with much ❤️ </p>
					<p>
						An indi web ring {"<"}- 🕸️ -{">"}
					</p>
					<p>
						Copyright © 2023 All Rights Reserved. CC BY-NC-ND
						License.
					</p>
				</div>
			</div>
		</div>
	);
}
