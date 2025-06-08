import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Query /> */}
        <Link href="/verbs/newverb">new verb</Link>
        <div className={styles.html}>
        </div>
      </main>
    </div>
  );
}
