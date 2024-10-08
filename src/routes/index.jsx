import styles from "./homepage.module.css";
import linkedInImage from "../assets/img/linkedin-original.svg";
import fbSvg from "../assets/img/facebook-original.svg";
import twitterSvg from "../assets/img/twitter-original.svg";
import githubSvg from "../assets/img/github-original.svg";
import soSvg from "../assets/img/stackoverflow.svg";
import envelope from "../assets/img/envelope.svg";
import WebsiteHeader from "~/components/Header/header"
export default function HomePage(){
	return <div class={styles.App}>
	<WebsiteHeader isHomePage={true}/>
	<main class={styles.main}>
		<div class={styles["content"]}>
			<h2>Lead Full Stack Developer</h2>
			<div class={styles.skills}>
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
			href="https://www.linkedin.com/in/jaya-surya-teja-anisetty-b67a51206"
		>
			{/* linkedin */}
			<img src={linkedInImage} />
		</a>

		<a
			target="_blank"
			rel="noopener noreferrer"
			href={`mailto:${process.env.EMAIL}`}
			style={{
				"margin-left": "auto",
				"font-size": "1.5rem",
				display: "flex",
				"align-items": "center",
			}}
		>
			<img src={envelope} style={{ "margin-right": "1rem" }} />
			<span>{process.env.EMAIL}</span>
		</a>
	</footer>
</div>
}