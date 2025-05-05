import Link from "next/link";
import style from "./verbs.module.css"

export default function Verbs() {
  return (
    <div className={style.main}>
      <form className={style.form}>
        <label htmlFor="search">search verb</label>
        <input type="text" name="search" id="search" placeholder="verb..." autoComplete="off"/>
        <button type="submit">submit</button>
      </form>
      <p>verbs ... </p>
      <Link href="/verbs/newverb">new verb</Link>
    </div>
  )
}