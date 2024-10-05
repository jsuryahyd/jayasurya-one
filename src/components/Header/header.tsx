import styles from "~/routes/homepage.module.css";
export default function WebsiteHeader(props:{isHomePage:boolean}){
	return <header class={styles.header}>
		<a
			target={props.isHomePage ? "_blank" : ""}
			href={props.isHomePage ? "https://docs.google.com/document/d/1YIL8aMWDrHraCcwdMnJhFn5GdzFYwMKHSGyG5f_cXhM/edit?usp=sharing" : "/"}
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
			href={process.env.RESUME_LINK}
		>
			Resume / CV
		</a>
		</div>
	</header>
}