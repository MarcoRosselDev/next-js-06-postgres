import styles from "./page.module.css";
import { Query } from "@/components/query";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Query />
      </main>
      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  );
}
