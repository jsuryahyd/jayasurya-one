import styles from "~/routes/homepage.module.css";
export default function WebsiteHeader(props:{isHomePage:boolean}){
	return <header class={styles.header}>
		<a
			target={props.isHomePage ? "_blank" : ""}
			href={props.isHomePage ? "https://docs.google.com/document/d/1OXNuIQdYByfBYvVxUXxjmP0cVLzuAt5SXSpJ_SpW71U/edit?usp=sharing" : "/"}
		>
			Jaya Surya
		</a>
		<div>
		<a
			href="/blog/tech"
		>
			Tech-blog
		</a>
		<a
			target="_blank"
			class={styles["resume-link"]}
			href="https://drive.google.com/file/d/15W_VI0AolmRHb4tC0LEhkMpJH1gU3T4K/view"
		>
			Resume / CV
		</a>
		</div>
	</header>
}