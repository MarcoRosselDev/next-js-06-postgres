import Link from "next/link";
import styles from "./page.module.css";
import { Usuarios } from "@/components/Usuarios"

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Query /> */}
        <Link href="/verbs/newverb">new verb</Link>
        <div className={styles.html}>
          <Usuarios /> 
      </div>
      </main>
    </div>
  );
}
