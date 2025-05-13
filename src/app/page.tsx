import styles from "./page.module.css";
import { Usuarios } from "@/components/Usuarios"

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Query /> */}
        <div className={styles.html}>
          <Usuarios />
{/*           <table>
            <tr> -----------------------------> tr = row marker
              <th>hola soy una celda</th> ----> th = header column marker
              <th>esta bien cabrona</th>
              <th>podemos hacer varias</th>
            </tr>
            <tr>
              <td>hola soy una celda</td> ------> td = normal one
              <td>esta bien cabrona</td>
              <td>podemos hacer varias</td>
            </tr>
            <tr>
              <td>hola soy una celda</td>
              <td colSpan={2}>colSpan colapsa 2 hacia el lado</td>
            </tr>
            <tr>
              <td rowSpan={2}>rowSpan colapsa n hacia abajo</td>
              <td>esta bien cabrona</td>
              <td>podemos hacer varias</td>
            </tr>
            <tr>
              <td>hola soy una celda</td>
              <td>esta bien cabrona</td>
            </tr>
          </table>
*/}        
      </div>
      </main>
    </div>
  );
}
