import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./homepage.module.css";
import linkedInImage from "../../assets/img/linkedin-original.svg";
import fbSvg from "../../assets/img/facebook-original.svg";
import twitterSvg from "../../assets/img/twitter-original.svg";
import githubSvg from "../../assets/img/github-original.svg";
import soSvg from "../../assets/img/stackoverflow.svg";
import envelope from "../../assets/img/envelope.svg";

export default function HomePage(){
	return <div class={styles.App}>
	<header class={styles.header}>
		<a
			target="_blank"
			href="https://docs.google.com/document/d/1OXNuIQdYByfBYvVxUXxjmP0cVLzuAt5SXSpJ_SpW71U/edit?usp=sharing"
		>
			Jaya Surya
		</a>
		<a
			target="_blank"
			class={styles["resume-link"]}
			href="https://drive.google.com/file/d/15W_VI0AolmRHb4tC0LEhkMpJH1gU3T4K/view"
		>
			Resume / CV
		</a>
	</header>
	<main class={styles.main}>
		<div class={styles["content"]}>
			<h2>Senior Full Stack Developer</h2>
			<div class={styles.skills} style={{ display: "flex" }}>
				<span>Nodejs</span>
				<span>MySql</span>
				<span>HTML & CSS</span>
				<span>React</span>
				<span>React Native</span>
				<span>Chrome Extensions</span>
			</div>
			{/* <div class={styles.skills} style={{ display: "flex" }}>
				<span>Server Side applications</span>
				<span>Mobile Applications</span>
				<span>Web Development</span>
			</div> */}
			{/* <div class={styles.skills} style={{ display: "flex" }}>
				<span>Server Side applications</span>
				<span>Mobile Applications</span>
				<span>Web Development</span>
			</div> */}
		</div>
	</main>
	<footer>
		<a
			target="_blank"
			rel="noreferrer noopener"
			href="https://github.com/jsuryahyd"
		>
			<img src={githubSvg} />
		</a>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://stackoverflow.com/users/7314900/jay-surya"
		>
			{/* linkedin */}
			<img src={soSvg} />
		</a>
		<a
			target="_blank"
			rel="noreferrer  noopener"
			href="https://twitter.com/jaysuryahyd"
		>
			<img src={twitterSvg} />
		</a>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.facebook.com/profile.php?id=100027093039467"
		>
			<img src={fbSvg} />
		</a>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="https://www.linkedin.com/in/jaya-surya-b67a51206/"
		>
			{/* linkedin */}
			<img src={linkedInImage} />
		</a>

		<a
			target="_blank"
			rel="noopener noreferrer"
			href="mailto:jaysuryahyd@gmail.com"
			style={{
				"margin-left": "auto",
				"font-size": "1.5rem",
				display: "flex",
				"align-items": "center",
			}}
		>
			<img src={envelope} style={{ "margin-right": "1rem" }} />
			<span>jaysuryahyd@gmail.com</span>
		</a>
	</footer>
</div>
}