import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      {/* <header class={styles.header}>
      Jaya Surya
      </header> */}
      <main class={styles.main}>
        <div>
          <h2>Jaya Surya</h2>
          <span>Website Coming Soon!</span>
        </div>
      </main>
    </div>
  );
};

export default App;
