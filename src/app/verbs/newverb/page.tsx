import Link from "next/link";

export default function NewVerb(){
  return (
    <div>
      <form>
        <label htmlFor="regularverb">regular verb</label>
        <input type="text" name="regularverb" id="regularverb" placeholder="...go" />

        <label htmlFor="simplepast">simple past</label>
        <input type="text" name="simplepast" id="simplepast" placeholder="...went" />

        <label htmlFor="presentperfect">present perfect</label>
        <input type="text" name="presentperfect" id="presentperfect" placeholder="...have gone/has gone" />
      
        <label htmlFor="presentcontinuous">present continuous</label>
        <input type="text" name="presentcontinuous" id="presentcontinuous" placeholder="...I'm going" />

        <label htmlFor="infinitivo">infinitivo</label>
        <input type="text" name="infinitivo" id="infinitivo" placeholder="...to go" />
      </form>
      <Link href="/verbs" >go back</Link>
    </div>
  )
}