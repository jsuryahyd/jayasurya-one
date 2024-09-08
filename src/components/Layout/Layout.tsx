import type { Component, ParentProps  } from "solid-js";

import styles from "~/routes/homepage.module.css";
import linkedInImage from "~/assets/img/linkedin-original.svg";
import fbSvg from "~/assets/img/facebook-original.svg";
import twitterSvg from "~/assets/img/twitter-original.svg";
import githubSvg from "~/assets/img/github-original.svg";
import soSvg from "~/assets/img/stackoverflow.svg";
import envelope from "~/assets/img/envelope.svg";

export default function Layout(props:ParentProps ){
	return <div class={styles.App}>
	<header class="app-header">
		<a
			target="_blank"
			href="https://docs.google.com/document/d/1YIL8aMWDrHraCcwdMnJhFn5GdzFYwMKHSGyG5f_cXhM/edit?usp=sharing"
		>
			Jaya Surya
		</a>
		<a
			target="_blank"
			class="resume-link"
			href="https://drive.google.com/file/d/1xECBJLIjhk3Z5bJ_ZWQF_5JpkbNaUTma/view?usp=sharing"
		>
			Resume / CV
		</a>
	</header>
	{props.children}
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