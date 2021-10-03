import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}><span>Jaya Surya</span></header>
      <main class={styles.main}>
        <div class={styles["content"]}>
          <h2>Senior Full Stack Developer</h2>
          <div class={styles.skills} style={{ display: "flex" }}>
            <span>Nodejs</span>
            <span>My Sql</span>
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
          Github
        </a>
        <a
          target="_blank"
          rel="noreferrer  noopener"
          href="https://twitter.com/jaysuryahyd"
        >
          twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=100027093039467"
        >
          facebook
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jaya-surya-b67a51206/"
        >
          linkedin
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jaysuryahyd@gmail.com"
          style={{ marginLeft: "auto" }}
        >
          jaysuryahyd@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default App;
