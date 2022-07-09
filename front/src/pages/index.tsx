import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
	const [user, setUser] = useState<string | null>(null);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<section className={styles.layout_mainIntroduce}>
					<header className={styles.header}>
						<Link href={"/"}>
							<span className={styles.logo}>판소리</span>
						</Link>

						<div className={styles.buttons}>
							<Image
								className={styles.btn_menu}
								src="/imgs/menu_img.png"
								alt="menu btn"
								width="30px"
								height="30px"
							/>

							{!user && (
								<input
									type="button"
									className={styles.btn_login}
									value="로그인/회원가입"></input>
							)}

							{user && (
								<input
									type="button"
									className={styles.btn_logout}
									value="로그아웃"></input>
							)}
						</div>
					</header>
				</section>
				<section className={styles.layout_mainService}></section>
				<section className={styles.layout_mainContent}></section>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
};

export default Home;
