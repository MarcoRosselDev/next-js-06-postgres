import Link from "next/link";

export default function Header(){
  return (
    <header>
      <p>hola mundo</p>
      <Link href="/nuevousuario">crear una cuanta</Link>
      <Link href='/login'>login</Link>
    </header>
  )
}