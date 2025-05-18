import sql from "../db/postgres";

export async function Usuarios() {
  const data = await sql`SELECT * FROM verbs_table;`;

/*   const [tabla, setTabla] = useState([]);

  useEffect(() =>{
    setTabla(data);
  },[])
 */
  return (
    <table>
      <tr>
        <th>regular</th>
        <th>simple past</th>
        <th>present perfect</th>
        <th>present continuous</th>
        <th>infinitivo</th>
      </tr>
      {
        data.map((value,index) =>{
          const {regularverb,
            simplepast, 
            presentcontinuous, 
            presentperfect,
            infinitivo
          } = value;
          return (
          <tr key={index}>
            <td>{regularverb}</td>
            <td>{simplepast}</td>
            <td>{presentperfect}</td>
            <td>{presentcontinuous}</td>
            <td>{infinitivo}</td>
          </tr>

          )
        })
      }
    </table>
  )
}


{/* table help from learning path of mozilla developer network (HTML)
  <table>
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