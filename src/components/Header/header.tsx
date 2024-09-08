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
			href="https://drive.google.com/file/d/1xECBJLIjhk3Z5bJ_ZWQF_5JpkbNaUTma/view?usp=sharing"
		>
			Resume / CV
		</a>
		</div>
	</header>
}