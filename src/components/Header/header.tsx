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
		{/* <a
			href="/blog/tech"
		>
			Articles
		</a> */}
		<a
			target="_blank"
			class={styles["resume-link"]}
			href="https://drive.google.com/file/d/1UEZx58YNDmgRPJcP63YwvEm3RO4eyF9z/view?usp=sharing"
		>
			Resume / CV
		</a>
		</div>
	</header>
}