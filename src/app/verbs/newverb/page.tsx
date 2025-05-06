import Link from "next/link";
import style from "./newverb.module.css";

export default function NewVerb(){
  return (
    <main>
      <form className={style.form_newverb}>
        <h3>New verb</h3>

        <label htmlFor="regularverb">regular verb</label>
        <input type="text" name="regularverb" id="regularverb" placeholder="...go" />
        <span>please enter a new message</span>

        <label htmlFor="simplepast">simple past</label>
        <input type="text" name="simplepast" id="simplepast" placeholder="...went" />
        <span>please enter a new message</span>

        <label htmlFor="presentperfect">present perfect</label>
        <input type="text" name="presentperfect" id="presentperfect" placeholder="...have gone/has gone" />
        <span>please enter a new message</span>

        <label htmlFor="presentcontinuous">present continuous</label>
        <input type="text" name="presentcontinuous" id="presentcontinuous" placeholder="...I'm going" />
        <span>please enter a new message</span>

        <label htmlFor="infinitivo">infinitivo</label>
        <input type="text" name="infinitivo" id="infinitivo" placeholder="...to go" />
        <span>please enter a new message</span>
      
        <button type="submit">send</button>

      </form>
      <Link href="/verbs" >go back</Link>
    </main>
  )
}